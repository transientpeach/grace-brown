"use client";
import { type ReactNode } from "react";
import { useOverlay } from "@/context/OverlayContext";

interface MainContentProps {
  children: ReactNode;
}

export const MainContent = ({ children }: MainContentProps) => {
  const { activeOverlay } = useOverlay();

  return (
    <main
      inert={activeOverlay ? !!activeOverlay : undefined}
      className="w-full max-w-4xl py-6 px-4 prose prose-peach dark:prose-invert md:py-8 md:px-16 md:prose-lg"
    >
      {children}
    </main>
  );
};
