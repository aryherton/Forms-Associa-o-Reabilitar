import React from 'react';

interface PropsInput {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: any;
}

export default function Input({
  label,
  type,
  name,
  placeholder,
  value,
  style,
  onChange,
  register,
}: PropsInput): JSX.Element {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        style={style}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...register}
      />
    </div>
  );
}
