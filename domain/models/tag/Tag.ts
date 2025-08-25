class Tag implements TagInterface {
  private readonly id: number;
  private readonly name: string;

  public constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}
