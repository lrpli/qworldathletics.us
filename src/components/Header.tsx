"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/Container";
import { navItems } from "@/data/mockData";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-[rgba(249,246,238,0.94)] backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-lg font-bold text-white">
              QW
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-sky-700">公益组织</p>
              <p className="font-semibold text-slate-900">Q WORLD ATHLETICS INC</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-emerald-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
            aria-label="切换导航菜单"
          >
            菜单
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    active ? "bg-emerald-600 text-white" : "text-slate-700 hover:bg-emerald-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {open && (
          <nav className="mt-3 grid gap-2 border-t border-emerald-100 pt-3 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm ${
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "bg-emerald-600 text-white"
                    : "text-slate-700 hover:bg-emerald-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
