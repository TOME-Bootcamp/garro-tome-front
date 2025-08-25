class PublisherMockRepository implements Repository<PublisherInterface> {
  private readonly publishers;

  constructor() {
    this.publishers = [new Publisher(1, 'Publisher 1'), new Publisher(1, 'Publisher 2')];
  }

  findAll(): PublisherInterface[] {
    return this.publishers;
  }

  findById(id: number): PublisherInterface | undefined {
    this.publishers.forEach((publisher) => {
      if (publisher.getId() === id) {
        return publisher;
      }
    });
    return undefined;
  }
}
