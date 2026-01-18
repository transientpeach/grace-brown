import type { Metadata } from "next";
import { Rubik, Inter_Tight } from "next/font/google";
import { OverlayProvider } from "@/context/OverlayContext";
import { getContentFileNameList } from "@/utils/getContentFileNameList";
import { Header, Footer, MainContent } from "@/components";
import "./globals.css";

const contentFileNameList = getContentFileNameList();

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

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const navItemList: {
    slug: string;
    title: string;
  }[] = await Promise.all(
    contentFileNameList.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");
      const page = await import(`@/content/main/${fileName}`);
      const title = page.metadata?.title ?? slug;
      return { slug, title };
    })
  );

  return (
    <html lang="en">
      <body className={`${interTight.variable} ${rubik.variable} antialiased`}>
        <div className="flex flex-col min-h-screen items-center w-full bg-negroni font-sans dark:bg-orange-950 ">
          <OverlayProvider>
            <Header navItemList={navItemList} />
            <MainContent>{children}</MainContent>
            <Footer />
          </OverlayProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
