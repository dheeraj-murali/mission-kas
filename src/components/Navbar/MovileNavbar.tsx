import { Popover } from "@headlessui/react";
import { CloseIcon } from "../icons/CloseIcon";
import { Logo } from "../shared/Logo";
import { navigation } from "./data";
import { NavbarItem } from "./NavbarItem";

export const NavbarMobile = () => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
      <div className="flex items-center justify-between px-5 pt-4">
        <div>
          <Logo width={180} height={50} type="dark" />
        </div>
        <div className="-mr-2">
          <Popover.Button
            as="template"
            className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
          >
            <span className="sr-only">Close main menu</span>
            <CloseIcon aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item, index) => (
          <NavbarItem isMobile link={item.href} name={item.name} key={index} />
        ))}
      </div>
    </div>
  );
};
