import { LockClosedIcon } from "@heroicons/react/solid";
import { Button } from "./shared/Button";
import { Input } from "./shared/input";

export const Form = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-md min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Register now</h2>
        <div className="w-full space-y-8">
          <form className="mt-8 space-y-5" action="#" method="POST">
            <Input label="Your name" type="text" />
            <Input label="Email Address" type="email" />
            <Input label="Phone Number" type="tel" />

            <div>
              <Button >Register</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
