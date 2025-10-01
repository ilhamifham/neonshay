"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type CategoriesListProps = {
  text: string;
  emoji: string;
};

export default function CategoriesListItem({ text, emoji }: CategoriesListProps) {
  const pathname = usePathname();
  const urlLink = text === "all" ? "/" : `/${text}`;
  const activeLink = pathname === urlLink;

  return (
    <li>
      <Link href={urlLink} className={`capitalize flex flex-row items-center gap-2 py-2 px-3 font-medium rounded-sm active:scale-95 shadow duration-300 ${activeLink ? "bg-black text-light" : "bg-light text-subheading hover:bg-dark focus-visible:bg-dark"}`}>
        <div aria-hidden>{emoji}</div>
        <div>{text}</div>
      </Link>
    </li>
  );
}
