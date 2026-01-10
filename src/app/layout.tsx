import type { Metadata } from "next";
import { Rubik, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace Brown",
  description: "researcher and educator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${rubik.variable} antialiased`}>
        <div className="flex min-h-screen items-center justify-center bg-negroni font-sans dark:bg-orange-950">
          <main className="min-h-screen w-full max-w-3xl py-32 px-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
