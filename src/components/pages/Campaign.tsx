import Link from "next/link";

const campaigns = [
  {
    id: 1,
    slug: "sogi-protest",
    name: "Protest University Of Reading Talk In Favour Of Conversion Therapy",
  },
  {
    id: 2,
    slug: "brianna-vigil",
    name: "Vigil For Brianna Ghey",
  },
  {
    id: 3,
    slug: "tdov-2023",
    name: "Trans Day Of Visibility 2023",
  },
];

export function Campaigns() {
  return (
    <ul className="flex flex-col gap-4">
      {campaigns.map((campaign) => (
        <li key={campaign.id} className="bg-white shadow">
          <Link className="p-8 block" href={`/campaigns/${campaign.slug}`}>
            {campaign.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
