import { Button } from "@/components/add-button";
import { BookRscPreview } from "@/components/book-rsc-preview";
import { Author } from "@/entities/index";

type AuthorCardProps = {
  author: Author;
  addBook: (id: string) => Promise<void>;
};

/** The RSC version of AuthorCard, can accept `Author` entities. */
export async function AuthorRscCard(props: AuthorCardProps) {
  const author = await props.author.populate("books");
  return (
    <div key={author.id} className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-4">
        <div className="space-y-1">
          <p className="font-medium leading-none">{author.firstName}</p>
          <div className="text-sm text-gray-500">
            {author.books.get.map((b) => (
              <BookRscPreview key={b.id} book={b} />
            ))}
          </div>
          {/* Have to use `Button` here instead of a button+onClick. */}
          <Button id={author.id} addBook={props.addBook} />
        </div>
      </div>
    </div>
  );
}
