import { useRouter } from "next/router";
import { en } from "../locales/en";
import { ml } from "../locales/ml";

export const useLocale = (props: string[]): { [key: string]: string } => {
  const { locale } = useRouter();

  if (locale)
    return props.reduce((a, v) => {
      const val = locale === "en" ? en[v] : ml[v];

      if (val) return { ...a, [v]: val };
      return { ...a, [v]: v };
    }, {});

  return {};
};
