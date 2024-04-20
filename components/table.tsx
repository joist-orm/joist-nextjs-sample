import { AuthorCard } from "@/components/author-card";
import { Author, Book } from "@/entities/index";
import { getEm } from "@/lib/em";
import { JsonHint, JsonPayload } from "joist-orm";
import { RefreshButton } from "./refresh-button";

export const authorHint = {
  id: {},
  firstName: {},
  books: "title",
} satisfies JsonHint<Author>;

export type AuthorPayload = JsonPayload<Author, typeof authorHint>;

export async function Table() {
  console.log("RENDERING TABLE");
  const startTime = Date.now();
  const em = getEm();
  // Issues 1 query to fetch author + books
  const users = await em.find(Author, {}, { populate: ["books"] });
  const duration = Date.now() - startTime;

  const addBook = async (id: string) => {
    "use server";
    const em = getEm();
    const a = await em.load(Author, id);
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
        {await Promise.all(
          users.map(async (user) => (
            <AuthorCard
              key={user.id}
              author={await user.toJSON(authorHint)}
              addBook={addBook}
            />
          )),
        )}
      </div>
    </div>
  );
}
