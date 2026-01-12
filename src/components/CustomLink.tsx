import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="external noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
