"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <form
      aria-label="نموذج الاشتراك في النشرة البريدية"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl bg-white/70 p-6 shadow-[0_25px_45px_-35px_rgba(15,23,42,0.35)] backdrop-blur sm:flex-row sm:items-center"
    >
      <div className="flex-1">
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-amber-600"
        >
          اشترك لتصلك رسائل مُلهمة
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="أدخل بريدك الإلكتروني"
          className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-800 outline-none transition focus:border-amber-400 focus:shadow-[0_10px_30px_-20px_rgba(249,115,22,0.7)]"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex h-12 min-w-40 items-center justify-center rounded-2xl bg-amber-500 px-5 text-sm font-semibold text-white shadow-[0_15px_30px_-20px_rgba(249,115,22,0.6)] transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-amber-300"
      >
        {status === "loading" ? "جارٍ الإرسال..." : "انضم الآن"}
      </button>
      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-600">
          تم التسجيل بنجاح! ابقَ بالقرب لمزيد من الإلهام.
        </p>
      ) : null}
    </form>
  );
}
