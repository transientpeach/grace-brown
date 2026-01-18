import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
// text-orange-300 focus:ring-orange-300
const linkStyles =
  "text-[#8b4513] dark:text-peach underline ring-offset-2 ring-offset-background hover:no-underline hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b4513]  dark:focus:ring-peach";
export const CustomLink = ({
  href,
  className,
  children,
  ...props
}: CustomLinkProps) => {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={`${linkStyles} ${className} `} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      className={`${linkStyles} ${className} `}
      href={href}
      target="_blank"
      rel="external noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
