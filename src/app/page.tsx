import Image from "next/image";

import crochetIllustration from "@/assets/images/crochet.png";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-full p-4 gap-8">
      <Image src={crochetIllustration} alt="" className="w-full max-w-[31.25rem] mx-auto" />
      <h1 className="font-heading text-4xl animate-pulse">Crocheting...</h1>
    </section>
  );
}
