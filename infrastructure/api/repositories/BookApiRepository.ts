import apiFetch from '@/infrastructure/api/api';
import Book from '@/domain/models/book/Book';
import Author from '@/domain/models/author/Author';
import Publisher from '@/domain/models/publisher/Publisher';
import Tag from '@/domain/models/tag/Tag';

interface Payload {
  id: number;
  title: string;
  isbn: string;
  releaseDate: string;
  pagesAmount: number;
  coverUrl: string;
  synopsis: string;
  language: string;
  publisher: {
    id: number;
    name: string;
  };
  author: {
    id: number;
    name: string;
    surname: string;
  };
  tags: [
    {
      id: number;
      name: string;
    },
  ];
}

export class BookApiRepository implements BookRepository {
  private readonly baseUrl: string;

  constructor() {
    if (process.env.NEXT_PUBLIC_API_BASE_URL) {
      this.baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/books`;
    } else {
      this.baseUrl = 'http://localhost:8080/books';
    }
  }
  async findByAuthorOrIsbnOrTitle(query: string): Promise<BookInterface[]> {
    const data = await apiFetch<Payload[]>(`${this.baseUrl}?search=${encodeURIComponent(query)}`);
    return data.map((it) => convertPayloadToBook(it));
  }
  async getBookAuthor(id: number): Promise<AuthorInterface | undefined> {
    const book = this.findById(id);
    book
      .then((book) => {
        if (!book) {
          throw Error('Book not found');
        }

        return book.getAuthor();
      })
      .catch((error) => {
        throw error;
      });
    return undefined;
  }
  async getBookPublisher(id: number): Promise<PublisherInterface | undefined> {
    const book = this.findById(id);
    book
      .then((book) => {
        if (!book) {
          throw Error('Book not found');
        }
        return book.getPublisher();
      })
      .catch((error) => {
        throw error;
      });
    return undefined;
  }
  async getBookTags(id: number): Promise<TagInterface[]> {
    const book = this.findById(id);
    book
      .then((book) => {
        if (!book) {
          throw Error('Book not found');
        }
        return book.getTags();
      })
      .catch((error) => {
        throw error;
      });
    return [];
  }
  async findAll(): Promise<BookInterface[]> {
    const data = await apiFetch<Payload[]>(`${this.baseUrl}`);
    return data.map((b: Payload) => convertPayloadToBook(b));
  }
  async findById(id: number): Promise<BookInterface | undefined> {
    try {
      const payload = await apiFetch<Payload>(`${this.baseUrl}/${id}`);
      return convertPayloadToBook(payload);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes('404')) {
          return undefined;
        }
        throw err;
      }
    }
  }
}

function convertPayloadToBook(payload: Payload): BookInterface {
  return new Book(
    payload.id,
    payload.title,
    payload.isbn,
    new Date(payload.releaseDate),
    payload.pagesAmount,
    payload.coverUrl,
    payload.synopsis,
    payload.language,
    new Publisher(payload.publisher.id, payload.publisher.name),
    new Author(payload.author.id, payload.author.name, payload.author.surname),
    payload.tags.map((tag) => new Tag(tag.id, tag.name)),
  );
}
