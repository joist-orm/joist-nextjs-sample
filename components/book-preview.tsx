import { Book } from "@/entities/index";
import { getEm } from "@/lib/em";

type BookPreviewProps = {
  book: { id: string };
};

export async function BookPreview({ book }: BookPreviewProps) {
  const b = await getEm().load(Book, book.id);
  return (
    <div>
      {book.id} {b.foreword}
    </div>
  );
}
