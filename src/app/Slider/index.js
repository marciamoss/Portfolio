"use client";
import { Fragment, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter, usePathname } from "next/navigation";

export default function Slider({ sliderOpen, setSliderOpen }) {
  const router = useRouter();
  const pathName = usePathname();
  const menuRef = useRef(null);

  return (
    <Transition.Root show={sliderOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setSliderOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-16 left-0 bottom-0 flex w-32">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 flex">
                      <button
                        type="button"
                        className="relative place-content-center rounded-md text-black hover:text-red-900 hover:bg-red-100 outline-none focus:outline-none"
                        onClick={() => setSliderOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <AiOutlineClose
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-sideBarColor py-16 shadow-xl">
                    <button
                      ref={menuRef}
                      className={`${
                        pathName === "/About"
                          ? "bg-linkActiveColor border-l-4 border-linkBorderColor"
                          : ""
                      } flex flex-row place-content-center px-4 h-16 sm:px-6 hover:bg-gray-500`}
                      onClick={() => router.push("/About")}
                    >
                      <p className="self-center w-full text-center text-white font-black text-xl">
                        About
                      </p>
                    </button>
                    <button
                      className={`${
                        pathName !== "/About"
                          ? "bg-linkActiveColor border-l-4 border-linkBorderColor"
                          : ""
                      } flex flex-row place-content-center px-4 h-16 sm:px-6 hover:bg-gray-500`}
                      onClick={() => router.push("/Projects")}
                    >
                      <p className="self-center w-full text-center text-white  font-black text-xl">
                        Projects
                      </p>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
