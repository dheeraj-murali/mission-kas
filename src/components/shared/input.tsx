type InputProps = {
  type: "text" | "email" | "tel" | "checkbox";
  label: string;
  placeholder?: string;
};

export const Input = (props: InputProps) => {
  const { label, placeholder, type } = props;

  return (
    <div className="relative mb-3">
      <label className="pb-2 text-sm text-white">
        {label}
      <input
        type={type}
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
        placeholder={placeholder}
      />
      </label>
    </div>
  );
};
