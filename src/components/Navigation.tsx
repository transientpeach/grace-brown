import { CustomLink } from "@/components";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/teaching", label: "Teaching" },
  { href: "/research-projects", label: "Research Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
] as const;

export const Navigation = () => {
  return (
    <nav className="w-full py-2">
      <ul className="w-full flex gap-2">
        {navLinks.map(({ href, label }, index) => {
          return (
            <li className={`${index === 0 ? "mr-auto" : ""}`} key={index}>
              <CustomLink href={href}>{label}</CustomLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
