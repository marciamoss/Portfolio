"use client";
import React, { useState } from "react";
import Header from "../Header";
import Overview from "../Overview";
import Link from "next/link";

const projects = require("../projects.json");

export default function Projects() {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [details, setDetails] = useState("");

  return (
    <>
      <nav className="sticky top-0 w-screen">
        <Header sliderOpen={sliderOpen} setSliderOpen={setSliderOpen} />
      </nav>
      <div className="w-full h-full p-7">
        <div
          className={`${
            sliderOpen ? "ml-28" : "ml-0"
          } flex flex-wrap place-content-center`}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="w-48 h-80 shadow-gray-600 shadow-sm hover:shadow-2xl m-5 desktop:m-5"
            >
              <div className="font-serif flex flex-row place-content-center h-24 bg-gray-100 border-b-2 border-gray-600">
                {p.title === "Explore Jobs Mobile App" ? (
                  <div className="flex flex-col place-content-center">
                    <p className="self-center text-center text-black text-sm font-bold">
                      {p.title}
                    </p>
                    <div className="flex flex-row place-content-center">
                      <Link
                        className="self-center text-center text-sm font-bold text-customFontColor underline mr-2"
                        href={p.iOS}
                        passHref={true}
                        target="_blank"
                        prefetch={true}
                      >
                        iOS
                      </Link>
                      <Link
                        className="self-center text-center text-sm font-bold text-customFontColor underline mr-2"
                        href={p.Android}
                        passHref={true}
                        target="_blank"
                        prefetch={true}
                      >
                        Android
                      </Link>
                    </div>
                    <p className="text-red-600 text-xs text-center font-bold">
                      (Note: Expogo needs to be installed on your phone for
                      barcodes to launch app)
                    </p>
                  </div>
                ) : (
                  <Link
                    href={p.applink}
                    passHref={true}
                    target="_blank"
                    prefetch={true}
                    className="self-center text-center text-black text-sm font-bold hover:text-customFontColor hover:underline"
                  >
                    {p.title}
                  </Link>
                )}
              </div>
              <div className="h-32 bg-white flex flex-row place-content-center">
                {p.title === "Explore Jobs Mobile App" ? (
                  <>
                    <Link
                      href={p.iOS}
                      passHref={true}
                      target="_blank"
                      prefetch={true}
                    >
                      <img
                        className="w-full h-24 object-contain self-center p-2"
                        src={`/images${p.image}`}
                        alt={p.title}
                      />
                    </Link>
                    <Link
                      href={p.Android}
                      passHref={true}
                      target="_blank"
                      prefetch={true}
                    >
                      <img
                        className="w-full h-24 object-contain self-center p-2"
                        src={`/images/exploreJobsDeck.png`}
                        alt={p.title}
                      />
                    </Link>
                  </>
                ) : (
                  <div>
                    <Link
                      href={p.applink}
                      passHref={true}
                      target="_blank"
                      prefetch={true}
                    >
                      <img
                        className="w-full h-24 object-contain self-center p-2"
                        src={`/images${p.image}`}
                        alt={p.title}
                      />
                    </Link>
                    {p.title === "Bamazon" && (
                      <div className="flex flex-row place-content-center text-xs font-bold text-customFontColor">
                        {[
                          {
                            href: "https://www.youtube.com/watch?v=igxb4-53fSI",
                            l: "Video 1, ",
                          },
                          {
                            href: "https://youtu.be/dHFTwh_NH7c",
                            l: "2, ",
                          },
                          {
                            href: "https://youtu.be/flBn0tMrSFs",
                            l: "3, ",
                          },
                          {
                            href: "https://youtu.be/N_vh4IUxCiU",
                            l: "4",
                          },
                        ].map((h) => (
                          <Link
                            className="hover:underline"
                            key={h.l}
                            href={h.href}
                            passHref={true}
                            target="_blank"
                            prefetch={true}
                          >
                            {h.l}
                          </Link>
                        ))}
                      </div>
                    )}
                    {p.title === "Constructor Word Guess" && (
                      <div className="flex flex-row place-content-center text-xs font-bold text-customFontColor">
                        <Link
                          className="hover:underline"
                          key="Video"
                          href="https://youtu.be/DEpibTuRoCY"
                          passHref={true}
                          target="_blank"
                          prefetch={true}
                        >
                          Video
                        </Link>
                      </div>
                    )}
                    {p.title === "Liri Node.js" && (
                      <div className="flex flex-row place-content-center text-xs font-bold text-customFontColor">
                        {[
                          {
                            href: "https://youtu.be/5fIwlYR0SXE",
                            l: "Video 1, ",
                          },
                          {
                            href: "https://youtu.be/zTgHwquBds4",
                            l: "2, ",
                          },
                          {
                            href: "https://youtu.be/k3Xb9ayFA1g",
                            l: "3, ",
                          },
                          {
                            href: "https://youtu.be/1VrqEtYQXpE",
                            l: "4",
                          },
                        ].map((h) => (
                          <Link
                            className="hover:underline"
                            key={h.l}
                            href={h.href}
                            passHref={true}
                            target="_blank"
                            prefetch={true}
                          >
                            {h.l}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-col place-content-center h-24 bg-gray-100 border-t-2 border-gray-600">
                <button
                  onClick={() => {
                    setDetails(p);
                    setShowOverview(true);
                  }}
                  className="self-center text-center text-black text-sm font-bold mb-2 w-24 p-2 bg-green-300 rounded-sm hover:bg-green-600"
                >
                  Overview
                </button>
                <Link
                  href={p.githublink}
                  passHref={true}
                  target="_blank"
                  prefetch={true}
                  className="self-center text-center text-customFontColor text-sm font-bold hover:underline"
                >
                  Github
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showOverview && (
        <Overview
          showOverview={showOverview}
          setShowOverview={setShowOverview}
          details={details}
        />
      )}
    </>
  );
}
