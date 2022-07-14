
import { Form } from "../Form";

export const Hero = () => {
  return (
    <section className="relative px-3 py-20 overflow- md:px-10 xl:px-24">
      <div className="relative z-10 grid grid-cols-1 gap-5 h-min place-items-center lg:grid-cols-2">
        <h1 className="text-4xl font-semibold tracking-tight text-center text-white md:text-5xl md:text-left">
          Meticulous and focused training to the aspirants to{" "}
          <em className="text-red-500">succeed</em> in the{" "}
          <span className="text-4xl font-bold md:text-6xl">
            KAS examination
          </span>
          .
        </h1>

        <Form />
      </div>
    </section>
  );
};

// backup
{
  /* className="relative flex items-center justify-center h-screen overflow-hidden bg-teal-900" */
}
{
  /* <div className="z-10 w-1/2">
      <h1 className="text-center text-white text-7xl">
        Meticulous and focused training to the aspirants to succeed in the{" "}
        <span className="font-bold text-emerald-500">
          KAS examination
        </span>
        .
      </h1>
    </div>
    <div className="absolute w-3/4 -left-1/4 top-36">
      <Image src={blob} layout="responsive" alt="a blob" />
    </div> */
}

// tailwind backup

{
  /* <section>
<div className="relative overflow-hidden bg-teal-900">
  <div className="mx-auto max-w-7xl">
    <div className="relative z-10 pb-8 bg-teal-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <Navbar />

      <svg
        className="absolute inset-y-0 right-0 hidden w-40 h-full text-teal-900 transform translate-x-1/2 lg:block"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl">
            Meticulous and focused training to the aspirants to{" "}
            <b className="text-red-500">succeed</b> in the{" "}
            <em className="text-4xl font-bold text-emerald-500">
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
