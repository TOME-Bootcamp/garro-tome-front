class Author implements AuthorInterface {
  private readonly name: string;
  private readonly surname: string;

  public constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  getName(): string {
    return this.name;
  }

  getSurname(): string {
    return this.surname;
  }
}
