import Link from "next/link";
import { auth } from "../server/auth";
import PostHogClient from "./posthog";

export default async function HomePage() {
  const session = await auth();
  const posthog = PostHogClient();
  const flags = await posthog.getAllFlags(
    'user_distinct_id' // replace with a user's distinct ID
  );
  console.log(`Flags for user`)
  console.dir(JSON.stringify(flags, null, 2))
  await posthog.shutdown()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {session ? (
        <div>
          <h1>Welcome {session.user.name}!</h1>
          <p>You are signed in!</p>
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>You are not signed in!</p>
        </div>
      )}
      <Link href="/about">To About Page</Link>
      <Link href={"/api/auth/signin"}>Sign In</Link>
      <Link href={"/api/auth/signout"}>Sign Out</Link>
    </main>
  );
}
