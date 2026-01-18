"use client";
import { useEffect, type ReactNode } from "react";
import { useOverlay, OVERLAY_TYPES } from "@/context/OverlayContext";

interface MenuOverlayProps {
  children: ReactNode;
}

export const MenuOverlay = ({ children }: MenuOverlayProps) => {
  const { isOpen, closeOverlay } = useOverlay();
  const menuIsOpen = isOpen(OVERLAY_TYPES.NAVIGATION_MENU);

  // Close menu on Escape key
  useEffect(() => {
    if (!menuIsOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeOverlay();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuIsOpen, closeOverlay]);

  return (
    <>
      <div
        id={OVERLAY_TYPES.NAVIGATION_MENU}
        className={`fixed md:static top-14 bottom-0 left-0 w-full bg-background md:bg-transparent shadow-xl md:shadow-none z-40 md:z-auto transform md:transform-none transition-transform duration-300 ease-in-out overflow-y-auto md:overflow-visible ${
          menuIsOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};
