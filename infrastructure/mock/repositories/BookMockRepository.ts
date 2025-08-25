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
        'placeholder',
        'placeholder',
        'Spanish',
        1,
        1,
        [],
      ),
      new Book(
        2,
        'Book 2',
        '0123456789',
        new Date(''),
        999,
        'placeholder',
        'placeholder',
        'English',
        2,
        2,
        [],
      ),
    ];
  }

  findAll(): BookInterface[] {
    return this.books;
  }

  findById(id: number): BookInterface | undefined {
    this.books.forEach((book: BookInterface) => {
      if (book.getId() === id) {
        return book;
      }
    });
    return undefined;
  }

  getBookAuthor(id: number): AuthorInterface | undefined {
    this.books.forEach((book: BookInterface) => {
      if (book.getId() === id) {
        return this.authorRepo.findById(book.getAuthorId());
      }
    });
    return undefined;
  }

  getBookPublisher(id: number): PublisherInterface | undefined {
    this.books.forEach((book: BookInterface) => {
      if (book.getId() === id) {
        return this.publisherRepo.findById(book.getPublisherId());
      }
    });
    return undefined;
  }

  getBookTags(id: number): TagInterface[] {
    const tags: TagInterface[] = [];
    this.books.forEach((book: BookInterface) => {
      if (book.getId() === id) {
        book.getTagsIds().forEach((tagId) => {
          const tag: TagInterface | undefined = this.tagRepo.findById(tagId);
          if (tag) {
            tags.push(tag);
          }
        });
      }
    });
    return tags;
  }
}
