import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/mockData";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={project.cover} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium text-emerald-700">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
        <p className="mt-3 text-xs text-slate-500">服务地区：{project.location}</p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
        >
          查看项目详情
        </Link>
      </div>
    </article>
  );
}
