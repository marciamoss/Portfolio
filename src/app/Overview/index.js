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
                <div className="flex flex-col place-content-evenly">
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
                    {details.title === "Explore Jobs Mobile App" && (
                      <div className="text-customFontColor font-bold ">
                        <p className="ml-2 mr-2">Launch App</p>
                        <div className="flex flex-row">
                          <button className="text-customFontColor font-bold hover:text-sky-600">
                            <Link
                              href={details.iOS}
                              passHref={true}
                              target="_blank"
                              prefetch={true}
                            >
                              iOS
                            </Link>
                          </button>
                          <button className="text-customFontColor font-bold hover:text-sky-600 ml-2">
                            <Link
                              href={details.Android}
                              passHref={true}
                              target="_blank"
                              prefetch={true}
                            >
                              Android
                            </Link>
                          </button>
                        </div>
                      </div>
                    )}
                    {details.githublink && (
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
                    )}
                  </div>
                  {details.title === "Explore Jobs Mobile App" && (
                    <div className="ont-semibold text-red-600 flex flex-col place-content-center mt-3">
                      <p className="ml-1">
                        Note: App is not yet made available in apple and goole
                        play stores, to launch the app on your phone ExpoGo
                        needs to be installed on your phone
                      </p>
                      <div className="flex flex-row place-content-evenly">
                        <button className="text-customFontColor font-bold hover:text-sky-600">
                          <Link
                            href="https://apps.apple.com/us/app/expo-go/id982107779"
                            passHref={true}
                            target="_blank"
                            prefetch={true}
                          >
                            Expogo iOS
                          </Link>
                        </button>
                        <button className="text-customFontColor font-bold hover:text-sky-600">
                          <Link
                            href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US"
                            passHref={true}
                            target="_blank"
                            prefetch={true}
                          >
                            Expogo Android
                          </Link>
                        </button>
                      </div>
                    </div>
                  )}
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
