import Link from "next/link";
import Container from "@/components/Container";

export default function VolunteerSuccessPage() {
  return (
    <section className="py-20">
      <Container className="max-w-2xl">
        <div className="rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-medium text-emerald-700">报名成功</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">感谢你的加入申请</h1>
          <p className="mt-4 leading-7 text-slate-700">
            我们已收到你的志愿者报名信息，工作人员将于 3 个工作日内通过邮件与你联系。
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/" className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">
              返回首页
            </Link>
            <Link href="/projects" className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">
              浏览公益项目
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
