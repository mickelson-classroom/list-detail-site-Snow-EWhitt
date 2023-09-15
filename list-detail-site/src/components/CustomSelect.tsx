import { FC, ReactElement } from "react";

export const CustomSelect: FC<{
  id?: string;
  label?: string;
  value?: string;
  onChange?: (i: string) => void;
  children?: ReactElement[];
}> = ({ id, label, value, onChange, children }) => {
  function handleOnChange(value: string) {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label>
      { label }
      <select
        className="form-select"
        id={id}
        value={value}
        onChange={(e) => {e.preventDefault(); handleOnChange(e.target.value); }}
      >
        {children}
      </select>
    </label>
  );
}