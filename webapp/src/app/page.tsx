import { NewsletterForm } from "@/components/NewsletterForm";
import { QuoteRotator } from "@/components/QuoteRotator";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundOrnaments />
      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-5 pt-10 sm:px-10">
        <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-amber-600 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.5)]">
          <span className="text-xl">✨</span>
          مساحة عربية مُلهمة
        </div>
        <nav className="hidden gap-6 text-sm text-zinc-600 sm:flex">
          <a href="#features">المزايا</a>
          <a href="#journey">الرحلة</a>
          <a href="#community">المجتمع</a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex max-w-5xl flex-col gap-24 px-5 pb-24 pt-16 sm:px-10 sm:pt-20">
        <HeroSection />
        <FeatureSection />
        <JourneySection />
        <CommunitySection />
        <CallToAction />
      </main>
    </div>
  );
}

function BackgroundOrnaments() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(249,115,22,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(234,179,8,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#fdf4e3] via-transparent to-transparent" />
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 hidden h-60 w-60 opacity-60 sm:block"
        viewBox="0 0 200 200"
      >
        <defs>
          <pattern
            id="grid"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <path d="M18 0H0V18" fill="none" stroke="rgba(249,115,22,0.2)" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#grid)" />
      </svg>
    </>
  );
}

function HeroSection() {
  return (
    <section className="rounded-[40px] bg-white/80 p-10 shadow-[0_45px_80px_-60px_rgba(15,23,42,0.8)] backdrop-blur">
      <div className="flex flex-col gap-6">
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
          <span className="text-lg">سلام</span>
          منصة عربية تحتفي بلغتك
        </span>
        <h1 className="max-w-2xl font-[var(--font-display)] text-4xl leading-[1.4] text-zinc-800 sm:text-5xl">
          حيث تلتقي الحروف بالأحلام، وتتجدّد اللغة بحب المتعلّمين وصُنّاع
          المعرفة.
        </h1>
        <p className="max-w-xl text-lg text-zinc-600">
          انضم إلى مجتمع عربي نابض بالحياة يقدّم جلسات تعلّم حيّة، مكتبة ثرية،
          وأنشطة أسبوعية تطلق إبداعاتك اللغوية. نصنع مساحة آمنة للقراءة،
          الكتابة، والإلهام المشترك.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#community"
            className="flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-[0_20px_40px_-30px_rgba(249,115,22,0.9)] transition hover:bg-amber-400"
          >
            ابدأ رحلتك الآن
          </a>
          <a
            href="#features"
            className="flex items-center justify-center rounded-2xl border border-amber-200 bg-white px-6 py-3 text-base font-semibold text-amber-700 transition hover:border-amber-300 hover:bg-amber-50"
          >
            استكشف المزايا
          </a>
        </div>
        <dl className="mt-8 grid gap-6 text-sm text-zinc-500 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/60 p-4 shadow-[0_15px_30px_-25px_rgba(15,23,42,0.4)] backdrop-blur">
            <dt className="text-xs uppercase tracking-widest text-amber-500">
              أعضاء المجتمع
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-zinc-800">
              أكثر من 12,500
            </dd>
          </div>
          <div className="rounded-2xl bg-white/60 p-4 shadow-[0_15px_30px_-25px_rgba(15,23,42,0.4)] backdrop-blur">
            <dt className="text-xs uppercase tracking-widest text-amber-500">
              جلسات مباشرة
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-zinc-800">
              18 فعالية شهرياً
            </dd>
          </div>
          <div className="rounded-2xl bg-white/60 p-4 shadow-[0_15px_30px_-25px_rgba(15,23,42,0.4)] backdrop-blur">
            <dt className="text-xs uppercase tracking-widest text-amber-500">
              مكتبة المحتوى
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-zinc-800">
              320+ درساً متدرجاً
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "مختبر الحروف",
    description:
      "جلسات تفاعلية أسبوعية تجرّب فيها الأساليب الأدبية واللغوية الحديثة مع ميسّرين مختصين.",
    icon: "🧪",
  },
  {
    title: "مكتبة سلام",
    description:
      "أكثر من 300 درس مُنظم في مسارات مخصصة لتعلّم الكتابة، البلاغة، وفن الخطاب.",
    icon: "📚",
  },
  {
    title: "مجتمع نشِط",
    description:
      "قنوات نقاش حيّة، تحديات لغوية، وأندية قراءة تفتح الباب لاكتشاف أصوات جديدة يومياً.",
    icon: "🤝",
  },
  {
    title: "مراصد الإلهام",
    description:
      "مرصد أسبوعي يلخص أفضل المقالات، القصائد، والموارد الملهمة من أنحاء العالم العربي.",
    icon: "🌙",
  },
];

function FeatureSection() {
  return (
    <section id="features" className="grid gap-6 sm:grid-cols-2">
      {FEATURES.map((feature) => (
        <article
          key={feature.title}
          className="group relative overflow-hidden rounded-[30px] bg-white/70 p-8 shadow-[0_35px_60px_-50px_rgba(15,23,42,0.7)] transition hover:-translate-y-1 hover:bg-white/90"
        >
          <div className="absolute -left-24 top-0 h-32 w-32 rounded-full bg-amber-200/60 blur-3xl transition group-hover:scale-125" />
          <div className="relative flex flex-col gap-4">
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold text-zinc-800">
              {feature.title}
            </h3>
            <p className="text-base leading-7 text-zinc-600">
              {feature.description}
            </p>
            <span className="mt-4 w-fit rounded-full bg-amber-100 px-4 py-1 text-xs font-medium text-amber-700">
              اكتشف التفاصيل
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}

const MILESTONES = [
  {
    headline: "ابدأ برحلة ملهمة",
    description:
      "سجّل في مسار يناسب مستواك، وحدد أهدافك اللغوية لتصل إلى محتوى مصمم لك.",
    badge: "الأسبوع 1",
  },
  {
    headline: "تعلّم وشارك",
    description:
      "انضم إلى اللقاءات المباشرة، وشارك نتاجك مع موجهين يمنحونك تغذية راجعة دقيقة.",
    badge: "الأسبوع 4",
  },
  {
    headline: "أطلق مشروعك",
    description:
      "حوّل شغفك إلى مبادرة: كتاب إلكتروني، بودكاست، أو فعالية مجتمعية مدعومة من سلام.",
    badge: "الأسبوع 8",
  },
];

function JourneySection() {
  return (
    <section
      id="journey"
      className="rounded-[40px] bg-gradient-to-br from-white/90 to-[#fff4d6]/70 p-10 shadow-[0_55px_90px_-70px_rgba(15,23,42,0.8)] backdrop-blur"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-zinc-800">
          خارطة رحلة المتعلمين
        </h2>
        <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-amber-600 shadow-[0_12px_30px_-25px_rgba(15,23,42,0.45)]">
          بناء مستدام للمهارات
        </span>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {MILESTONES.map((milestone) => (
          <article
            key={milestone.headline}
            className="flex h-full flex-col gap-3 rounded-3xl bg-white/60 p-6 shadow-[0_25px_50px_-45px_rgba(15,23,42,0.6)]"
          >
            <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              {milestone.badge}
            </span>
            <h3 className="text-lg font-semibold text-zinc-800">
              {milestone.headline}
            </h3>
            <p className="flex-1 text-sm leading-7 text-zinc-600">
              {milestone.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section
      id="community"
      className="grid gap-8 sm:grid-cols-[1.3fr_1fr] sm:items-center"
    >
      <div className="flex flex-col gap-6 rounded-[36px] bg-white/80 p-8 shadow-[0_40px_70px_-60px_rgba(15,23,42,0.7)] backdrop-blur">
        <h2 className="text-2xl font-semibold text-zinc-800">
          نبض المجتمع في سلام
        </h2>
        <p className="text-base leading-7 text-zinc-600">
          مجتمعنا يجمع المعلمين، الكتّاب، والطلاب، ليبنوا معاً لغة نابضة بالحياة.
          كل أسبوع نطلق تحديات تفاعلية، دوائر قراءة، وأمسيات مفتوحة لتبادل
          القصص، بإشراف موجهين محترفين يدعمونك خطوة بخطوة.
        </p>
        <ul className="grid gap-4 text-sm text-zinc-600 sm:grid-cols-2">
          <li className="rounded-2xl bg-amber-100/60 px-4 py-3">
            🗣️ بودكاست حي يستضيف ملهمين من أنحاء الوطن العربي.
          </li>
          <li className="rounded-2xl bg-amber-100/60 px-4 py-3">
            📝 مراجعات أسبوعية لكتابات الأعضاء بإشراف محررين.
          </li>
          <li className="rounded-2xl bg-amber-100/60 px-4 py-3">
            🎨 ورش فنون الخط والزخرفة العربية شهرياً.
          </li>
          <li className="rounded-2xl bg-amber-100/60 px-4 py-3">
            🌐 شبكة خريجين لدعم المبادرات الناشئة.
          </li>
        </ul>
      </div>
      <QuoteRotator />
    </section>
  );
}

function CallToAction() {
  return (
    <section className="rounded-[40px] bg-gradient-to-br from-amber-500 via-amber-400 to-amber-300 p-10 text-white shadow-[0_60px_110px_-80px_rgba(15,23,42,0.9)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold">حان وقت الخطوة الأولى</h2>
          <p className="mt-2 text-sm leading-7 text-white/90">
            سجّل في النشرة لتصلك فعاليات مجتمع سلام، وأفضل الموارد التي نختارها
            بعناية لنهارك الإبداعي.
          </p>
        </div>
        <div className="sm:min-w-[320px]">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
