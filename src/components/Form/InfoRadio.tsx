import { Popover, RadioGroup, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

export type RadioOption = { name: string; description: string };

type InfoRadioProps = {
  theme: "light" | "dark";
  label: string;
  options: RadioOption[];
  id?: string;
  name?: string;
  value: string;
  onChange: (e: string) => void;
};

export function InfoRadio(props: InfoRadioProps) {
  const { theme, options, label, onChange, value, id, name } = props;

  return (
    <Popover className="relative mb-3">
      <label
        className={`pb-2 text-sm ${
          theme === "light" ? "text-white" : "text-black"
        }`}
      >
        {label}
        <Popover.Button
          className={`inline-flex justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 w-full p-2.5`}
        >
          <span>{value}</span>
          <ArrowDownIcon aria-hidden="true" />
        </Popover.Button>
      </label>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-20 w-full mt-3 transform -translate-x-1/2 bottom-14 left-1/2">
          <div className="w-full rounded-md shadow-xl">
            <RadioGroup value={value} onChange={onChange} id={id} name={name}>
              <RadioGroup.Label className="sr-only">
                KAS stream
              </RadioGroup.Label>
              <div>
                {options.map((option, index) => (
                  <RadioGroup.Option
                    key={option.name}
                    value={option.name}
                    className={({ active, checked }) =>
                      `
                    ${
                      active || checked
                        ? "bg-gradient-to-tr from-emerald-500 to-teal-500 text-white"
                        : "bg-white"
                    }
                    ${index === 0 ? "rounded-t-md" : ""}
                    ${index === options.length - 1 ? "rounded-b-md" : ""}
                     border border-b-2 flex cursor-pointer px-5 py-4 shadow-md focus:outline-none
                    `
                    }
                  >
                    {({ checked }) => (
                      <>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium text-base  ${
                                  checked ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {option.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? "text-emerald-100" : "text-gray-500"
                                }`}
                              >
                                {option.description}
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked && (
                            <div className="text-white shrink-0">
                              <CheckIcon className="w-6 h-6" />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
