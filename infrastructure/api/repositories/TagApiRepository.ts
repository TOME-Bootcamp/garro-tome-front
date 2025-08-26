import apiFetch from '@/infrastructure/api/api';
import Tag from '@/domain/models/tag/Tag';

interface payload {
  id: number;
  name: string;
}

class TagApiRepository implements TagRepository {
  private readonly baseUrl: string;

  constructor() {
    if (process.env.NEXT_PUBLIC_API_BASE_URL) {
      this.baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/tags`;
    } else {
      this.baseUrl = 'http://localhost:8080/tags';
    }
  }
  async findAll(): Promise<TagInterface[]> {
    const data = await apiFetch<payload[]>(`${this.baseUrl}`);
    return data.map((t) => convertPayloadToTag(t));
  }
  async findById(id: number): Promise<TagInterface | undefined> {
    try {
      const data = await apiFetch<payload>(`${this.baseUrl}/${id}`);
      return convertPayloadToTag(data);
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
export default TagApiRepository;

function convertPayloadToTag(payload: payload): TagInterface {
  return new Tag(payload.id, payload.name);
}
