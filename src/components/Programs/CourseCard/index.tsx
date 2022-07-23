import { useLocale } from "../../../hooks/useLocale";
import { CourseItem } from "./CourseItem";
import { HelperText } from "./HelperText";

export type CardItem = {
  icon?: React.ReactNode;
  text: string;
  isPopular?: boolean;
};

type CourseCardProps = {
  title: string;
  subTitle: string;
  items: CardItem[];
  helperText?: string;
};

export const CourseCard = (props: CourseCardProps) => {
  const { items, subTitle, title, helperText } = props;
  const t = useLocale([title, subTitle])

  return (
    <div className="max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
        {t[title]}
      </h5>
      {subTitle && (
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {t[subTitle]}
        </p>
      )}
      <ul className="my-4 space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-start p-3 text-base font-bold text-white rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 hover:bg-emerald-200 hover:text-black hover:bg-none hover:shadow"
          >
            <CourseItem
              icon={item.icon}
              text={item.text}
              isPopular={item.isPopular}
            />
          </li>
        ))}
      </ul>
      {helperText && <HelperText text={helperText} />}
    </div>
  );
};
