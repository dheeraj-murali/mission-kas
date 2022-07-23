import { useLocale } from "../../hooks/useLocale";
import { Form } from "../Form";

export const Hero = () => {
  const t = useLocale(["hero-t"]);
  return (
    <section className="relative px-3 py-20 overflow- md:px-10 xl:px-24">
      <div className="relative grid grid-cols-1 gap-5 h-min place-items-center lg:grid-cols-2">
        <h1 className="text-4xl font-semibold tracking-tight text-center text-white md:text-5xl md:text-left">
          {/* Smart and focused training to the aspirants to{" "}
          <em className="text-red-500">succeed</em> in the{" "}
          <span className="text-4xl font-bold md:text-6xl">
            KAS examination
          </span>
          . */}
          {t["hero-t"]}
        </h1>

        <Form theme="light" />
      </div>
    </section>
  );
};
