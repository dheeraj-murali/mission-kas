import { FeatureItem } from "./FeatureItem";
import { features } from "./features";

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="max-w-2xl mt-2 text-3xl font-extrabold leading-8 tracking-tight lg:text-center sm:text-4xl">
            A well-structured learning plan to
            make your dreams into reality
          </h2>
          <p className="max-w-2xl my-4 text-xl text-gray-500 lg:mx-auto lg:text-center">
            Extensive Coaching with more than 500+ hours of Live classes,
            Prelims and Mains Test Series and Mentorship covering the entire KAS
            syllabus
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
