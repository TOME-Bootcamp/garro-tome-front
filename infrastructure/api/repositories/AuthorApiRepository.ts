import apiFetch from '@/infrastructure/api/api';
import Author from '@/domain/models/author/Author';

interface payload {
  id: number;
  name: string;
  surname: string;
}

class AuthorApiRepository implements AuthorRepository {
  private readonly baseUrl: string;

  constructor() {
    if (process.env.NEXT_PUBLIC_API_BASE_URL) {
      this.baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/authors`;
    } else {
      this.baseUrl = 'http://localhost:8080/authors';
    }
  }
  async findAll(): Promise<AuthorInterface[]> {
    const data = await apiFetch<payload[]>(`${this.baseUrl}`);
    return data.map((a) => convertPayloadToAuthor(a));
  }
  async findById(id: number): Promise<AuthorInterface | undefined> {
    try {
      const data = await apiFetch<payload>(`${this.baseUrl}/${id}`);
      return convertPayloadToAuthor(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes('404')) {
          return undefined;
        }
        throw err;
      }
    }
  }
}
export default AuthorApiRepository;

function convertPayloadToAuthor(payload: payload): AuthorInterface {
  return new Author(payload.id, payload.name, payload.surname);
}
