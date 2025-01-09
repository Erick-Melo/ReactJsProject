import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ThemeToggleButton from "../Buttons/ThemeToggleButton/ThemeToggleButton";

export default function NavBar() {
  const [navigation, setNavigation] = useState([]);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    navigate("/login");
  };

  return (
    <Disclosure as="nav" className="bg-white md:px-20 shadow-md fixed top-0 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1286px] px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? <FaXmark /> : <FaBars />}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center logos cursor-pointer">
                  <img
                    className="block h-8 w-auto lg:hidden img-logo"
                    alt="logo"
                  />
                  <img className="hidden h-8 w-auto lg:block" alt="logo" />
                  <ThemeToggleButton />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "underline underline-offset-8 text-gray-900 hover:text-black"
                        : "text-gray-500 hover:bg-gray-200 hover:text-black",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </a>
                ))} */}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="flex items-center rounded-full bg-white text-sm text-black focus:outline-none focus:ring-offset-none hover:border-none hover:bg-slate-200 focus:ring-offset-black focus-within:border-none ">
                      <FaRegUserCircle className="h-8 w-8 rounded-lg" alt="" />
                      <span className="pl-3 whitespace-nowrap">
                        {/* Olá, {authService.getCurrentUser().name} */}
                      </span>
                    </MenuButton>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 text-start"
                          onClick={(e) => handleLogout(e)}>
                          Sair
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
