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
      <Link href={urlLink} className={`capitalize text-subheading flex flex-row items-center gap-2 py-2 px-3 font-medium rounded-sm hover:bg-dark focus-visible:bg-dark duration-300 ${activeLink ? "bg-dark shadow" : "bg-light"}`}>
        <div aria-hidden>{emoji}</div>
        <div>{text}</div>
      </Link>
    </li>
  );
}
