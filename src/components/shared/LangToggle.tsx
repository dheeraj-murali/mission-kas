import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";

export const LangToggle = () => {
  const { locale, replace } = useRouter();
  const enabled = locale === "en";

  const handleChange = () => {
    if (enabled) {
      replace("/", "/", { locale: "ml" });
    } else {
      replace("/", "/", { locale: "en" });
    }
  };

  return (
    <div className="inline-flex space-x-3">
      <Switch
        checked={enabled}
        defaultValue={locale}
        onChange={handleChange}
        className={`${
          enabled ? "bg-emerald-500" : "bg-teal-500"
        } relative inline-flex h-8 w-14 text-xs items-center rounded-full`}
      >
        <span className={`${!enabled && "hidden"} ml-2`}>അ</span>
        <span
          className={`${
            enabled ? "translate-x-1" : "translate-x-0"
          } h-8 w-8 flex justify-center items-center transform rounded-full bg-white`}
        >
          {enabled ? "en" : "അ"}
        </span>
        <span className={`${enabled && "hidden"} ml-1`}>en</span>
      </Switch>
    </div>
  );
};
