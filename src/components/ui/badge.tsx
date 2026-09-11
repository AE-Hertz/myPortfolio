import React from "react";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

export default function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  const base = "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium";
  const variants: Record<string, string> = {
    default: "border-white/20 bg-white/10 text-white",
    secondary: "border-sky-400/40 bg-sky-500/10 text-sky-200",
    outline: "border-stone-300/20 bg-transparent text-stone-200",
  };

  return <span className={`${base} ${variants[variant] || variants.default} ${className}`} {...props} />;
}
