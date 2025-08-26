interface BookRepository extends Repository<BookInterface> {
  getBookAuthor(id: number): Promise<AuthorInterface | undefined>;
  getBookPublisher(id: number): Promise<PublisherInterface | undefined>;
  getBookTags(id: number): Promise<TagInterface[]>;
}
