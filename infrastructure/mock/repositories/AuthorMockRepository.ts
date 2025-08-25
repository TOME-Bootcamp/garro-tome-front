import Author from '@/domain/models/author/Author';

class AuthorMockRepository implements AuthorRepository {
  private readonly authors: AuthorInterface[];

  constructor() {
    this.authors = [
      new Author(1, 'Author 1', 'Author 1'),
      new Author(2, 'Author 2', 'Author 2'),
      new Author(3, 'Author 3', 'Author 3'),
    ];
  }

  findAll(): AuthorInterface[] {
    return this.authors;
  }

  findById(id: number): AuthorInterface | undefined {
    for (const author of this.authors) {
      if (author.getId() === id) {
        return author;
      }
    }
    return undefined;
  }
}
export default AuthorMockRepository;
