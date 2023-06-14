import { ReactNode } from "react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BackToLearn />
    </>
  );
}

function BackToLearn() {
  return (
    <Link
      href="/learn"
      className="flex gap-2 items-center rounded-full bg-sky-200 max-w-max py-2 px-4 not-prose hover:bg-sky-300"
    >
      <MoveLeft />
      <span>Learn More</span>
    </Link>
  );
}
