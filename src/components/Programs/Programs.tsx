import { CardItem, CourseCard } from "./CourseCard";

const prelims: CardItem[] = [
  {
    isPopular: true,
    text: "7 Month Integrated Prelims cum Mains Batch - For College Students",
  },
  {
    text: "7 Month Integrated Prelims cum Mains Batch - For Working Professionals",
  },
  {
    text: "Foundation Programme - For School & College Students",
  },
];

const series: CardItem[] = [
  {
    text: "Mission KAS Prelims Test Series",
  },
  {
    text: "Mission KAS Mains Test Series",
  },
  {
    text: "Mission KAS Integrated Prelims & Mains Test Series",
  },
  {
    text: "MAP : Mains Answer Writing Program",
  },
];

export const Programs = () => {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-20 space-y-10 bg-teal-50">
      <h2 className="text-4xl font-bold tracking-tight text-start">Upcoming Programs</h2>
      <p className="max-w-2xl mt-4 text-xl text-gray-500 text-start lg:text-center lg:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
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
