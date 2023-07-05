import Image from "next/image";
import Link from "next/link";

export function Figure({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <figure>
      <Link href={src} target="_blank">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="!mb-0"
        />
      </Link>
      <figcaption className="!mt-1 text-center">{alt}</figcaption>
    </figure>
  );
}
