import { AuthorCard } from "@/components/author-card";
import { Author } from "@/entities/index";
import { getEm } from "@/lib/em";
import RefreshButton from "./refresh-button";

export default async function Table() {
  console.log("RENDERING TABLE");
  const startTime = Date.now();
  const em = getEm();
  const users = await em.find(Author, {}, { populate: ["books"] });
  const duration = Date.now() - startTime;

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
          <AuthorCard key={user.id} em={em} author={user} />
        ))}
      </div>
    </div>
  );
}
