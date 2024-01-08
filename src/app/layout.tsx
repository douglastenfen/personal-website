import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Douglas Tenfen",
  description: "Douglas Tenfen's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={firaCode.className} lang="en">
      <body className="flex h-screen min-h-screen w-full flex-col bg-dark text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
