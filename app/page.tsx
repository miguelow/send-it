
import Link from "next/Link";

export default function Home() {
  return (
    <main className="py-4 px-48">
      <Link className="bg-teal-400 text-black font-bold py-2 px-4 rounded-md" href={'/dashboard'}>Go to dashboard</Link>
    </main>
  )
}
