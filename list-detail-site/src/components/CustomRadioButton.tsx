import { FC } from "react";

export const CustomRadioButton: FC<{
  label: string;
  name: string;
  value: string | number;
  checked?: boolean;
  onClick?: (i: string) => void;
}> = ({ label, name, value, onClick, checked }) => {
  function handleOnClick() {
    if (onClick) {
      onClick(value.toString());
    }
  }

  return (
    <div>
      <input
        className="form-check-input"
        id={label}
        name={name}
        type="radio"
        value={value.toString()}
        onChange={() => handleOnClick()}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={label}>{label}</label>
    </div>
  );
}