import { AuthorCard } from "@/components/author-card";
import { Author, Book } from "@/entities/index";
import { getEm } from "@/lib/em";
import { RefreshButton } from "./refresh-button";

export async function Table() {
  console.log("RENDERING TABLE");
  const startTime = Date.now();
  const em = getEm();
  // Issues 1 query to fetch author + books
  const users = await em.find(Author, {}, { populate: ["books"] });
  const duration = Date.now() - startTime;

  const addBook = async () => {
    "use server";
    const em = getEm();
    const a = await em.load(Author, "a:1");
    em.create(Book, { author: a, title: "New Book" });
    await em.flush();
  };

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user) => (
          <AuthorCard
            key={user.id}
            // Currently have to craft the AuthorCard.author props manually, since
            // the entity itself can't go over the wire.
            author={{ firstName: user.firstName, books: user.books.get }}
            addBook={addBook}
          />
        ))}
      </div>
    </div>
  );
}
