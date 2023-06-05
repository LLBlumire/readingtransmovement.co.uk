import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-zinc-800 text-white shadow p-6">
      <nav className="flex flex-col justify-between font-atkinson items-center text-lg md:flex-row gap-6">
        <Link href="/" className="hover:underline">
          <h1 className="font-bold text-2xl text-center">
            <span className="text-pink-200">Reading</span>&#8203;
            <span className="text-white">Trans</span>&#8203;
            <span className="text-sky-200">Movement</span>&#8203;
          </h1>
        </Link>
        <ul className="flex gap-4 sm:gap-6 flex-wrap">
          <NavContent />
        </ul>
      </nav>
    </header>
  );
}

function NavContent() {
  return (
    <>
      <li>
        <Link href="/learn" className="hover:underline">
          Learn
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:underline">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/campaigns" className="hover:underline">
          Campaigns
        </Link>
      </li>
      <li>
        <Link href="/help" className="hover:underline">
          Get Help
        </Link>
      </li>
    </>
  );
}
