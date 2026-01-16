import { CustomLink } from "@/components";
import { metadata as homeMetadata } from "@/content/home.mdx";
import { getContentFileNameList } from "@/utils/getContentFileNameList";

const contentFileNameList = getContentFileNameList();

export const Navigation = async () => {
  const navItemsList = await Promise.all(
    contentFileNameList.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");
      const page = await import(`@/content/main/${fileName}`);
      const title = page.metadata?.title ?? slug;
      return { slug, title };
    })
  );

  return (
    <nav className="w-full py-2">
      <ul className="w-full flex gap-2">
        <li className="mr-auto">
          <CustomLink href="/">{homeMetadata.title}</CustomLink>
        </li>
        {navItemsList.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <CustomLink href={`/${slug}`}>{title}</CustomLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
