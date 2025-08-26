import apiFetch from '@/infrastructure/api/api';
import Publisher from '@/domain/models/publisher/Publisher';

interface payload {
  id: number;
  name: string;
}

class PublisherApiRepository implements PublisherRepository {
  private readonly baseUrl: string;

  constructor() {
    if (process.env.NEXT_PUBLIC_API_BASE_URL) {
      this.baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/publishers`;
    } else {
      this.baseUrl = 'http://localhost:8080/publishers';
    }
  }
  async findAll(): Promise<PublisherInterface[]> {
    const data = await apiFetch<payload[]>(`${this.baseUrl}`);
    return data.map((p) => convertPayloadToPublisher(p));
  }
  async findById(id: number): Promise<PublisherInterface | undefined> {
    try {
      const data = await apiFetch<payload>(`${this.baseUrl}/${id}`);
      return convertPayloadToPublisher(data);
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
export default PublisherApiRepository;

function convertPayloadToPublisher(payload: payload): PublisherInterface {
  return new Publisher(payload.id, payload.name);
}
