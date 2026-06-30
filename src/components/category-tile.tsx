import { Link } from "@tanstack/react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { Category } from "@/data/articles";

const toneBg: Record<Category["tone"], string> = {
  primary: "bg-primary text-primary-foreground",
  mint: "bg-mint text-navy",
  coral: "bg-coral text-navy",
  amber: "bg-amber text-navy",
  sky: "bg-sky text-navy",
  pink: "bg-pink text-navy",
};

export function CategoryTile({ category, count }: { category: Category; count?: number }) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[category.icon] ?? Icons.Folder;
  return (
    <Link
      to="/topics/$slug"
      params={{ slug: category.slug }}
      className="group relative flex flex-col gap-6 rounded-2xl bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="flex items-start justify-between">
        <span className={`grid h-12 w-12 place-items-center rounded-xl ${toneBg[category.tone]}`}>
          <Icon className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <div>
        <div className="font-serif text-xl text-foreground">{category.name}</div>
        <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
        {count !== undefined && (
          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {count} article{count === 1 ? "" : "s"}
          </p>
        )}
      </div>
    </Link>
  );
}
