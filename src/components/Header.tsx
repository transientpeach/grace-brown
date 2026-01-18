import { Navigation, MenuOverlay, MenuToggle } from "@/components";

export const Header = ({
  navItemList,
}: {
  navItemList: { slug: string; title: string }[];
}) => {
  return (
    <header className="w-full flex items-center justify-center min-h-14 border-b-neutral-700 dark:border-b-neutral-50 border-b">
      <div className="w-full flex max-w-4xl px-4 md:px-16 ">
        <MenuToggle />
        <MenuOverlay>
          <Navigation navItemList={navItemList} />
        </MenuOverlay>
      </div>
    </header>
  );
};
