import { useFormik } from "formik";
import { Button } from "./Button";
import { streams } from "./data";
import { InfoRadio } from "./InfoRadio";
import { Input } from "./input";
import { RegisterSchema } from "./schema";

type FormProps = {
  theme: "light" | "dark";
};

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  stream: string;
};

const encode = (data: any) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(
          // @ts-ignore
          data[key]
        )
    )
    .join("&");
};

export const Form = (props: FormProps) => {
  const { theme } = props;

  const formik = useFormik<FormInputs>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      stream: "Stream 1",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "from-name": "registration", ...values }),
      })
        .then(() => alert("Success!"))
        .catch((error) => alert(error));
    },
  });

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
          <form
            onSubmit={formik.handleSubmit}
            name="registration"
            className="mt-8 space-y-5"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Input
              id="name"
              name="name"
              type="text"
              theme={theme}
              label="Your name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={
                formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : ""
              }
            />
            <Input
              id="email"
              name="email"
              type="email"
              theme={theme}
              label="Email address"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""
              }
            />
            <Input
              id="phone"
              name="phone"
              type="tel"
              theme={theme}
              label="Phone number"
              onChange={(e) => {
                console.log(e);
                formik.handleChange(e);
              }}
              value={formik.values.phone}
              error={
                formik.errors.phone && formik.touched.phone
                  ? formik.errors.phone
                  : ""
              }
            />

            <InfoRadio
              name="stream"
              theme={theme}
              label="Your preferred stream"
              onChange={(e) => {
                formik.setFieldValue("stream", e);
              }}
              value={formik.values.stream}
              options={streams}
            />

            <div>
              <Button>Join us now</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
