import fs from "fs";
import path from "path";

const mainContentPath = "src/content/main";

export const getContentFileNameList = (): string[] => {
  const contentDir = path.join(process.cwd(), mainContentPath);
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const contentFileNameList = fs.readdirSync(contentDir);
  return contentFileNameList.filter((fileName: string) =>
    fileName.endsWith(".mdx")
  );
};
