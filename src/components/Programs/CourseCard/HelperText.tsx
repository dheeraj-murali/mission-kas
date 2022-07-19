import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

type HelperTextProps = {
  text: string;
};

export const HelperText = (props: HelperTextProps) => {
  const { text } = props;

  return (
    <div>
      <a
        href="#"
        className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
      >
        <QuestionMarkCircleIcon className="w-4 mr-2" />
        {text}
      </a>
    </div>
  );
};
