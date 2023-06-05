import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="my-8 md:my-12">
      <div className="px-4 flex justify-center gap-6 lg:gap-12 items-center max-w-screen-2xl mx-auto flex-wrap-reverse">
        <div className="bg-zinc-800 aspect-square w-max flex flex-col text-5xl md:text-7xl p-12 justify-center font-bold font-atkinson">
          <span className="text-pink-200">Reading</span>
          <span className="text-white">Trans</span>
          <span className="text-sky-200">Movement</span>
        </div>
        <div>
          <Image src="/images/hero.webp" width={800} height={600} alt="" />
        </div>
      </div>
    </section>
  );
}
