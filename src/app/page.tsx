import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-8 gap-8">
      <h1>Samples</h1>
      <ul className="">
        <li>
          <Link href="/ip">Fetch</Link>
        </li>
        <li>
          <Link href="/admin">Auth</Link>
        </li>
        <li className="pb-8">
          <Link href="/react-query">React Query</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </main>
  );
}
