"use client";
import { AuthorPayload } from "@/components/table";

type AuthorCardProps = {
  author: AuthorPayload;
  addBook: (id: string) => Promise<void>;
};

export async function AuthorCard({ author, addBook }: AuthorCardProps) {
  return (
    <div
      key={author.firstName}
      className="flex items-center justify-between py-3"
    >
      <div className="flex items-center space-x-4">
        <div className="space-y-1">
          <p className="font-medium leading-none">{author.firstName}</p>
          <p className="text-sm text-gray-500">
            {author.books.map((b) => b.title).join(", ")} books
          </p>
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
