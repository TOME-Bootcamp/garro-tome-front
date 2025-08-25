interface BookInterface {
  getId(): number;
  getTitle(): string;
  getIsbn(): string;
  getReleaseDate(): Date;
  getPages(): number;
  getCoverUrl(): string;
  getSynopsis(): string;
  getLanguage(): string;
  getPublisher(): PublisherInterface;
  getAuthor(): AuthorInterface;
  getTags(): TagInterface[];
}
