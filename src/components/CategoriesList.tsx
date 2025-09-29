import Link from "next/link";
import { categories } from "@/utils/data";

export default function CategoriesList() {
  return (
    <ul className={"px-4 py-1 w-full flex flex-row gap-5 overflow-x-auto no-scrollbar min-[38rem]:justify-center min-lg:w-auto"}>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/${category.text !== "bags" ? category.text : "/"}`} className={"capitalize flex flex-row items-center gap-2 bg-base py-2 px-3 font-medium rounded-sm hover:bg-white focus-visible:bg-white duration-300"}>
            <div>{category.emoji}</div>
            <div>{category.text}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
