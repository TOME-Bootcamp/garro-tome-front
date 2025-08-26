import Book from '@/domain/models/book/Book';
import Author from '@/domain/models/author/Author';
import Publisher from '@/domain/models/publisher/Publisher';
import Tag from '@/domain/models/tag/Tag';

class BookMockRepository implements BookRepository {
  private readonly books: BookInterface[];

  constructor() {
    this.books = [
      new Book(
        1,
        'Book 1',
        '0123456789',
        new Date(''),
        999,
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629308732i/727800.jpg',
        'placeholder',
        'Spanish',
        new Publisher(1, 'Publisher 1'),
        new Author(1, 'Author 1', 'Author 1'),
        [new Tag(1, 'Tag 1')],
      ),
      new Book(
        2,
        'Book 2',
        '0123456789',
        new Date(''),
        999,
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651340688i/727798.jpg',
        'placeholder',
        'English',
        new Publisher(2, 'Publisher 2'),
        new Author(2, 'Author 2', 'Author 2'),
        [new Tag(2, 'Tag 2')],
      ),
    ];
  }
  async findByAuthorOrIsbnOrTitle(query: string): Promise<BookInterface[]> {
    return this.books.filter(
      (book: BookInterface) =>
        book.getTitle().toLowerCase().includes(query.toLowerCase()) ||
        book.getIsbn().toLowerCase().includes(query.toLowerCase()) ||
        book.getAuthor()?.getName().toLowerCase().includes(query.toLowerCase()) ||
        book.getAuthor()?.getSurname().toLowerCase().includes(query.toLowerCase()),
    );
  }

  async findAll(): Promise<BookInterface[]> {
    return this.books;
  }

  findById(id: number): Promise<BookInterface | undefined> {
    return new Promise<BookInterface | undefined>((resolve) => {
      for (const book of this.books) {
        if (book.getId() === id) {
          return book;
        }
      }
      return undefined;
    });
  }

  getBookAuthor(id: number): Promise<AuthorInterface | undefined> {
    return new Promise<AuthorInterface | undefined>((resolve) => {
      for (const book of this.books) {
        if (book.getId() === id) {
          return book.getAuthor();
        }
      }
      return undefined;
    });
  }

  getBookPublisher(id: number): Promise<PublisherInterface | undefined> {
    return new Promise<PublisherInterface | undefined>((resolve) => {
      for (const book of this.books) {
        if (book.getId() === id) {
          return book.getPublisher();
        }
      }
      return undefined;
    });
  }

  getBookTags(id: number): Promise<TagInterface[]> {
    return new Promise<TagInterface[]>((resolve) => {
      for (const book of this.books) {
        if (book.getId() === id) {
          return book.getTags();
        }
      }
      return undefined;
    });
  }
}
export default BookMockRepository;
