type BookPreviewProps = {
  book: { id: string; foreword: string | undefined };
};

/** The client-component version of BookReview. */
export function BookRccPreview({ book }: BookPreviewProps) {
  return (
    <div>
      {book.id} {book.foreword}
    </div>
  );
}
