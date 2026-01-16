import { Navigation } from "@/components";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-center">
      <div className="w-full flex max-w-4xl px-16 ">
        <Navigation />
      </div>
    </header>
  );
};
