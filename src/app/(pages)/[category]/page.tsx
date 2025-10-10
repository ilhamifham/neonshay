import { categories } from "@/utils/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.text,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const validCategories = categories.map((category) => category.text);

  if (!validCategories.includes(category)) return notFound();

  return <section>Hello {category}</section>;
}
