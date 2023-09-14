import { FC } from 'react';

export const CustomInput: FC<{
  id?: string;
  type?: string;
  value: string | number;
  required?: boolean;
  onChange?: (i: string) => void;
  children?: string | never[];
}> = ({ id, type, value, onChange, children: labelName, required }) => {
  const handleOnChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <label htmlFor={id} className="form-label">
        {labelName}
      </label>
      <input
        id={id}
        type={type}
        className="form-control"
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
        required={required}
      />
      {
        value && required
        ?
        <div className="valid-feedback">
          Looks good!
        </div>
        :
        <div className="invalid-feedback">
          Required
        </div>
      }
    </>
  );
}