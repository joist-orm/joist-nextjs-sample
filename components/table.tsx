import { Author } from "@/entities/index";
import { newEm } from "@/lib/em";
import RefreshButton from './refresh-button'

export default async function Table() {
  const startTime = Date.now()
  const em = newEm();
  const users = await em.find(Author, {});
  const duration = Date.now() - startTime

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
          <div key={user.firstName} className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">{user.firstName}</p>
                <p className="text-sm text-gray-500">{user.firstName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
