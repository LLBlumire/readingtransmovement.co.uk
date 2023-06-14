import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto mt-8 lg:mt-16 px-8 lg:px-16 flex flex-col items-center">
      {children}
    </main>
  );
}
