"use client";
import React, { useRef, useState } from "react";
import { ImMenu } from "react-icons/im";
import Slider from "../Slider";

const Header = () => {
  const headerRef = useRef(null);
  const [sliderOpen, setSliderOpen] = useState(false);

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
              className="text-white text-lg font-bold max-[640px]:text-sm max-[280px]:text-xs hover:text-blue-900"
            />
          </button>
        </div>
      </div>
      <Slider sliderOpen={sliderOpen} setSliderOpen={setSliderOpen} />
    </div>
  );
};

export default Header;
