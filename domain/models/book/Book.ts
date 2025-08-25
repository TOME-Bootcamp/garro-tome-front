class Book implements BookInterface {
  private readonly id: number;
  private readonly title: string;
  private readonly isbn: string;
  private readonly releaseDate: Date;
  private readonly pages: number;
  private readonly coverUrl: string;
  private readonly synopsis: string;
  private readonly language: string;
  private readonly publisherId: number;
  private readonly authorId: number;
  private readonly tagsIds: number[];

  public constructor(
    id: number,
    title: string,
    isbn: string,
    releaseDate: Date,
    pages: number,
    coverUrl: string,
    synopsis: string,
    language: string,
    publisherId: number,
    authorId: number,
    tagsIds: number[],
  ) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.releaseDate = new Date(releaseDate);
    this.pages = pages;
    this.coverUrl = coverUrl;
    this.synopsis = synopsis;
    this.language = language;
    this.publisherId = publisherId;
    this.authorId = authorId;
    this.tagsIds = tagsIds;
  }

  getAuthorId(): number {
    return this.authorId;
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

  getPublisherId(): number {
    return this.publisherId;
  }

  getReleaseDate(): Date {
    return this.releaseDate;
  }

  getSynopsis(): string {
    return this.synopsis;
  }

  getTagsIds(): number[] {
    return this.tagsIds;
  }

  getTitle(): string {
    return this.title;
  }
}
