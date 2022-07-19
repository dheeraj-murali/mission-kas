type ButtonProps = {
  children: string;
  icon?: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { children, icon } = props;

  return (
    <button
      type="submit"
      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
     >
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
};
