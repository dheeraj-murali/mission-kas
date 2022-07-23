import { useRouter } from "next/router";
import { localeContent } from "../locales/locale";

export const useLocale = (props: string[]): {[key: string]: string} => {
  const { locale } = useRouter();

  if (locale)
    return props.reduce(
      (a, v) => ({ ...a, [v]: localeContent[locale as "ml" | "en"][v] }),
      {}
    );

  return {};
};
