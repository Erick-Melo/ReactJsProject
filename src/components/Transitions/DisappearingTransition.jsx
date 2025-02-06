import { Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

export default function DisappearingTransition({ children, open }) {
  return (
    <Transition show={open}>
      <TransitionChild
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
        {children}
      </TransitionChild>
    </Transition>
  );
}
