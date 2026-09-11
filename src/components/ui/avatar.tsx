import React from "react";

export type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
  size?: "sm" | "md" | "lg";
};

export default function Avatar({ src, alt = "Avatar", fallback = "A", size = "md", className = "", ...props }: AvatarProps) {
  const sizes: Record<string, string> = {
    sm: "h-10 w-10",
    md: "h-16 w-16",
    lg: "h-24 w-24",
  };

  return (
    <div className={`relative inline-flex overflow-hidden rounded-full border border-stone-700 bg-stone-800 ${sizes[size]} ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" {...props} />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-lg font-medium text-stone-100">{fallback}</span>
      )}
    </div>
  );
}
