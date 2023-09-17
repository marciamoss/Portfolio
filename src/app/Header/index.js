"use client";
import React, { Fragment, useRef, useState } from "react";
import { ImMenu } from "react-icons/im";
import Slider from "../Slider";
import { useRouter, usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";

const Header = ({ sliderOpen, setSliderOpen }) => {
  const headerRef = useRef(null);
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center w-full h-16 mx-auto bg-headerColor">
      <div className="place-content-center flex flex-row float-left self-center p-8 h-16">
        <div className="place-content-center flex flex-row">
          <button
            ref={headerRef}
            className="self-center"
            onClick={() => setSliderOpen(!sliderOpen)}
          >
            <ImMenu
              size={35}
              className="self-center text-white text-lg font-bold max-[640px]:text-sm max-[280px]:text-xs hover:text-blue-900"
            />
          </button>
        </div>
        <button
          className="self-center pointer ml-8 text-white text-lg font-bold max-[640px]:text-sm max-[280px]:text-xs hover:underline"
          onClick={() =>
            pathName === "/Projects"
              ? router.push("/About")
              : router.push("/Projects")
          }
        >
          {pathName === "/Projects" ? "Portfolio" : "Marcia Moss"}
        </button>
      </div>
      <Slider sliderOpen={sliderOpen} setSliderOpen={setSliderOpen} />
    </div>
  );
};

export default Header;
