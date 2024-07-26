import { useState } from "react";

type RadioGroupOption = {
  name: string;
  value: string;
}
type RadioGroupProps = {
  options: RadioGroupOption[],
  defaultValue?: string;
};

function RadioGroup({ options, defaultValue }: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || options[0].value);

  return options.map(({ name, value }) => (
    <label className="flex items-center relative pl-10 cursor-pointer">
      {name}
      <input
        type="radio"
        className="
          w-7 h-7 absolute left-0 cursor-pointer
          appearance-none bg-white border-[6px] border-white rounded-full shadow-single checked:bg-p-green
        "
        checked={value === selectedValue}
        onChange={() => setSelectedValue(value)}
      />
    </label>
  ));
}

export default RadioGroup;