import { Navbar } from "~/components/Navbar";
import "~/globals.css";
import { Inter, Atkinson_Hyperlegible } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
});

export const metadata = {
  title: "Reading Trans Movement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${atkinson.variable}`}>
      <body className="font-inter bg-zinc-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
