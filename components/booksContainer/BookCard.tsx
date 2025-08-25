import Image from 'next/image';

interface BookItemProps {
  book: BookInterface;
  index: number;
}

export default function BookCard({ book, index }: BookItemProps) {
  return (
    <div
      className={`flex h-fit w-[calc((100%-4*5%)/5)] flex-col items-center justify-center rounded-[var(--radius-md)] bg-[var(--ds-neutral-200)] ${(index + 1) % 4 === 0 ? 'mr-0' : ''} `}
    >
      <Image src={book.getCoverUrl()} alt={book.getTitle()} width={175} height={264} />
    </div>
  );
}
