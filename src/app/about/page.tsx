import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import { orgInfo, teamMembers } from "@/data/mockData";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="关于我们"
        description="Q WORLD ATHLETICS INC 是一个面向社区真实需求的公益组织，持续推动教育公平、生态修复、紧急帮扶与公众志愿参与。"
      />

      <section className="py-12">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">组织使命</h2>
            <p className="mt-4 leading-7 text-slate-700">
              我们致力于构建一个更公平、更可持续、更有韧性的社区生态。通过长期项目与透明治理，
              让公益资源流向真正需要的人群，并将受益者纳入项目共创过程。
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">核心价值</h3>
            <ul className="mt-3 grid gap-2 text-slate-700">
              <li>以人为本：以受益者需求为项目起点</li>
              <li>公开透明：资金流向与项目进展可追踪</li>
              <li>长期主义：关注持续影响而非短期曝光</li>
              <li>共创协作：联动学校、社区、企业与公众</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">机构信息</h2>
            <div className="mt-4 grid gap-2 text-slate-700">
              <p>组织名称：{orgInfo.name}</p>
              <p>EIN：{orgInfo.ein}</p>
              <p>Principal Officer：{orgInfo.officer}</p>
              <p>地址：{orgInfo.address}</p>
              <p>邮箱：{orgInfo.email}</p>
              <p>电话：{orgInfo.phone}</p>
            </div>
          </article>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">团队成员</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
