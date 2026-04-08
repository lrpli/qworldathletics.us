import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { projects } from "@/data/mockData";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12">
      <Container className="grid gap-8">
        <Link href="/projects" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
          ← 返回项目列表
        </Link>

        <article className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
          <div className="relative h-72 w-full sm:h-96">
            <Image src={project.cover} alt={project.title} fill className="object-cover" sizes="100vw" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-sm font-medium text-emerald-700">{project.category}</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">{project.title}</h1>
            <p className="mt-4 leading-7 text-slate-700">{project.summary}</p>

            <div className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-4 sm:grid-cols-3">
              <div>
                <p className="text-xs text-slate-500">服务地区</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{project.location}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">主要服务对象</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{project.targetPeople}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">阶段成果</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{project.impact}</p>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-slate-900">项目说明</h2>
            <div className="mt-4 grid gap-3 text-slate-700">
              {project.details.map((detail) => (
                <p key={detail} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  {detail}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/donate" className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">
                支持该项目
              </Link>
              <Link href="/volunteer" className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">
                报名志愿服务
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
