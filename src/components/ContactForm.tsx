"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setFeedback("请完整填写表单后再提交。");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback("邮箱格式不正确，请检查后重试。");
      return;
    }

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setFeedback("提交成功！我们将在 2 个工作日内与您联系。");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1 block text-sm font-medium text-slate-700">
            姓名
          </label>
          <input
            id="c-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1 block text-sm font-medium text-slate-700">
            邮箱
          </label>
          <input
            id="c-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="c-subject" className="mb-1 block text-sm font-medium text-slate-700">
          主题
        </label>
        <input
          id="c-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
        />
      </div>
      <div>
        <label htmlFor="c-message" className="mb-1 block text-sm font-medium text-slate-700">
          内容
        </label>
        <textarea
          id="c-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring focus:ring-emerald-500"
        />
      </div>
      {feedback && (
        <p
          className={`rounded-lg px-3 py-2 text-sm ${
            feedback.includes("成功") ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
      <button
        type="submit"
        className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700"
      >
        提交留言
      </button>
    </form>
  );
}
