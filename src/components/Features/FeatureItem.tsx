import { ReactElement, SVGProps } from "react";

type FeatureItemProps = {
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  description: string;
};

export const FeatureItem = (props: FeatureItemProps) => {
  const { description, icon, name } = props;

  return (
    <div className="relative">
      <dt>
        <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-emerald-500">
          <props.icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
          {name}
        </p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-500">{description}</dd>
    </div>
  );
};
