import { useLocale } from "../../hooks/useLocale";
import { FeatureItem } from "./FeatureItem";
import { features } from "./features";

export const Features = () => {
  const t = useLocale([
    "feature-t",
    "feature-d",
    "feature-1-t",
    "feature-2-t",
    "feature-3-t",
    "feature-4-t",
    "feature-5-t",
    "feature-6-t",
    "feature-1-d",
    "feature-2-d",
    "feature-3-d",
    "feature-4-d",
    "feature-5-d",
    "feature-6-d",
  ]);

  return (
    <section className="py-20 bg-white">
      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="max-w-2xl mt-2 text-3xl font-extrabold leading-8 tracking-tight lg:text-center sm:text-4xl">
            {t["feature-t"]}
          </h2>
          <p className="max-w-2xl my-4 text-xl text-gray-500 lg:mx-auto lg:text-center">
            {t["feature-d"]}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <FeatureItem
                name={t[`feature-${index+1}-t`]}
                icon={feature.icon}
                description={t[`feature-${index+1}-d`]}
                key={index}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
