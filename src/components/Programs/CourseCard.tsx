import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

export type CardItem = {
  icon?: React.ReactNode;
  text: string;
  isPopular?: boolean;
};

type CourseCardProps = {
  title: string;
  subTitle?: string;
  items: CardItem[];
  helperText?: string;
};

export const CourseCard = (props: CourseCardProps) => {
  const { items, subTitle, title, helperText } = props;

  return (
    <div className="max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
        {title}
      </h5>
      {subTitle && (
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {subTitle}
        </p>
      )}
      <ul className="my-4 space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-start p-3 text-base font-bold text-white rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 hover:bg-emerald-200 hover:text-black hover:bg-none hover:shadow"
          >
            {item.icon && item.icon}
            <span className="flex-1 mb-3">{item.text}</span>
            {item.isPopular && (
              <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-white bg-teal-900 rounded dark:bg-gray-700 dark:text-gray-400">
                Popular
              </span>
            )}
          </li>
        ))}
      </ul>
      {helperText && (
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
            <QuestionMarkCircleIcon className="w-4 mr-2" />
            {helperText}
          </a>
        </div>
      )}
    </div>
  );
};
