import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
};

export default function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium";
  const variants: Record<string, string> = {
    default: "bg-white/5 text-white hover:bg-white/10",
    ghost: "bg-transparent text-white hover:bg-white/5",
    outline: "border border-stone-700 text-white",
  };
  const variantClass = variants[variant] || variants.default;

  // If href is present, render an anchor for link-like buttons
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyProps = props as any;
  if (anyProps.href) {
    const { href, target, rel, ...rest } = anyProps;
    return (
      <a href={href} target={target} rel={rel ?? undefined} className={`${base} ${variantClass} ${className}`} {...rest} />
    );
  }

  return (
    <button className={`${base} ${variantClass} ${className}`} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
  );
}
