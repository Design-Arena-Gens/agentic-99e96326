"use client";

import { useEffect, useState } from "react";

type Quote = {
  id: number;
  text: string;
  author: string;
  role: string;
};

const QUOTES: Quote[] = [
  {
    id: 1,
    text: "اللغة العربية ليست مجرد كلمات، بل جسور تبني الحكايات بين القلوب.",
    author: "ليان السبيعي",
    role: "صانعة محتوى لغوي",
  },
  {
    id: 2,
    text: "سلام أعادتني إلى شغفي، وخلقت مساحة آمنة لأشارك معرفتي بمحبة.",
    author: "فارس المرواني",
    role: "مدرب لغة عربية",
  },
  {
    id: 3,
    text: "منذ انضمامي للمجتمع وأنا أحتفل يومياً بجماليات لغتنا التي لا تنتهي.",
    author: "هيا العتيبي",
    role: "كاتبة وملهمة",
  },
];

const INTERVAL_MS = 6000;

export function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const currentQuote = QUOTES[index];

  return (
    <figure className="relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.5)] backdrop-blur">
      <blockquote className="text-lg leading-9 text-zinc-700">
        <span className="mr-3 text-3xl text-amber-500">“</span>
        {currentQuote.text}
        <span className="ml-3 text-3xl text-amber-500">”</span>
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between text-sm text-zinc-500">
        <div>
          <p className="font-semibold text-zinc-700">{currentQuote.author}</p>
          <p>{currentQuote.role}</p>
        </div>
        <div className="flex gap-2">
          {QUOTES.map((quote) => (
            <span
              key={quote.id}
              className={`h-2 w-6 rounded-full transition-all ${
                quote.id === currentQuote.id
                  ? "bg-amber-500"
                  : "bg-zinc-200 opacity-70"
              }`}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
