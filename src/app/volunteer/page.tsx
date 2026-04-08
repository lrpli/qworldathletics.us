import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import VolunteerForm from "@/components/VolunteerForm";

export default function VolunteerPage() {
  return (
    <div>
      <PageHero
        title="志愿者招募"
        description="欢迎加入我们的志愿者网络。无论你擅长教育、活动组织、沟通传播还是后勤支持，都能在这里找到发挥价值的位置。"
      />
      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">我们在寻找这样的你</h2>
            <ul className="mt-4 grid gap-3 text-slate-700">
              <li>认同公益价值，愿意投入稳定服务时间</li>
              <li>具备基础沟通协作能力，尊重服务对象</li>
              <li>愿意参与培训并遵守组织安全规范</li>
              <li>有教育、心理、活动执行经验者优先</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">服务支持</h3>
            <p className="mt-2 text-slate-700">
              我们提供岗前培训、项目导师、服务时长证明和阶段复盘，帮助志愿者持续成长。
            </p>
          </article>
          <VolunteerForm />
        </Container>
      </section>
    </div>
  );
}
