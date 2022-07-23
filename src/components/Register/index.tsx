import { useLocale } from "../../hooks/useLocale";
import { Form } from "../Form";

export const Register = () => {
  const t = useLocale([
    "Ready to start?",
    "The path to a successful career starts here. Let us strive together to take you there.",
  ]);
  return (
    <section id="register" className="relative">
      <div className="lg:bg-scribble bg-[top_-5rem_left_-15rem] bg-no-repeat">
        <div className="lg:bg-scribble bg-[bottom_-10rem_right_-15rem] bg-no-repeat">
          <div className="flex flex-col items-center justify-center px-5 py-20 space-y-10">
            <h2 className="text-4xl font-bold tracking-tight text-start">
              {t["Ready to start?"]}
            </h2>
            <p className="max-w-2xl mt-4 text-xl text-gray-500 text-start lg:text-center lg:mx-auto">
              {
                t[
                  "The path to a successful career starts here. Let us strive together to take you there."
                ]
              }
            </p>
            <Form theme="dark" />
          </div>
        </div>
      </div>
    </section>
  );
};
