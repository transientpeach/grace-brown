"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useOverlay, OVERLAY_TYPES } from "@/context/OverlayContext";

export const MenuToggle = () => {
  const { isOpen, openOverlay, closeOverlay } = useOverlay();
  const menuIsOpen = isOpen(OVERLAY_TYPES.NAVIGATION_MENU);

  const handleClick = () => {
    if (menuIsOpen) {
      closeOverlay();
    } else {
      openOverlay(OVERLAY_TYPES.NAVIGATION_MENU);
    }
  };

  return (
    <div className="flex gap-1 ml-auto">
      <button
        onClick={handleClick}
        className="md:hidden px-1.5 py-px bg-background text-foreground border border-foreground/30 hover:-translate-y- hover:shadow-sm active:translate-y-0 active:shadow-inner active:brightness-95 transition-all duration-150 cursor-pointer"
        aria-expanded={menuIsOpen}
        aria-controls="navigation-menu"
        aria-label={menuIsOpen ? "Close menu" : "Open menu"}
      >
        <FontAwesomeIcon
          icon={menuIsOpen ? faXmark : faAnglesLeft}
          className="h-6 w-6"
        />
      </button>
    </div>
  );
};
