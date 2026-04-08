import Link from "next/link";
import Container from "@/components/Container";
import { orgInfo } from "@/data/mockData";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-emerald-100 bg-white">
      <Container className="grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{orgInfo.name}</h3>
          <p className="mt-2 text-sm text-slate-600">EIN: {orgInfo.ein}</p>
          <p className="mt-2 text-sm text-slate-600">我们致力于让每一个社区都拥有更公平、可持续与有温度的未来。</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">快速入口</h4>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/projects" className="hover:text-emerald-700">
              公益项目
            </Link>
            <Link href="/news" className="hover:text-emerald-700">
              新闻资讯
            </Link>
            <Link href="/volunteer" className="hover:text-emerald-700">
              志愿者招募
            </Link>
            <Link href="/donate" className="hover:text-emerald-700">
              在线捐赠
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">联系我们</h4>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <p>联系人：{orgInfo.officer}</p>
            <p>地址：{orgInfo.address}</p>
            <p>邮箱：{orgInfo.email}</p>
            <p>电话：{orgInfo.phone}</p>
          </div>
        </div>
      </Container>
      <div className="border-t border-emerald-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Q WORLD ATHLETICS INC. All rights reserved.
      </div>
    </footer>
  );
}
