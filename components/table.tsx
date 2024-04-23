import { AuthorRccCard } from "@/components/author-rcc-card";
import { AuthorRscCard } from "@/components/author-rsc-card";
import { Author, Book } from "@/entities/index";
import { getEm } from "@/lib/em";
import { JsonHint, JsonPayload } from "joist-orm";
import { RefreshButton } from "./refresh-button";

// The const needs to be defined on the server, otherwise if the client tries
// to define it, and the server-side imports it, it turns into some sort of proxy.
export const authorHint = {
  id: {},
  firstName: {},
  books: ["id", "title", "foreword"],
} satisfies JsonHint<Author>;

export type AuthorPayload = JsonPayload<Author, typeof authorHint>;

export async function Table() {
  console.log("RENDERING TABLE");
  const startTime = Date.now();
  const em = getEm();
  // Issues 1 query to fetch author + books
  const authors = await em.find(Author, {});
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
            Fetched {authors.length} users in {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="flex gap-5">
        <div className="divide-y divide-gray-900/5">
          Client-Side
          {authors.map(async (a) => (
            <AuthorRccCard
              key={a.id}
              author={await a.toJSON(authorHint)}
              addBook={addBook}
            />
          ))}
        </div>
        <div className="divide-y divide-gray-900/5">
          Server-Side
          {authors.map((a) => (
            <AuthorRscCard key={a.id} author={a} addBook={addBook} />
          ))}
        </div>
      </div>
    </div>
  );
}
