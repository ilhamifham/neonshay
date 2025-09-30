import { categories } from "@/utils/data";
import CategoriesListItem from "./CategoriesListItem";

export default function CategoriesList() {
  return (
    <ul className={"px-4 py-1 w-full flex flex-row gap-5 overflow-x-auto no-scrollbar min-[43.75rem]:justify-center min-lg:w-auto"}>
      {categories.map((category) => {
        return <CategoriesListItem key={category.text} text={category.text} emoji={category.emoji} />;
      })}
    </ul>
  );
}
