import { FeatureItem } from "./FeatureItem";
import { features } from "./features";

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
            A better way to send money
          </h2>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <FeatureItem
                name={feature.name}
                icon={feature.icon}
                description={feature.description}
                key={index}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
