interface InputProps {
  placeholder: string;
  label:string;
  required?: boolean;
}

export default function Input({placeholder, label, required}: InputProps) {
  const inputId = `input-${label}`

  return(
    <div className="flex flex-col">
      <label htmlFor={inputId} className="mb-2 text-sm font-medium text-white">
        {label}{required && "*"}
      </label>  
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className="text-white bg-blue-50 border-white border-2 rounded-lg p-4"
      />
    </div>
  );
}