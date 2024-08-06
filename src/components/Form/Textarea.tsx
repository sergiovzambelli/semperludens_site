interface TextareaProps {
  placeholder: string;
  label: string;
  rows: number;
  required?: boolean;
}

export default function Textarea({placeholder, label, rows, required}: TextareaProps) {
  const inputId = `input-${label}`

  return(
    <div className="flex flex-col">
      <label htmlFor={inputId} className="mb-2 text-sm font-medium text-white">
        {label}{required && "*"}
      </label>  
      <textarea 
        rows={rows}
        placeholder={placeholder}
        className="text-white bg-blue-50 border-white border-2 rounded-lg p-4"
      />
  </div>
  )
}