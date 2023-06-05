import FeaturedContent from "~/components/pages/md/Featured.mdx";

export function Featured() {
  return (
    <section className="my-20 md:my-32 prose prose-zinc lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto px-6">
      <FeaturedContent />
    </section>
  );
}
