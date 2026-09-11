import React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <div>
      {label && <label className="mb-2 block text-sm text-stone-300">{label}</label>}
      <textarea
        className={`mb-2 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
