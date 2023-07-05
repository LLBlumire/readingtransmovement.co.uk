import Link from "next/link";
import React from "react";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="hover:underline text-lg">
      {children}
    </Link>
  );
}
