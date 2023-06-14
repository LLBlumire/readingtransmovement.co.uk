import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-screen-xl my-8 lg:my-16 px-8 lg:px-18 mx-auto">
      {children}
    </main>
  );
}
