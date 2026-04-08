import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import DonationForm from "@/components/DonationForm";

export default function DonatePage() {
  return (
    <div>
      <PageHero
        title="在线捐赠"
        description="每一笔捐赠都会转化为可追踪的项目行动。你可以选择固定金额或自定义金额，并指定优先支持领域。"
      />
      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">你的支持将用于</h2>
            <ul className="mt-4 grid gap-3 text-slate-700">
              <li>儿童教育：课后学习中心、阅读与科学启蒙</li>
              <li>环境保护：河岸修复、社区花园、环保教育</li>
              <li>困境帮扶：家庭紧急支持、物资包与心理援助</li>
              <li>志愿者服务：培训体系与社区服务行动</li>
            </ul>
            <p className="mt-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-700">
              我们每月更新透明看板，年度报告披露资金使用明细与项目执行进度。
            </p>
          </article>
          <DonationForm />
        </Container>
      </section>
    </div>
  );
}
