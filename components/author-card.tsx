import { Button } from "@/components/add-button";
import { BookPreview } from "@/components/book-preview";
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
          <div className="text-sm text-gray-500">
            {author.books.map((b) => (
              <BookPreview key={b.id} book={b} />
            ))}
          </div>
          <Button id={author.id} addBook={addBook} />
        </div>
      </div>
    </div>
  );
}
