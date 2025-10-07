import { categories } from "@/utils/data";
import CategoriesListItem from "./CategoriesListItem";

export default function CategoriesList() {
  return (
    <ul className={"px-4 pt-1 pb-3 w-full flex flex-row gap-5 overflow-x-auto no-scrollbar min-[33rem]:justify-center lg:w-auto lg:gap-4 lg:py-1.5"}>
      {categories.map((category) => {
        return <CategoriesListItem key={category.text} text={category.text} emoji={category.emoji} />;
      })}
    </ul>
  );
}
