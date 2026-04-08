import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { newsList } from "@/data/mockData";

type NewsDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsList.map((item) => ({ slug: item.slug }));
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const article = newsList.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-12">
      <Container className="max-w-4xl">
        <Link href="/news" className="text-sm font-medium text-sky-700 hover:text-sky-800">
          ← 返回资讯列表
        </Link>

        <article className="mt-5 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm">
          <div className="relative h-72 w-full sm:h-96">
            <Image src={article.cover} alt={article.title} fill className="object-cover" sizes="100vw" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-sm text-sky-700">
              {article.date} · {article.author}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">{article.title}</h1>
            <div className="mt-3 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-700">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-4 leading-8 text-slate-700">
              {article.content.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
