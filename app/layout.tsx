import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SidebarLeft from "@/components/sidebar/sidebar-left";
import SidebarRight from "@/components/sidebar/sidebar-right";
import Navbar from "@/components/sidebar/navbar";
import { Toaster } from "@/components/ui/sonner";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IBCE Platform",
  description:
    "International Baccalaureate (IB) Coursework Evaluation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relativeflex antialiased`}
      >
        <Navbar />
        <SidebarLeft />
        {children}
        <SidebarRight />
        <Toaster
          richColors
          expand={false}
          position="bottom-center"
          closeButton
          theme="light"
        />
      </body>
    </html>
  );
}
