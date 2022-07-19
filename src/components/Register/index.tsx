import { Form } from "../Form/Form";

export const Register = () => {
  return (
    <section id="register" className="relative">
      <div className="lg:bg-scribble bg-[top_-5rem_left_-15rem] bg-no-repeat">
        <div className="lg:bg-scribble bg-[bottom_-10rem_right_-15rem] bg-no-repeat">
          <div className="flex flex-col items-center justify-center px-5 py-20 space-y-10">
            <h2 className="text-4xl font-bold tracking-tight text-start">
              Ready to start?
            </h2>
            <p className="max-w-2xl mt-4 text-xl text-gray-500 text-start lg:text-center lg:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <Form theme="dark" />
          </div>
        </div>
      </div>
    </section>
  );
};