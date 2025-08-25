class Author implements AuthorInterface {
  private readonly id: number;
  private readonly name: string;
  private readonly surname: string;

  public constructor(id: number, name: string, surname: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSurname(): string {
    return this.surname;
  }
}
