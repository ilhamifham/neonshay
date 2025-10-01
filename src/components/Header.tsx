import Link from "next/link";
import CategoriesList from "./CategoriesList";

export default function Header() {
  return (
    <header className={"border-b border-b-dark bg-base"}>
      <div className={"pt-4 pb-3 flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto lg:px-4 lg:flex-row lg:justify-between lg:pb-4"}>
        <Link href={"/"} className={"font-heading text-heading text-5xl ml-3.25 mr-4 -mt-1.75 mb-1"}>
          Neonshay
        </Link>
        <CategoriesList />
      </div>
    </header>
  );
}
