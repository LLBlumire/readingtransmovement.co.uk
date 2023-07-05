import "~/globals.css";
import { Inter, Atkinson_Hyperlegible } from "next/font/google";
import Link from "next/link";
import { NavUl } from "~/components/NavUl";
import { Facebook, Github, Twitter, Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { NavLink } from "~/components/NavLink";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  title: "Reading Trans Movement",
  description:
    "Reading Trans Movement is an activist group in Reading. Founded to support the local trans and gender non-conforming community, and to oppose any who would advocate for the torture and genocide of our community.",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={(inter.variable, atkinson.variable)}>
      <body className="font-inter bg-neutral-100 flex flex-col min-h-[100dvh] text-neutral-900">
        <header className="font-atkinson">
          <div className="bg-sky-300 w-full p-4 lg:p-6">
            <Link
              className="text-2xl lg:text-4xl text-center block mx-auto max-w-max"
              href="/"
            >
              Reading Trans Movement
            </Link>
          </div>
          <div className="bg-rose-300 w-full p-2 lg:p-4">
            <NavUl />
          </div>
        </header>
        <main className="flex-grow lg:my-12 my-6">
          <article className="prose lg:prose-lg xl:prose-xl mx-auto prose-neutral prose-headings:font-atkinson px-4">
            {children}
          </article>
        </main>
        <footer className="font-atkinson">
          <div className="bg-rose-300 w-full p-2 lg:p-4">
            <ul className="flex gap-2 justify-center">
              <li>
                <Link href="https://twitter.com/readingtransmvt">
                  <Twitter width={34} className="not-sr-only" />
                  <div className="sr-only">Twitter</div>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/readingtransmvt/">
                  <Instagram width={34} className="not-sr-only" />
                  <div className="sr-only">Intagram</div>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/profile.php?id=100081774875259">
                  <Facebook width={34} className="not-sr-only" />
                  <div className="sr-only">Facebook</div>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@readingtransmvt">
                  <Youtube width={34} className="not-sr-only" />
                  <div className="sr-only">Youtube</div>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/LLBlumire/readingtransmovement.co.uk">
                  <Github width={34} className="not-sr-only" />
                  <div className="sr-only">Website Source Code</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-sky-300 w-full p-2 lg:p-4">
            <ul className="flex justify-center gap-4">
              <li>
                <NavLink href="/join">Join Us</NavLink>
              </li>
              <li>
                <NavLink href="/legal">Legal</NavLink>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
