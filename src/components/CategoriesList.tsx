import { categories } from "@/utils/data";
import CategoriesListItem from "./CategoriesListItem";

export default function CategoriesList() {
  return (
    <ul className={"px-4 pt-1 pb-4 w-full flex flex-row gap-5 overflow-x-auto no-scrollbar min-[45.1875rem]:justify-center min-[45.1875rem]:w-auto lg:pb-1"}>
      {categories.map((category) => {
        return <CategoriesListItem key={category.text} text={category.text} emoji={category.emoji} />;
      })}
    </ul>
  );
}
