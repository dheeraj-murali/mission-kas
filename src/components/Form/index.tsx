import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useLocale } from "../../hooks/useLocale";
import { MailSendIcon } from "../icons/MailSendIcon";
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

const words = [
  "Register now",
  "Your name",
  "Email address",
  "Phone number",
  "Your preferred stream",
  "Join us now",
];

export const Form = (props: FormProps) => {
  const { theme } = props;

  const t = useLocale(words);

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
        body: encode({ "form-name": "registration", ...values }),
      })
        .then(() =>
          toast.success("Well get back to you soon!!", {
            icon: <MailSendIcon />,
          })
        )
        .catch(() => toast.error("Oh no! something went wrong."))
        .finally(() => {
          formik.setSubmitting(false);
          formik.resetForm();
        });
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
          {t["Register now"]}
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
              id={`name-${theme}`}
              name="name"
              type="text"
              theme={theme}
              label={t["Your name"]}
              onChange={formik.handleChange}
              value={formik.values.name}
              error={
                formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : ""
              }
            />
            <Input
              id={`email-${theme}`}
              name="email"
              type="email"
              theme={theme}
              label={t["Email address"]}
              onChange={formik.handleChange}
              value={formik.values.email}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""
              }
            />
            <Input
              id={`phone-${theme}`}
              name="phone"
              type="tel"
              theme={theme}
              label={t["Phone number"]}
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
              id={`stream-${theme}`}
              name="stream"
              theme={theme}
              label={t["Your preferred stream"]}
              onChange={(e) => {
                formik.setFieldValue("stream", e);
              }}
              value={formik.values.stream}
              options={streams}
            />

            <div>
              <Button loading={formik.isSubmitting}>{t["Join us now"]}</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
