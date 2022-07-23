import Link from "next/link";

export const SectionLinks = () => {
  return (
    <div>
      <h3 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
        Useful links
      </h3>
      <p className="mb-4">
        <Link href="#home" className="text-gray-600">
          Home
        </Link>
      </p>
      <p className="mb-4">
        <Link href="#about" className="text-gray-600">
          About
        </Link>
      </p>
      <p className="mb-4">
        <Link href="#programs" className="text-gray-600">
          Programs
        </Link>
      </p>
      <p>
        <Link href="#home" className="text-gray-600">
          Register
        </Link>
      </p>
    </div>
  );
};
