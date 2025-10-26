import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "سلام | منصة ملهمة للغة العربية",
  description:
    "منصة عربية حديثة تساعدك على الاحتفاء بلغتك، التعلم، وبناء مجتمع نابض بالحياة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoNaskh.variable} ${notoSansArabic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
