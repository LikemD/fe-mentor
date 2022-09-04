import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar.js";
import BackgroundImage from "../components/BackgroundImage.js";
import { ImageComponent } from "../components/ImageComponent.js";
import data from "/data/data.json";
import desktopImage from "/public/images/destination/background-destination-desktop.jpg";
import tabletImage from "/public/images/destination/background-destination-tablet.jpg";

export default function Destination() {
  const navBar = [
    { title: "Home", index: "00", destination: "/", isActive: false },
    {
      title: "Destination",
      index: "01",
      destination: "destination",
      isActive: true,
    },
    { title: "Crew", index: "02", destination: "crew", isActive: false },
    {
      title: "Technology",
      index: "03",
      destination: "technology",
      isActive: false,
    },
  ];

  const [activeDestination, setActiveDestination] = useState(0);

  return (
    <>
      <div className="z-10 fixed min-w-full min-h-screen">
        <Head>
          <title>Destination</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <Navbar navBar={navBar} />
        </header>

        <main className="flex flex-col items-center ff-barlow-condensed not-italic text-center text-white p-6 xl:flex-row xl:justify-between xl:px-36 xl:pt-20">
          <div className="w-full">
            <p className="w-full mb-8 text-white tracking-xl text-center md:text-left md:mt-10 md:mb-14 md:text-xl">
              <span className="text-white-shadow-10 font-bold mr-4">01</span>
              PICK YOUR DESTINATION
            </p>
            <ImageComponent
              alt="destinationImage"
              source={data.destinations[activeDestination].images.png}
              mobileWidth="170"
              desktopWidth="445"
              tabletWidth="300"
              mobileHeight="170"
              desktopHeight="445"
              tabletHeight="300"
            />
          </div>
          <div className="xl:w-111.5 xl:flex xl:flex-col xl:items-start">
            <div className="h-38 mt-6 mb-5 flex justify-center">
              <ul className="w-60 flex justify-between uppercase text-sm leading-4 tracking-xl md:text-base md:w-72">
                {data.destinations.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      activeDestination == index
                        ? "border-b-3 border-white text-white"
                        : "text-purple hover:border-white-shadow-20 hover:border-b-3"
                    } h-7 md:h-9 cursor-pointer`}
                    onClick={() => setActiveDestination(index)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <section className="w-full xl:flex xl:flex-col">
              <p className="ff-bellefair text-white text-5.5xl uppercase md:text-7.5xl xl:text-start">
                {data.destinations[activeDestination].name}
              </p>
              <p className="w-80 ff-barlow text-purple mb-8 md:w-143.25 md:mb-12 xl:w-full xl:text-left xl:text-lg xl:leading-8">
                {data.destinations[activeDestination].description}
              </p>
              <hr className="border-gray-10 mb-8 md:mb-7" />
            </section>
            <section className="md:flex text-purple text-sm leading-4 uppercase md:w-143.25 xl:w-full xl:justify-start xl:text-left">
              <div className="mb-8 md:w-72 md:mb-0">
                <p>AVG. DISTANCE</p>
                <p className="ff-bellefair text-white text-3.5xl leading-8 mt-3">
                  {data.destinations[activeDestination].distance}
                </p>
              </div>
              <div className="md:w-72">
                <p>EST. TRAVEL TIME</p>
                <p className="ff-bellefair text-white text-3.5xl leading-8 mt-3">
                  {data.destinations[activeDestination].travel}
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <BackgroundImage desktopImage={desktopImage} tabletImage={tabletImage} />
    </>
  );
}
