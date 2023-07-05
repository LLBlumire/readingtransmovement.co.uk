import Link from "next/link";

interface CampaignEntry {
  slug: string;
  title: string;
  date: [number, number, number];
  datePrefix?: string;
}

const campaignEntries: CampaignEntry[] = [
  {
    slug: "sogi-protest",
    title:
      "Protesting A University Of Reading Talk In Favour Of Conversion Therapy",
    date: [2022, 4, 25],
  },
  {
    slug: "brianna-vigil",
    title: "Vigil For Brianna Ghey",
    date: [2023, 2, 18],
  },
  {
    slug: "tdov-2023",
    title: "Trans Day Of Visibility March",
    date: [2023, 4, 1],
  },
  {
    slug: "jrdr",
    title: "Junior Doctors Strike Solidarity",
    date: [2023, 6, 16],
  },
];

const sortedEntries = campaignEntries.sort(
  (a, b) =>
    b.date[0] - a.date[0] || b.date[1] - a.date[1] || b.date[2] - a.date[2]
);

export default function Page() {
  return (
    <>
      <h1>Campaigns</h1>
      <ol className="list-none !pl-0 flex flex-col not-prose">
        {sortedEntries.map((entry) => (
          <li
            className="!pl-0 grid grid-cols-[max-content,1fr] gap-4"
            key={entry.slug}
          >
            <div>
              {entry.datePrefix ? `${entry.datePrefix} ` : ""}
              {formatDate(entry.date)}
            </div>
            <Link href={`/campaigns/${entry.slug}`} className="underline">
              {entry.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

function formatDate([year, month, day]: [number, number, number]): string {
  const pYear = year.toString().padStart(4, "0");
  const pMonth = month.toString().padStart(2, "0");
  const pDay = day.toString().padStart(2, "0");
  return `${pDay}/${pMonth}/${pYear}`;
}
