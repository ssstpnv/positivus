import {HTMLInputTypeAttribute} from "react";

type TextInputProps = {
  label?: string;
  text?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
};

function TextInput({ label, placeholder, required, className, type = 'text' }: TextInputProps) {
  const inputLabel = required ? `${label} *` : label;

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor="text-input">
        {inputLabel}
      </label>
      <input
        name="text-input"
        type={type}
        placeholder={placeholder}
        className="border border-black rounded-[14px] mt-2 px-7 py-4"
      />
    </div>
  );
}

export default TextInput;