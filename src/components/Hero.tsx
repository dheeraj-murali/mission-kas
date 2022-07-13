import { Navbar } from "./Navbar";
import blob from "../../public/images/blob.svg";
import Image from "next/image";
import { LinkButton } from "./LinkButton";
import { Form } from "./Form";

export const Hero = () => {
  return (
    <section className="relative flex justify-center items-center bg-teal-900 h-screen overflow-hidden">
      <div className="w-1/2 z-10">
        <h1 className="text-white text-xl tracking-tight font-semibold sm:text-5xl md:text-5xl ">
          Meticulous and focused training to the aspirants to <em className="text-red-500">succeed</em> in the{" "}
          <span className="font-bold text-6xl">KAS examination</span>.
        </h1>
      </div>
      
      <div className="absolute -left-1/4 top-36 w-3/4">
        <Image src={blob} layout="responsive" alt="a blob" />
      </div>

      <Form />
    </section>
  );
};

// backup
{
  /* className="relative flex justify-center items-center bg-teal-900 h-screen overflow-hidden" */
}
{
  /* <div className="w-1/2 z-10">
      <h1 className="text-white text-7xl text-center">
        Meticulous and focused training to the aspirants to succeed in the{" "}
        <span className="font-bold text-emerald-500">
          KAS examination
        </span>
        .
      </h1>
    </div>
    <div className="absolute -left-1/4 top-36 w-3/4">
      <Image src={blob} layout="responsive" alt="a blob" />
    </div> */
}

// tailwind backup

{
  /* <section>
<div className="relative bg-teal-900 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-teal-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <Navbar />

      <svg
        className="hidden lg:block absolute right-0 inset-y-0 h-full w-40 text-teal-900 transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-white text-xl tracking-tight font-semibold sm:text-5xl md:text-5xl">
            Meticulous and focused training to the aspirants to{" "}
            <b className="text-red-500">succeed</b> in the{" "}
            <em className="font-bold text-emerald-500 text-4xl">
              KAS examination
            </em>
            .
          </h1>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <LinkButton label="Register" link="#" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <Image layout="fill" src={andrea} alt="" />
  </div>
</div>
</section> */
}
