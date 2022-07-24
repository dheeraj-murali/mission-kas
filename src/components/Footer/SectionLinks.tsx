import Link from "next/link";
import { useLocale } from "../../hooks/useLocale";

export const SectionLinks = () => {
  const t = useLocale([
    "USEFUL LINKS",
    "Home",
    "About",
    "Programs",
    "Register",
  ]);
  return (
    <div>
      <h3 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
        {t["USEFUL LINKS"]}
      </h3>
      <p className="mb-4">
        <Link href="#home" className="text-gray-600">
          {t["Home"]}
        </Link>
      </p>
      <p className="mb-4">
        <Link href="#about" className="text-gray-600">
          {t['About']}
        </Link>
      </p>
      <p className="mb-4">
        <Link href="#programs" className="text-gray-600">
          {t['Programs']}
        </Link>
      </p>
      <p>
        <Link href="#home" className="text-gray-600">
          {t['Register']}
        </Link>
      </p>
    </div>
  );
};
