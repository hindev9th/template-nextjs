import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "@/styles/globals.css";
import StoreProvider from "@/components/providers/StoreProvider";
import AuthProvider from '@/components/providers/AuthProvider';
import Providers from '@/components/providers/Providers';

const manrope = Manrope({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quản lý chi tiêu thông minh – Theo dõi thu chi & kiểm soát tài chính cá nhân",
  description: "Ứng dụng quản lý chi tiêu giúp bạn theo dõi thu chi hàng ngày, phân loại chi phí, quản lý nợ và kiểm soát tài chính cá nhân hiệu quả, đơn giản và an toàn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased scroll-smooth bg-background`}
      >
          <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}
