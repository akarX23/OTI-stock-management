import React from 'react';

interface InputFieldProps {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onlyLabel?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  onlyLabel,
}) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block font-bold text-gray-700" htmlFor={label}>
        {label}
      </label>
      {!onlyLabel && (
        <input
          className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
          id={label}
          type="text"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;
