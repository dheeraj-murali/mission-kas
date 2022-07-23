import Link from "next/link";

type NavbarItemProps = {
  name: string;
  link: string;
  isMobile?: boolean;
};

export const NavbarItem = (props: NavbarItemProps) => {
  const { link, name, isMobile } = props;

  return (
    <div
      className={`font-medium ${
        isMobile
          ? "block px-3 py-2 text-base text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
          : "inline-flex text-white hover:text-emerald-300 hover:border-b-2"
      }`}
    >
      <Link href={link}>{name}</Link>
    </div>
  );
};
