import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Logo } from "../shared/Logo";
import { navigation } from "./data";
import { NavbarItem } from "./NavbarItem";

export const NavbarMobile = () => {
  return (
    <Popover.Panel
      focus
      className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden"
    >
      <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
        <div className="flex items-center justify-between px-5 pt-4">
          <div>
            <Logo width={180} height={50} type="dark" />
          </div>
          <div className="-mr-2">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
              <span className="sr-only">Close main menu</span>
              <XIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item, index) => (
            <NavbarItem link={item.href} name={item.name} key={index} />
          ))}
        </div>
      </div>
    </Popover.Panel>
  );
};
