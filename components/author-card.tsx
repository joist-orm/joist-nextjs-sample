import { Author, EntityManager } from "@/entities/index";

type AuthorCardProps = {
  // Get this from a context
  em: EntityManager;
  author: Author;
};

export async function AuthorCard(props: AuthorCardProps) {
  const author = await props.author.populate("books");
  return (
    <div
      key={author.firstName}
      className="flex items-center justify-between py-3"
    >
      <div className="flex items-center space-x-4">
        <div className="space-y-1">
          <p className="font-medium leading-none">{author.firstName}</p>
          <p className="text-sm text-gray-500">{author.books.get.length} books</p>
        </div>
      </div>
    </div>
  );
}
