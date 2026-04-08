"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "儿童教育",
  message: "",
};

export default function VolunteerForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("请填写姓名、邮箱和电话后再提交。");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("请输入有效邮箱地址。");
      return;
    }

    setError("");
    setForm(initialState);
    router.push("/volunteer/success");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="v-name" className="mb-1 block text-sm font-medium text-slate-700">
          姓名
        </label>
        <input
          id="v-name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="v-email" className="mb-1 block text-sm font-medium text-slate-700">
            邮箱
          </label>
          <input
            id="v-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="v-phone" className="mb-1 block text-sm font-medium text-slate-700">
            电话
          </label>
          <input
            id="v-phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="v-interest" className="mb-1 block text-sm font-medium text-slate-700">
          意向服务领域
        </label>
        <select
          id="v-interest"
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
        >
          <option>儿童教育</option>
          <option>环境保护</option>
          <option>困境帮扶</option>
          <option>志愿者服务</option>
        </select>
      </div>
      <div>
        <label htmlFor="v-message" className="mb-1 block text-sm font-medium text-slate-700">
          个人介绍 / 可参与时段
        </label>
        <textarea
          id="v-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
        />
      </div>
      {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700"
      >
        提交报名
      </button>
    </form>
  );
}
