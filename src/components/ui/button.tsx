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

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props} />
  );
}
