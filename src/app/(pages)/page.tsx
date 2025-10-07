import Link from "next/link";

export default function RootPage() {
  return (
    <section>
      <div className={"py-8 px-4 max-w-full md:px-8"}>
        <section>
          <h2>
            <Link href="/bags" className={"text-xl font-heading text-subheading inline-flex flex-row gap-2 items-center group"}>
              <div>Available bags</div>
              <div className="duration-300 group-hover:ml-2">➡️</div>
            </Link>
          </h2>
          <ul></ul>
        </section>
      </div>
    </section>
  );
}
