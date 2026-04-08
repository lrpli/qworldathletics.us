import Link from "next/link";
import Container from "@/components/Container";

export default function DonateSuccessPage() {
  return (
    <section className="py-20">
      <Container className="max-w-2xl">
        <div className="rounded-3xl border border-sky-100 bg-white p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-medium text-sky-700">捐赠成功</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">感谢你的善意支持</h1>
          <p className="mt-4 leading-7 text-slate-700">
            你的捐赠申请已提交。我们将把这份支持用于最需要的项目，并在透明公开页面持续更新进展。
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/transparency" className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">
              查看透明公开
            </Link>
            <Link href="/" className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">
              返回首页
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
