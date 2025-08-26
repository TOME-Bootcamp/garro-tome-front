interface Repository<T> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | undefined>;
}
