type TextAreaProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
  rows?: number;
}

function TextArea({ label, placeholder, rows = 8, required, containerClassName, className }: TextAreaProps) {
  const inputLabel = required ? `${label} *` : label;

  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <label htmlFor="text-area">
        {inputLabel}
      </label>
      <textarea
        name="text-area"
        placeholder={placeholder}
        rows={rows}
        className={`border border-black rounded-[14px] mt-2 px-7 py-4 focus:outline-none focus:border focus:border-p-green ${className}`}
      />
    </div>
  );
}

export default TextArea;