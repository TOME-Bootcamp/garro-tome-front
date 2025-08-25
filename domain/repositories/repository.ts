interface Repository<T> {
  findAll(): T[];
  findById(id: number): T | undefined;
}
