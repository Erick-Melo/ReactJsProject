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
import logo from "../../assets/logos/logo_transparentbg.png";

export default function NavBar({ currentPage }) {
  const [navigation, setNavigation] = useState(
    localStorage.getItem("user")
      ? [
          window.screen.availWidth > 800 && {
            name: "Início",
            href: "/",
            current: true,
          },
          { name: "Ferramentas", href: "/", current: true },
          { name: "Dashboard", href: "/", current: true },
          { name: "Notícias", href: "/", current: true },
          { name: "Tabelas", href: "/", current: true },
          { name: "Ações", href: "/", current: true },
        ]
      : [
          { name: "Início", href: "/", current: true },
          { name: "Notícias", href: "/", current: true },
        ]
  );
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <Disclosure
      as="nav"
      className="bg-white text-black dark:bg-gray-800 dark:text-gray-200 lg:px-6 shadow-md fixed top-0 w-full sm:max-w-[99vw]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1286px] px-2 sm:px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 bg-white dark:bg-gray-600">
                  {open ? <FaXmark /> : <FaBars />}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center logos cursor-pointer">
                  <img
                    className="block h-14 w-auto lg:hidden img-logo"
                    src={logo}
                    alt="logo"
                  />
                  <img
                    className="hidden h-16 w-auto lg:block"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="hidden md:ml-6 sm:block">
                  <div className="flex space-x-1 items-center h-full">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${
                          currentPage == item.name &&
                          "underline underline-offset-4"
                        } p-2 rounded-md text-sm font-medium hover:transform hover:scale-110 duration-200`}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <ThemeToggleButton />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    {localStorage.getItem("user") ? (
                      <MenuButton className="flex items-center rounded-full p-1 hover:bg-[#fff3] hover:transform hover:scale-105 duration-200">
                        <FaRegUserCircle className="h-8 w-8 rounded-lg" />
                        <span className="pl-3 whitespace-nowrap">
                          Olá, {localStorage.getItem("user")}
                        </span>
                      </MenuButton>
                    ) : (
                      <a
                        className="whitespace-nowrap underline underline-offset-2 hover:transform hover:scale-110 duration-200"
                        href="/login">
                        Faça Login
                      </a>
                    )}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-100 dark:bg-gray-600 py-1 ">
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm dark:bg-gray-600 dark:text-gray-300 text-start"
                          >
                          Perfil
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm dark:bg-gray-600 dark:text-gray-300 text-start"
                          onClick={handleLogout}>
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
            <div className="flex flex-col text-center space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  className="text-black dark:text-gray-300 font-bold hover:bg-gray-200 px-3 py-2 rounded-md">
                  {item.name}
                </DisclosureButton>
              ))}
              <div className="md:hidden px-4 py-2 text-sm text-gray-700 text-start">
                <ThemeToggleButton />
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
