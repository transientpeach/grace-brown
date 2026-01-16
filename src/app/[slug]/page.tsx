import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getContentFileNameList } from "@/utils/getContentFileNameList";

const contentFileNameList = getContentFileNameList();

export const generateStaticParams = () => {
  return contentFileNameList.map((file) => {
    return {
      slug: file.replace(".mdx", ""),
    };
  });
};

type MainPageProps = {
  params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export const generateMetadata = async ({
  params,
}: MainPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const { metadata } = await import(`@/content/main/${slug}.mdx`);

  return {
    title: metadata.title,
    description: metadata.excerpt,
  };
};

const Main = async ({ params }: MainPageProps) => {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/main", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const { default: MDXContent } = await import(`@/content/main/${slug}.mdx`);

  return <MDXContent />;
};

export default Main;
