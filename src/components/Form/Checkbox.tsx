
interface CheckboxProps {
  text: string;
  register?: any;
  name?: string;
  error?: any;
}

export default function Checkbox({ text, register, name, error }: CheckboxProps) {
  const checkboxId = `checkbox-${text}`;

  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <input
        type="checkbox"
        id={checkboxId}
        className="appearance-none bg-blue-50 border-2 border-white w-6 h-6 rounded-lg checked:bg-yellow"
        {...register(name, { required: true })}
      />
      <div className="flex flex-col">
        <label htmlFor={checkboxId} className="text-white text-sm">
          {text}
        </label>
        {error && <span className="text-yellow h-0">{error.message}</span>}
      </div>
    </div>
  );
}
