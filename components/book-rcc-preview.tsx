type BookPreviewProps = {
  book: { id: string; title: string; foreword: string | undefined };
};

/** The client-component version of BookReview. */
export function BookRccPreview({ book }: BookPreviewProps) {
  return (
    <div>
      {book.title} -- {book.foreword}
    </div>
  );
}
