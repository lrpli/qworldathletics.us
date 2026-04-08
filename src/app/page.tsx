import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import { newsList, projects, teamMembers } from "@/data/mockData";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#e6f4ed_0%,#e8f3fb_45%,#fff4e8_100%)]" />
        <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              EIN: 99-3462546
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              让每一份善意，
              <br />
              在社区里长成真实改变
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Q WORLD ATHLETICS INC 聚焦儿童教育、环境保护、困境帮扶和志愿者服务。
              我们相信，持续而透明的行动，能让更多家庭看见希望，让更多社区走向韧性与共益。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/donate" className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">
                立即捐赠
              </Link>
              <Link href="/volunteer" className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700">
                成为志愿者
              </Link>
              <Link href="/projects" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-white">
                查看公益项目
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-xl backdrop-blur">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80"
                alt="社区志愿服务"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-emerald-50 p-3">
                <p className="text-2xl font-bold text-emerald-700">8+</p>
                <p className="text-xs text-slate-600">重点公益项目</p>
              </div>
              <div className="rounded-xl bg-sky-50 p-3">
                <p className="text-2xl font-bold text-sky-700">4900+</p>
                <p className="text-xs text-slate-600">累计受益人次</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-3">
                <p className="text-2xl font-bold text-amber-700">9000h</p>
                <p className="text-xs text-slate-600">志愿服务时长</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">核心公益项目</h2>
              <p className="mt-2 text-slate-600">围绕教育、公平、生态与社区互助持续行动</p>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              查看全部项目 →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">最新新闻资讯</h2>
              <p className="mt-2 text-slate-600">及时公开组织动态、项目进展与阶段成果</p>
            </div>
            <Link href="/news" className="text-sm font-semibold text-sky-700 hover:text-sky-800">
              查看全部资讯 →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsList.slice(0, 3).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">我们的团队</h2>
            <p className="mt-2 text-slate-600">来自教育、环保、社工和财务合规领域的专业伙伴</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.id} className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-700">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="rounded-3xl bg-[linear-gradient(120deg,#0f6fa8,#1c8f66)] p-8 text-white sm:p-10">
            <h2 className="text-3xl font-bold">一起参与，形成可持续改变</h2>
            <p className="mt-3 max-w-2xl text-white/90">
              无论是一笔捐赠、一次志愿服务，还是一次合作倡议，都是推动社区进步的重要力量。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/donate" className="rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 hover:bg-slate-100">
                在线捐赠
              </Link>
              <Link href="/contact" className="rounded-xl border border-white/60 px-5 py-3 font-semibold text-white hover:bg-white/10">
                发起合作
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
