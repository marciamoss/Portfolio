import React, { Fragment, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const Overview = ({ showOverview, setShowOverview, details }) => {
  console.log("in modal", details);
  return (
    <Transition appear show={showOverview} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => false}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto text-white">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-yellow-50 w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                <button
                  type="button"
                  className="absolute text-black right-2 top-2 p-0 outline-none focus:outline-none focus:border-2 focus:border-white focus:ring-offset-2 hover:text-red-600"
                  onClick={() => setShowOverview(false)}
                >
                  <MdClose size={35} />
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-black max-[640px]:text-sm max-[280px]:text-xs break-words overflow-scroll mt-7 text-lg font-serif font-bold leading-6 text-center"
                >
                  {details.title}
                </Dialog.Title>
                <div className="text-black flex flex-row place-content-center mt-3">
                  {details.overview}
                </div>
                <div className="text-black flex flex-row place-content-center mt-3">
                  <b>Tech Used:</b>{" "}
                  <p className="ml-1">{details.technologies}</p>
                </div>
                <div className="mt-5 flex flex-row place-content-evenly">
                  <button
                    className="text-customFontColor font-bold hover:text-red-600"
                    onClick={() => setShowOverview(false)}
                  >
                    Close
                  </button>
                  <button className="text-customFontColor font-bold hover:text-sky-600">
                    {details?.applink && (
                      <Link
                        href={details.applink}
                        passHref={true}
                        target="_blank"
                        prefetch={true}
                      >
                        Launch App
                      </Link>
                    )}
                  </button>
                  <button className="text-customFontColor font-bold hover:text-sky-600">
                    <Link
                      href={details.githublink}
                      passHref={true}
                      target="_blank"
                      prefetch={true}
                    >
                      Explore Code
                    </Link>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Overview;
