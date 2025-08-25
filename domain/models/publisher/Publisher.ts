class Publisher implements TagInterface {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
