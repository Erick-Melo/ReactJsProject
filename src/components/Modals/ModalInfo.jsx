import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";

export default function ModalInfo({ open, setOpen, text }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-[#00000074] bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-20 overflow-y-auto text-black ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel className="divOverflow relative p-5 transform overflow-auto rounded-lg bg-[#e8ecf0] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl max-h-[85vh] border border-gray-500">
                <textarea
                  style={{ resize: "none" }}
                  className="w-full"
                  rows={40}
                  disabled
                  value={text}
                />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
