import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import { annualReports, orgInfo } from "@/data/mockData";

export default function TransparencyPage() {
  return (
    <div>
      <PageHero
        title="透明公开 / 年度报告"
        description="我们坚持公开透明，定期披露资金流向、项目进度与阶段成果，接受公众监督。"
      />

      <section className="py-12">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">机构合规信息</h2>
            <div className="mt-4 grid gap-2 text-slate-700">
              <p>组织名称：{orgInfo.name}</p>
              <p>EIN：{orgInfo.ein}</p>
              <p>Principal Officer：{orgInfo.officer}</p>
              <p>登记地址：{orgInfo.address}</p>
            </div>
            <p className="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              财务信息每月更新，年度数据经独立审阅后发布在本页面。
            </p>
          </article>

          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">资金使用结构（示例）</h2>
            <div className="mt-4 grid gap-3 text-slate-700">
              <p>项目执行：72%</p>
              <p>受益人直接支持：16%</p>
              <p>项目评估与培训：7%</p>
              <p>管理与合规：5%</p>
            </div>
            <p className="mt-6 rounded-xl bg-sky-50 px-4 py-3 text-sm text-sky-700">
              目标：将至少 85% 的资金直接用于项目与受益人支持。
            </p>
          </article>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">年度报告</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {annualReports.map((report) => (
              <article key={report.year} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{report.year} 年</h3>
                <div className="mt-3 grid gap-2 text-sm text-slate-700">
                  <p>年度收入：{report.income}</p>
                  <p>年度支出：{report.expense}</p>
                  <p>受益人次：{report.beneficiaries}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{report.highlights}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
