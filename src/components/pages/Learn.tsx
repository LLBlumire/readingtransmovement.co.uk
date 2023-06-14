import Link from "next/link";
import { UnderConstruction } from "../UnderConstruction";

const glossary = [
  {
    slug: "trans-genocide-advocate",
    name: "Gender Critical (GC)",
  },
  {
    slug: "trans-genocide-advocate",
    name: "TERF",
  },
  {
    slug: "trans-genocide-advocate",
    name: "Trans Genocide Advocate",
  },
];

export function Learn() {
  return (
    <main className="px-4">
      <section className="bg-pink-200 shadow max-w-screen-lg my-8 lg:my-16 p-8 mx-auto">
        <h2 className="font-atkinson font-bold text-4xl">Glossary Of Terms</h2>
        <ul className="mt-4 text-lg flex flex-wrap gap-4 gap-y-2">
          {glossary.map((entry) => (
            <li
              className="underline font-bold hover:text-sky-500"
              key={entry.slug}
            >
              <Link href={`/learn/glossary/${entry.slug}`}>{entry.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="max-w-screen-lg mx-auto flex flex-col items-center">
        <UnderConstruction msg="More Resources Coming Soon" />
      </section>
    </main>
  );
}
