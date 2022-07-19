import { Button } from "./Button";
import { InfoRadio } from "./InfoRadio";
import { Input } from "./input";

const streams = [
  {
    name: "Stream 1",
    description: "Direct appointment.",
  },
  {
    name: "Stream 2",
    description:
      "Direct recruitment from among full members or approved probationers in any Government departments.",
  },
  {
    name: "Stream 3",
    description:
      "Direct recruitment from among candidates holding 1st gazetted post.",
  },
];

type FormProps = {
  theme: "light" | "dark";
};

export const Form = (props: FormProps) => {
  const { theme } = props;

  return (
    <>
      <div className="flex flex-col items-start justify-center w-full max-w-md min-h-full py-12 md:items-center sm:px-6 lg:px-8">
        <h2
          className={`text-2xl font-semibold ${
            theme === "light" ? "text-white" : "text-gray-900"
          }`}
        >
          Register now
        </h2>
        <div className="w-full space-y-8">
          <form className="mt-8 space-y-5" action="#" method="POST">
            <Input theme={theme} label="Your name" type="text" />
            <Input theme={theme} label="Email Address" type="email" />
            <Input theme={theme} label="Phone Number" type="tel" />

            <InfoRadio theme={theme} options={streams} />

            <div>
              <Button>Join us now</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
