"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type CategoriesListProps = {
  text: string;
  emoji: string;
};

export default function CategoriesListItem({ text, emoji }: CategoriesListProps) {
  const urlLink = text === "all" ? "/" : `/${text}`;
  const pathname = usePathname();

  return (
    <li>
      <Link href={urlLink} className={`capitalize flex flex-row items-center gap-2 pl-2 pr-2.5 rounded-sm ${pathname === urlLink ? "bg-subheading text-light" : "bg-light duration-300 transition-colors hover:bg-dark group"}`}>
        <div aria-hidden className={"text-[1.75rem] duration-300 transition-transform group-hover:rotate-z-12"}>
          {emoji}
        </div>
        <div className={"font-medium text-sm"}>{text}</div>
      </Link>
    </li>
  );
}
