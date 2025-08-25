import AuthorMockRepository from '@/infrastructure/mock/repositories/AuthorMockRepository';
import PublisherMockRepository from '@/infrastructure/mock/repositories/PublisherMockRepository';
import TagMockRepository from '@/infrastructure/mock/repositories/TagMockRepository';
import Book from '@/domain/models/book/Book';

class BookMockRepository implements BookRepository {
  private readonly books: BookInterface[];
  private readonly authorRepo: AuthorRepository = new AuthorMockRepository();
  private readonly publisherRepo: PublisherRepository = new PublisherMockRepository();
  private readonly tagRepo: TagRepository = new TagMockRepository();

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
        <PublisherInterface>this.publisherRepo.findById(1),
        <AuthorInterface>this.authorRepo.findById(1),
        [],
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
        <PublisherInterface>this.publisherRepo.findById(2),
        <AuthorInterface>this.authorRepo.findById(2),
        [],
      ),
    ];
  }

  findAll(): BookInterface[] {
    return this.books;
  }

  findById(id: number): BookInterface | undefined {
    for (const book of this.books) {
      if (book.getId() === id) {
        return book;
      }
    }
    return undefined;
  }

  getBookAuthor(id: number): AuthorInterface | undefined {
    this.books.forEach((book: BookInterface) => {
      if (book.getId() === id) {
        return book.getAuthor();
      }
    });
    return undefined;
  }

  getBookPublisher(id: number): PublisherInterface | undefined {
    this.books.forEach((book: BookInterface) => {
      if (book.getId() === id) {
        return book.getPublisher();
      }
    });
    return undefined;
  }

  getBookTags(id: number): TagInterface[] {
    let tags: TagInterface[] = [];
    this.books.forEach((book: BookInterface) => {
      if (book.getId() === id) {
        tags = book.getTags();
      }
    });
    return tags;
  }
}
export default BookMockRepository;
