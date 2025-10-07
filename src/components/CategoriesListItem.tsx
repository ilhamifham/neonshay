import Link from "next/link";

type CategoriesListProps = {
  text: string;
  emoji: string;
};

export default function CategoriesListItem({ text, emoji }: CategoriesListProps) {
  const urlLink = text === "all" ? "/" : `/${text}`;

  return (
    <li>
      <Link href={urlLink} className={"capitalize flex flex-col items-center gap-1 px-3 lg:flex-row group"}>
        <div aria-hidden className={"text-[1.75rem] duration-300 group-hover:scale-110"}>
          {emoji}
        </div>
        <div className={"font-medium text-sm lg:text-base"}>{text}</div>
      </Link>
    </li>
  );
}
