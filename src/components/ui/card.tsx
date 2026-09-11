import React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "a";
  href?: string;
  children?: React.ReactNode;
};

export default function Card({ as = "div", href, className = "", children, ...props }: CardProps) {
  const base = "rounded-2xl border border-stone-50/20 bg-white/5 p-4";
  if (as === "a" && href) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (
      <a href={href} className={`${base} ${className}`} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <div className={`${base} ${className}`} {...props}>
      {children}
    </div>
  );
}
