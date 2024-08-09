import { Ref } from "react";

import { LegacyRef } from "react";

interface TextareaProps {
  placeholder: string;
  label: string;
  rows: number;
  required?: boolean;
  register?: any;
  name?: string;
  error?: any;
}

export default function Textarea({
  placeholder,
  label,
  rows,
  required,
  register,
  name,
  error
}: TextareaProps) {
  const textareaId = `textarea-${label}`;

  return (
    <div className="flex flex-col">
      <label htmlFor={textareaId} className="mb-2 text-sm font-medium text-white">
        {label}
        {required && "*"}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        placeholder={placeholder}
        className="text-white bg-blue-50 border-white border-2 rounded-lg p-4"
        {...register(name, { required: true })} 
      />
      {error && <span className="text-yellow">{error.message}</span>}
    </div>
  );
}
