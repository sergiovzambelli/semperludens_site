import { LegacyRef, Ref } from 'react';

interface InputProps {
  placeholder: string;
  label: string;
  required?: boolean;
  register?: any;
  name?: string;
  error?: any;
  className?: string;
  classNameLabel?: string;
}

export default function Input({ placeholder, label, required, register, name, error, className, classNameLabel }: InputProps) {
  const inputId = `input-${label}`;

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={inputId} className={`mb-2 text-sm font-medium text-white ${classNameLabel}`}>
        {label}
        {required && "*"}
      </label>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className={`text-white bg-blue-50 border-white border-2 rounded-lg p-4 ${className}`} 
        {...register(name, { required: true })}
      />
      {error && <span className="text-yellow">{error.message}</span>}
    </div>
  );
}
