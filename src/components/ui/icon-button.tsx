import React from "react";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export default function IconButton({ className = "", label, ...props }: IconButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full p-2 text-sm text-white hover:bg-white/5 ${className}`}
      aria-label={label}
      {...props}
    />
  );
}
