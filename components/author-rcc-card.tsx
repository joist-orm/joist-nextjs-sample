"use client";
import { BookRccPreview } from "@/components/book-rcc-preview";
import { AuthorPayload } from "@/components/table";

type AuthorCardProps = {
  author: AuthorPayload;
  addBook: (id: string) => Promise<void>;
};

/** The RCC version of AuthorCard, accepts the `AuthorPayload`. */
export function AuthorRccCard({ author, addBook }: AuthorCardProps) {
  return (
    <div key={author.id} className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-4">
        <div className="space-y-1">
          <p className="font-medium leading-none">{author.firstName}</p>
          <div className="text-sm text-gray-500">
            {author.books.map((b) => (
              <BookRccPreview key={b.id} book={b} />
            ))}
          </div>
          {/* We can use button+onClick directly here. */}
          <button
            className="text-sm text-gray-500"
            onClick={() => addBook(author.id)}
          >
            add book
          </button>
        </div>
      </div>
    </div>
  );
}
