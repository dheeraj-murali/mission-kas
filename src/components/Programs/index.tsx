import { CourseCard } from "./CourseCard";
import { prelims, series } from "./data";

export const Programs = () => {
  return (
    <section
      id="programs"
      className="flex flex-col items-center justify-center px-5 py-20 space-y-10 bg-teal-50"
    >
      <h2 className="text-4xl font-bold tracking-tight text-start">
        Upcoming Programs
      </h2>
      <p className="max-w-2xl mt-4 text-xl text-gray-500 text-start lg:text-center lg:mx-auto">
        We offer the best classes for KAS Coaching in Trivandrum, Kerala. The
        strategies our experts have crafted will give you the competitive edge
        over others. The programs are planned with high flexibility to
        accommodate all candidates from various streams and backgrounds
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <CourseCard
          items={prelims}
          title="Integrated Prelims cum Mains"
          subTitle="Regular and Online batches available"
        />
        <CourseCard
          items={series}
          title="Test Series"
          subTitle="Online tests available soon"
        />
      </div>
    </section>
  );
};
