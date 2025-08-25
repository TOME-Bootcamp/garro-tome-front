class AuthorMockRepository implements AuthorRepository {
  private readonly authors: AuthorInterface[];

  constructor() {
    this.authors = [
      new Author(1, 'Author 1', 'Author 1'),
      new Author(2, 'Author 1', 'Author 1'),
      new Author(3, 'Author 1', 'Author 1'),
    ];
  }

  findAll(): AuthorInterface[] {
    return this.authors;
  }

  findById(id: number): AuthorInterface | undefined {
    this.authors.forEach((author) => {
      if (author.getId() === id) {
        return author;
      }
    });
    return undefined;
  }
}
