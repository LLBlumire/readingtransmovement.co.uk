import Link from "next/link";
import { NavLink } from "./NavLink";

export function NavUl() {
  return (
    <ul className="flex justify-center gap-4 items-center">
      <li>
        <NavLink href="/learn">Learn</NavLink>
      </li>
      <li>
        <NavLink href="/campaigns">Campaigns</NavLink>
      </li>
      <li>
        <NavLink href="/help">Get Help</NavLink>
      </li>
    </ul>
  );
}
