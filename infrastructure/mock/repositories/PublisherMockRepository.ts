import Publisher from '@/domain/models/publisher/Publisher';

class PublisherMockRepository implements Repository<PublisherInterface> {
  private readonly publishers;

  public constructor() {
    this.publishers = [new Publisher(1, 'Publisher 1'), new Publisher(1, 'Publisher 2')];
  }

  findAll(): PublisherInterface[] {
    return this.publishers;
  }

  findById(id: number): PublisherInterface | undefined {
    for (const publisher of this.publishers) {
      if (publisher.getId() === id) {
        return publisher;
      }
    }
    return undefined;
  }
}
export default PublisherMockRepository;
