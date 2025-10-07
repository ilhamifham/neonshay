import Link from "next/link";
import CategoriesList from "./CategoriesList";

export default function Header() {
  return (
    <header className={"bg-neutral shadow-normal sticky top-0"}>
      <div className={"pt-4 flex flex-col items-center justify-center gap-4 max-w-full lg:px-4 lg:flex-row lg:justify-between lg:py-2.5"}>
        <Link href={"/"} className={"font-heading text-heading text-5xl ml-3.25 mr-4 -mt-1.75 mb-1"}>
          Neonshay
        </Link>
        <CategoriesList />
      </div>
    </header>
  );
}
