"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/mockData";
import { projectCategories } from "@/data/mockData";
import ProjectCard from "@/components/ProjectCard";

type ProjectFilterProps = {
  items: Project[];
};

export default function ProjectFilter({ items }: ProjectFilterProps) {
  const [active, setActive] = useState<ProjectCategory | "全部">("全部");

  const filtered = useMemo(() => {
    if (active === "全部") {
      return items;
    }
    return items.filter((item) => item.category === active);
  }, [active, items]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("全部")}
          className={`rounded-full px-4 py-2 text-sm ${
            active === "全部" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700"
          }`}
        >
          全部
        </button>
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm ${
              active === category ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mb-5 text-sm text-slate-600">当前显示 {filtered.length} 个项目</p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
