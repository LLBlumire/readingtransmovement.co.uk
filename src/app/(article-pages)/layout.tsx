import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <article className="mx-auto px-8 lg:px-16 mt-8 lg:mt-16 prose prose-neutral lg:prose-xl">
        {children}
      </article>
    </main>
  );
}
