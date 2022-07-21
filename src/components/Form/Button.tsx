import { LoaderIcon } from "../icons/LoaderIcon";

type ButtonProps = {
  children: string;
  icon?: React.ReactNode;
  loading?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { children, icon, loading } = props;

  return (
    <button
      disabled={loading}
      type="submit"
      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
    >
      {loading ? (
        <span className="mr-3 animate-spin">
          <LoaderIcon />
        </span>
      ) : (
        icon && (
          <span className="ml-3">
            {icon}
          </span>
        )
      )}

      {children}
    </button>
  );
};
