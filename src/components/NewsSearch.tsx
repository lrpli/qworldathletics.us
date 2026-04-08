"use client";

import { useMemo, useState } from "react";
import type { News } from "@/data/mockData";
import NewsCard from "@/components/NewsCard";

type NewsSearchProps = {
  items: News[];
};

export default function NewsSearch({ items }: NewsSearchProps) {
  const [keyword, setKeyword] = useState("");

  const result = useMemo(() => {
    const key = keyword.trim().toLowerCase();
    if (!key) {
      return items;
    }
    return items.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(key);
      const inExcerpt = item.excerpt.toLowerCase().includes(key);
      const inTags = item.tags.join(" ").toLowerCase().includes(key);
      return inTitle || inExcerpt || inTags;
    });
  }, [items, keyword]);

  return (
    <div>
      <div className="mb-6 rounded-2xl border border-sky-100 bg-white p-4">
        <label htmlFor="news-search" className="mb-2 block text-sm font-medium text-slate-700">
          搜索新闻（标题 / 摘要 / 标签）
        </label>
        <input
          id="news-search"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="例如：志愿者、教育、透明"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-500 focus:ring"
        />
      </div>

      <p className="mb-5 text-sm text-slate-600">共找到 {result.length} 篇资讯</p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {result.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
