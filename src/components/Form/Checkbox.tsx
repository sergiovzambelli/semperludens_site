interface CheckboxProps {
  text: string;
}

export default function Checkbox({ text }: CheckboxProps) {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <input 
        type="checkbox" 
        id="checkbox" 
        name="checkbox" 
        className="appearance-none bg-blue-50 border-2 border-white w-6 h-6 rounded-lg checked:bg-white"
      />
      <label className="text-white text-sm">{text}</label>
    </div>
  );
}
