import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/BackgroundImage";
import { TechnologyImage } from "../components/TechnologyImage";
import data from "/data/data.json";
import desktopImage from "/public/images/technology/background-technology-desktop.jpg";
import tabletImage from "/public/images/technology/background-technology-tablet.jpg";

export default function Technology() {
  const navBar = [
    { title: "Home", index: "00", destination: "/", isActive: false },
    {
      title: "Destination",
      index: "01",
      destination: "destination",
      isActive: false,
    },
    { title: "Crew", index: "02", destination: "crew", isActive: false },
    {
      title: "Technology",
      index: "03",
      destination: "technology",
      isActive: true,
    },
  ];

  const [activeDestination, setActiveDestination] = useState(0);

  return (
    <>
      <div className="z-10 fixed min-w-full min-h-screen h-full overflow-y-scroll">
        <Head>
          <title>Technology</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <Navbar navBar={navBar} />
        </header>

        <main className="flex flex-col items-center ff-barlow-condensed not-italic text-center text-white xl:w-full xl:pl-36 xl:pr-0 xl:pt-20">
          <p className="w-full mb-8 text-white tracking-xl text-center pt-6 px-6 md:text-left md:mt-10 md:mb-14 md:text-xl xl:mb-6 xl:text-3.5xl leading-8">
            <span className="text-white-shadow-10 font-bold mr-4">03</span>SPACE
            LAUNCH 101
          </p>
          <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:w-full">
            <div className="w-full flex flex-col items-center xl:w-1/2 xl:max-w-2xl">
              <div className="w-full h-56 flex justify-center items-end md:h-full md:w-full xl:justify-end xl:items-start">
                <TechnologyImage
                  alt="destinationImage"
                  source={activeDestination}
                  mobileWidth="full"
                  desktopWidth="515"
                  tabletWidth="full"
                  mobileHeight="223"
                  desktopHeight="527"
                  tabletHeight="310"
                />
              </div>
            </div>
            <div className="xl:items-center xl:flex xl:h-full">
              <div className="h-10 mt-8 mb-6 flex justify-center md:mt-14 md:mb-11 xl:mt-0 xl:h-80 xl:mb-0 xl:w-20 xl:mr-20">
                <ul className="ff-bellefair w-40 flex justify-between uppercase text-sm leading-4 tracking-xl md:w-56 xl:flex-col">
                  {data.technology.map((_item, index) => (
                    <li
                      key={index}
                      className={`${
                        activeDestination == index
                          ? "bg-white text-black"
                          : "border-white-shadow-20 border text-white hover:border-white"
                      } h-10 w-10 flex justify-center text-center text-base items-center rounded-full cursor-pointer md:w-15 md:h-15 xl:w-20 xl:h-20 xl:text-3xl`}
                      onClick={() => setActiveDestination(index)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              </div>
              <section className="w-full ff-bellefair mb-10 md:flex md:flex-col md:items-center xl:flex xl:flex-col xl:h-131.5 xl:items-start xl:justify-center xl:w-118">
                <p className="ff-barlow-condensed text-purple text-sm tracking-xl uppercase mb-2 md:text-base md:mb-4 leading-7 xl:text-start">
                  THE TERMINOLOGY...
                </p>
                <div className="text-white text-2xl leading-7 uppercase mb-4 md:text-4.5xl xl:text-start xl:text-5.5xl xl:leading-tight xl:mb-7">
                  {data.technology[activeDestination].name}
                </div>
                <div className="px-6 ff-barlow text-base leading-6 text-purple md:w-118 xl:w-118 xl:text-left xl:text-lg xl:leading-8 xl:h-40 xl:px-0">
                  {data.technology[activeDestination].description}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <BackgroundImage desktopImage={desktopImage} tabletImage={tabletImage} />
    </>
  );
}
