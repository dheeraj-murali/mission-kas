import Image from "next/image";
import teacher from "../../../public/Images/teacher.jpg";

export const Highlight = () => {
  return (
    <section className="grid grid-cols-1 px-5 py-20 lg:px-10 xl:px-20 lg:grid-cols-2 gap-14 bg-teal-50 place-items-center">
      <div>
        <h2 className="pb-5 text-4xl font-bold tracking-tight">
          Trained by industry professionals.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-md shadow-md md:w-96 h-52 xl:h-72 xl:w-3/4 shadow-black">
        <Image layout="fill" src={teacher} alt="trainer" />
      </div>
    </section>
  );
};
