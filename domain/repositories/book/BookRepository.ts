interface BookRepository extends Repository<BookInterface> {
  getBookAuthor(id: number): AuthorInterface | undefined;
  getBookPublisher(id: number): PublisherInterface | undefined;
  getBookTags(id: number): TagInterface[];
}
