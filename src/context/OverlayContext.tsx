"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export const OVERLAY_TYPES = {
  NAVIGATION_MENU: "navigation-menu",
} as const;

export type OverlayType =
  | (typeof OVERLAY_TYPES)[keyof typeof OVERLAY_TYPES]
  | null;

interface OverlayContextType {
  activeOverlay: OverlayType;
  openOverlay: (type: OverlayType) => void;
  closeOverlay: () => void;
  isOpen: (type: OverlayType) => boolean;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within OverlayProvider");
  }
  return context;
};

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [activeOverlay, setActiveOverlay] = useState<OverlayType>(null);

  const openOverlay = useCallback((type: OverlayType) => {
    setActiveOverlay(type);
  }, []);

  const closeOverlay = useCallback(() => {
    setActiveOverlay(null);
  }, []);

  const isOpen = useCallback(
    (type: OverlayType) => {
      return activeOverlay === type;
    },
    [activeOverlay]
  );

  // Set data attribute on document element for global CSS
  useEffect(() => {
    const root = document.documentElement;
    if (activeOverlay) {
      root.setAttribute("data-overlay", activeOverlay);
    } else {
      root.removeAttribute("data-overlay");
    }
  }, [activeOverlay]);

  return (
    <OverlayContext.Provider
      value={{ activeOverlay, openOverlay, closeOverlay, isOpen }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
