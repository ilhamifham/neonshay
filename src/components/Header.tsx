import Link from "next/link";
import CategoriesList from "./CategoriesList";
// import Image from "next/image";

export default function Header() {
  return (
    <header className={"border-b border-b-lighter"}>
      <div className={"pt-4 pb-3 flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto min-lg:flex-row min-lg:justify-between min-lg:pb-4"}>
        <Link href={"/"} className={"font-heading text-heading text-5xl mx-4 -mt-1.75 mb-1"}>
          {/* <Image src={""} alt={"neonshay home page"} /> */}
          Neonshay
        </Link>
        <CategoriesList />
      </div>
    </header>
  );
}
