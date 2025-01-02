import Link from "next/link";
import { auth } from "../server/auth"

export default async function HomePage() {
  const session = await auth()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {session ? (
        <div>
          <h1>Welcome {session.user.id}!</h1>
          <p>You are signed in!</p>
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>You are not signed in!</p>
        </div>
      )}
      <Link href={"/api/auth/signin"}>Sign In</Link>
      <Link href={"/api/auth/signout"}>Sign Out</Link>
    </main>
  );
}
