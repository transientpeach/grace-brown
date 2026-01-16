import type { Metadata } from "next";
import { Rubik, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${rubik.variable} antialiased`}>
        <div className="flex flex-col min-h-screen items-center w-full bg-negroni font-sans dark:bg-orange-950 ">
          <Header />
          <main className="w-full max-w-4xl py-16 px-16 prose prose-peach dark:prose-invert md:prose-lg">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
