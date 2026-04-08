import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { orgInfo } from "@/data/mockData";

export default function ContactPage() {
  return (
    <div>
      <PageHero title="联系我们" description="欢迎咨询项目合作、媒体采访、志愿参与与捐赠相关问题。" />
      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">联系信息</h2>
            <div className="mt-4 grid gap-3 text-slate-700">
              <p>组织：{orgInfo.name}</p>
              <p>联系人：{orgInfo.officer}</p>
              <p>地址：{orgInfo.address}</p>
              <p>邮箱：{orgInfo.email}</p>
              <p>电话：{orgInfo.phone}</p>
            </div>
            <p className="mt-6 rounded-xl bg-sky-50 px-4 py-3 text-sm text-sky-700">
              工作时间：周一至周五 09:30 - 18:00（美国东部时间）
            </p>
          </article>
          <ContactForm />
        </Container>
      </section>
    </div>
  );
}
