import Link from "next/link";
import { projects } from "@/data/projects";

const normalizeSlug = (slug = "") =>
    slug.replace(/^\/projects\//, "").replace(/^\//, "");

const navItems = projects.map((p) => ({
    slug: p.slug,
    name: p.name,
    key: normalizeSlug(p.slug),
}));

export default function ProjectPager({ currentSlug }) {
    const currentKey = normalizeSlug(currentSlug);
    const currentIndex = navItems.findIndex(
        (item) => item.key === currentKey
    );

    if (currentIndex === -1) return null;

    const prev =
        navItems[(currentIndex - 1 + navItems.length) % navItems.length];
    const next = navItems[(currentIndex + 1) % navItems.length];

    return (
        <div className="border-t border-slate-200 mt-16 pt-8 flex justify-between items-center text-sm md:text-base font-heading">
            <Link href={prev.slug} className="hover:opacity-80">
                ← {prev.name}
            </Link>
            <Link href={next.slug} className="hover:opacity-80">
                {next.name} →
            </Link>
        </div>
    );
}
