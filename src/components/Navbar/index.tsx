import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { Logo } from "../shared/Logo";
import { NavbarItem } from "./NavbarItem";
import { NavbarMobile } from "./MovileNavbar";
import { navigation } from "./data";



export const Navbar = () => {
  return (
    <Popover
      as="div"
      className="relative z-10 px-4 pt-6 bg-transparent sm:px-6 lg:px-8"
    >
      <nav
        className="relative flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Logo width={180} height={50} type="light" />
            </a>
            <div className="flex items-center -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                <span className="sr-only">Open main menu</span>
                <MenuAlt1Icon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item, index) => (
            <NavbarItem link={item.href} name={item.name} key={index} />
          ))}
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <NavbarMobile />
      </Transition>
    </Popover>
  );
};
