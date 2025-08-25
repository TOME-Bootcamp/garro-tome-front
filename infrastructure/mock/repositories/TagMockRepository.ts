import Tag from '@/domain/models/tag/Tag';

class TagMockRepository implements TagRepository {
  private readonly tags: Tag[];

  public constructor() {
    this.tags = [new Tag(1, 'Tag 1'), new Tag(2, 'Tag 2'), new Tag(3, 'Tag 3')];
  }

  findAll(): TagInterface[] {
    return this.tags;
  }
  findById(id: number): TagInterface | undefined {
    for (const tag of this.tags) {
      if (tag.getId() === id) {
        return tag;
      }
    }
    return undefined;
  }
}
export default TagMockRepository;
