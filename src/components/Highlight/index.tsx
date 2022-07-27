import Image from "next/image";
import teacher from "../../../public/Images/teacher.jpg";
import { useLocale } from "../../hooks/useLocale";

export const Highlight = () => {
  const t = useLocale(['highlight-t', 'highlight-d'])
  return (
    <section
      id="about"
      className="grid grid-cols-1 px-5 py-20 lg:px-10 xl:px-20 lg:grid-cols-2 gap-14 bg-teal-50 place-items-center"
    >
      <div>
        <h2 className="pb-5 text-4xl font-bold tracking-tight">
          {t['highlight-t']}
        </h2>
        <p className="max-w-2xl mt-4 text-gray-500 lg:mx-auto">
          {t['highlight-d']}
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-md shadow-md md:w-96 h-52 xl:h-80 xl:w-5/6 shadow-black">
        <Image layout="fill" src={teacher} alt="trainer" height={200} width={400} />
      </div>
    </section>
  );
};
