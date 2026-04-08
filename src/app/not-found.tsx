import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold text-brand-orange">404</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">页面未找到</h1>
          <p className="mt-4 leading-7 text-slate-700">你访问的页面可能已移动或链接有误。可以返回首页继续浏览公益项目与新闻资讯。</p>
          <div className="mt-7 flex justify-center">
            <Link href="/" className="rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-700">
              返回首页
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
