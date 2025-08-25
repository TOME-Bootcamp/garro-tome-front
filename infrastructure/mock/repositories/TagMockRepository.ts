class TagMockRepository implements TagRepository {
  private readonly tags: Tag[];

  public constructor() {
    this.tags = [new Tag(1, 'Tag 1'), new Tag(2, 'Tag 2'), new Tag(3, 'Tag 3')];
  }

  findAll(): TagInterface[] {
    return this.tags;
  }
  findById(id: number): TagInterface | undefined {
    this.tags.forEach((tag) => {
      if (tag.getId() === id) {
        return tag;
      }
    });
    return undefined;
  }
}
