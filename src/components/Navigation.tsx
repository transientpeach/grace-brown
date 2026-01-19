"use client";
import { useOverlay, OVERLAY_TYPES } from "@/context/OverlayContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CustomLink } from "@/components";

export const Navigation = ({
  navItemList,
}: {
  navItemList: { slug: string; title: string }[];
}) => {
  const { isOpen, closeOverlay } = useOverlay();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const navLinksAreClickable =
    !isMobile || isOpen(OVERLAY_TYPES.NAVIGATION_MENU);

  return (
    <nav
      inert={navLinksAreClickable ? undefined : !navLinksAreClickable}
      className="w-auto m-4 md:py-2 md:m-0 md:w-fill"
    >
      <ul className="w-full flex gap-2 flex-col md:flex-row">
        <li className="mr-auto">
          <CustomLink href="/" onClick={closeOverlay}>
            Home
          </CustomLink>
        </li>
        {navItemList.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <CustomLink href={`/${slug}`} onClick={closeOverlay}>
                {title}
              </CustomLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
