type LinkButtonProps = {
  link: string;
  label: string;
};

export const LinkButton = (props: LinkButtonProps) => {
  const { label, link } = props;
  return (
    <a
      href={link}
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
    >
      {label}
    </a>
  );
};
