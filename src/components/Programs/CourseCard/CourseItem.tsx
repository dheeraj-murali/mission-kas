import { useLocale } from "../../../hooks/useLocale";

type CourseItemProps = {
  icon?: React.ReactNode;
  text: string;
  isPopular?: boolean;
};

export const CourseItem = (props: CourseItemProps) => {
  const { icon, text, isPopular } = props;
  const t = useLocale([text, 'Popular']);

  return (
    <>
      {icon && icon}
      <span className="flex-1 mb-3">{t[text]}</span>
      {isPopular && (
        <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-white bg-teal-900 rounded dark:bg-gray-700 dark:text-gray-400">
          {t['Popular']}
        </span>
      )}
    </>
  );
};
