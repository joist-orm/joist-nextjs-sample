import { Book } from "@/entities/index";

type BookPreviewProps = {
  book: Book;
};

/** The RSC version of BookPreview, can accept `Book` entities. */
export async function BookRscPreview({ book }: BookPreviewProps) {
  return (
    <div>
      <div>{book.title} -- {book.foreword}</div>
    </div>
  );
}
