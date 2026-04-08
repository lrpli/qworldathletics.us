import Link from "next/link";
import Image from "next/image";
import type { News } from "@/data/mockData";

type NewsCardProps = {
  item: News;
};

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={item.cover} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-5">
        <p className="text-xs text-sky-700">
          {item.date} · {item.author}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-700">
              #{tag}
            </span>
          ))}
        </div>
        <Link
          href={`/news/${item.slug}`}
          className="mt-4 inline-flex rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
        >
          阅读全文
        </Link>
      </div>
    </article>
  );
}
