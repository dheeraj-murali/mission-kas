import { ChangeEvent } from "react";

type InputProps = {
  type: "text" | "email" | "tel" | "checkbox";
  theme: "light" | "dark";
  label: string;
  id?: string;
  name?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
};

export const Input = (props: InputProps) => {
  const { label, placeholder, type, theme, id, name, onChange, value, error } =
    props;

  return (
    <div className="relative mb-3">
      <label
        className={`pb-2 text-sm ${
          theme === "light" ? "text-white" : "text-black"
        }`}
      >
        {label}
        <input
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          id={id}
          className={`${
            error ? "border-red-500" : "border-gray-300"
          } bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5`}
          placeholder={placeholder}
        />
      </label>
      <p className="mt-1 mr-5 text-xs text-red-500">{error}</p>
    </div>
  );
};
