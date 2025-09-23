import Image from "next/image";

import crochetIllustration from "@/assets/images/crochet.png";

export default function Home() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center p-4">
      <Image src={crochetIllustration} alt="" className="w-full max-w-[31.25rem] mx-auto" priority />
      <h1 className="font-heading text-heading text-4xl mt-8 mb-4">Crocheting...</h1>
      <p>Site is under development.</p>
    </section>
  );
}
