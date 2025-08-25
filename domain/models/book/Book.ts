class Book implements BookInterface {
  private readonly id: number;
  private readonly title: string;
  private readonly isbn: string;
  private readonly releaseDate: Date;
  private readonly pages: number;
  private readonly coverUrl: string;
  private readonly synopsis: string;
  private readonly language: string;
  private readonly publisher: PublisherInterface;
  private readonly author: AuthorInterface;
  private readonly tags: TagInterface[];

  public constructor(
    id: number,
    title: string,
    isbn: string,
    releaseDate: Date,
    pages: number,
    coverUrl: string,
    synopsis: string,
    language: string,
    publisher: PublisherInterface,
    author: AuthorInterface,
    tags: TagInterface[],
  ) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.releaseDate = new Date(releaseDate);
    this.pages = pages;
    this.coverUrl = coverUrl;
    this.synopsis = synopsis;
    this.language = language;
    this.publisher = publisher;
    this.author = author;
    this.tags = tags;
  }

  getAuthor(): AuthorInterface {
    return this.author;
  }

  getCoverUrl(): string {
    return this.coverUrl;
  }

  getId(): number {
    return this.id;
  }

  getIsbn(): string {
    return this.isbn;
  }

  getLanguage(): string {
    return this.language;
  }

  getPages(): number {
    return this.pages;
  }

  getPublisher(): PublisherInterface {
    return this.publisher;
  }

  getReleaseDate(): Date {
    return this.releaseDate;
  }

  getSynopsis(): string {
    return this.synopsis;
  }

  getTags(): TagInterface[] {
    return this.tags;
  }

  getTitle(): string {
    return this.title;
  }
}
export default Book;
