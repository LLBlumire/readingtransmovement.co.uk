import Link from "next/link";

interface GlossaryEntry {
  slug: string;
  title: string | string[];
}

const glossaryEntries: GlossaryEntry[] = [
  {
    slug: "trans-genocide-advocate",
    title: [
      "Gender Critical",
      "GC",
      "Trans Exclusive Radical Feminist",
      "TERF",
      "Trans Genocide Advocate",
    ],
  },
  {
    slug: "deadname",
    title: "Deadname",
  },
];

interface NormalGlossaryEntry {
  slug: string;
  title: string;
}

const listedEntries: NormalGlossaryEntry[] = glossaryEntries.flatMap(
  (entry) => {
    if (Array.isArray(entry.title)) {
      return entry.title.map((title) => ({
        slug: entry.slug,
        title,
      }));
    } else {
      return entry as NormalGlossaryEntry;
    }
  }
);

const sortedEntries = listedEntries.sort((a, b) =>
  a.title.localeCompare(b.title, "en-GB")
);

export default function Page() {
  return (
    <>
      <h1>Learn</h1>
      <h2>Glossary</h2>
      <div className="not-prose">
        <ul className="flex flex-wrap list-none gap-x-4 gap-y-0.5">
          {sortedEntries.map((entry) => (
            <li key={entry.title} className="min-w-max">
              <Link
                href={`/learn/glossary/${entry.slug}`}
                className="underline"
              >
                {entry.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h2>For Medical Professionals</h2>
      <p>
        We prepared some materials for the{" "}
        <Link href="/jrdr">junior doctors strike</Link>. You may find useful
        information there. We are preparing more advice for local medical
        professionals and will include it here.
      </p>
    </>
  );
}
