import Image from "next/image";
import teacher from "../../../public/Images/teacher.jpg";

export const Highlight = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 px-5 py-20 lg:px-10 xl:px-20 lg:grid-cols-2 gap-14 bg-teal-50 place-items-center"
    >
      <div>
        <h2 className="pb-5 text-4xl font-bold tracking-tight">
          Start your KAS preparation with us
        </h2>
        <p className="max-w-2xl mt-4 text-gray-500 lg:mx-auto">
          We have established an environment, where the students have access to
          all that is required to plan for their KAS examination effectively,
          efficiently and enthusiastically by ensuring them with excellent
          coaching and the finest study materials. Facilities at Mission KAS are
          thoroughly attempted and revised so that our students can focus on
          what really matters in their journey to crack KAS
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-md shadow-md md:w-96 h-52 xl:h-72 xl:w-3/4 shadow-black">
        <Image layout="fill" src={teacher} alt="trainer" />
      </div>
    </section>
  );
};
