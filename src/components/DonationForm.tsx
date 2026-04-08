"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const presetAmounts = [25, 50, 100, 200];

export default function DonationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("紧急项目池");
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const finalAmount = custom ? Number(custom) : amount;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("请填写姓名和邮箱后继续。");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("请输入有效邮箱地址。");
      return;
    }

    if (!finalAmount || Number.isNaN(finalAmount) || finalAmount <= 0) {
      setError("请输入有效捐赠金额。");
      return;
    }

    setError("");
    setName("");
    setEmail("");
    setCustom("");
    setAmount(50);
    setPurpose("紧急项目池");
    router.push("/donate/success");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="d-name" className="mb-1 block text-sm font-medium text-slate-700">
            捐赠人姓名
          </label>
          <input
            id="d-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-sky-500"
          />
        </div>
        <div>
          <label htmlFor="d-email" className="mb-1 block text-sm font-medium text-slate-700">
            邮箱
          </label>
          <input
            id="d-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-sky-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">选择固定金额（美元）</label>
        <div className="flex flex-wrap gap-2">
          {presetAmounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setAmount(value);
                setCustom("");
              }}
              className={`rounded-full px-4 py-2 text-sm ${
                !custom && amount === value ? "bg-sky-600 text-white" : "bg-sky-50 text-sky-700"
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="d-custom" className="mb-1 block text-sm font-medium text-slate-700">
          自定义金额（美元）
        </label>
        <input
          id="d-custom"
          type="number"
          min={1}
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-sky-500"
          placeholder="如填写此项，将覆盖固定金额"
        />
      </div>

      <div>
        <label htmlFor="d-purpose" className="mb-1 block text-sm font-medium text-slate-700">
          捐赠意向
        </label>
        <select
          id="d-purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-sky-500"
        >
          <option>紧急项目池</option>
          <option>儿童教育</option>
          <option>环境保护</option>
          <option>困境帮扶</option>
          <option>志愿者服务</option>
        </select>
      </div>

      <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">本页为演示环境，未接入真实支付通道。</p>

      {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

      <button type="submit" className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700">
        立即捐赠 ${finalAmount || 0}
      </button>
    </form>
  );
}
