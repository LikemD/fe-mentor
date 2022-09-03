import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import hamburger from "/assets/hamburger-menu.svg";
import closeMenu from "/assets/close-menu-icon.svg";
import logo from "/assets/brand-logo.svg";
import styles from "/styles/Navbar.module.css";

export default function Navbar(props) {
  const router = useRouter();
  const { navBar } = props;
  const [isExpanded, setExpanded] = useState(false);
  const navListStyle = "mb-8 md:flex md:h-full md:mb-0 md:items-center";
  const navItemIndexStyle = "font-bold mr-3 md:hidden xl:block";
  const handleClick = (routePath) => {
    router.push(routePath);
  };
  return (
    <nav>
      <div
        className={`w-full pt-6 px-6 flex justify-between xl:pl-14 xl:mt-10`}
      >
        <div className="w-10 md:w-12 md:h-12">
          <Image
            src={logo}
            alt="close-menu"
            className="xl:w-12 xl:h-12"
            layout="responsive"
          />
        </div>
        <div className="md:hidden mt-3">
          <Image
            src={hamburger}
            alt="close-menu"
            className={`md:hidden ${
              isExpanded ? "hidden md:hidden" : "block md:hidden"
            }`}
            width="20"
            height="20"
            onClick={() => {
              setExpanded(!isExpanded);
            }}
          />
        </div>
      </div>
      <hr className="hidden xl:block w-1/3 2xl:w-2/5 absolute z-50 top-22 left-40 border-gray-10" />
      <div
        className={`fixed z-40 top-0 right-0 nav-list md:flex ml-auto pl-8 bg-white-shadow backdrop-blur-4xl text-white ff-barlow-condensed w-64 min-h-screen ${
          isExpanded ? "block" : "hidden"
        } md:absolute md:w-112.5 md:min-h-0 md:h-24 md:px-6 xl:top-10 xl:w-207.5 xl:justify-center 2xl:w-3/5`}
      >
        <div className="w-full pt-8 pr-6 mb-16 flex justify-end md:hidden">
          <Image
            src={closeMenu}
            alt="close-menu"
            className="md:hidden"
            width="20"
            height="20"
            onClick={() => {
              setExpanded(!isExpanded);
            }}
          />
        </div>
        <ul className="tracking-xl md:justify-between md:w-full md:flex md:items-center md:tracking-xl md:text-sm md:px-5 xl:text-base xl:leading-5 xl:tracking-xl xl:w-135.5 xl:justify-between">
          {navBar.map((navItem, index) => {
            return (
              <li
                key={index}
                className={`${navListStyle} ${
                  navItem.isActive
                    ? styles.active
                    : "md:hover:border-white-shadow-20 md:hover:border-b-3"
                } cursor-pointer`}
                onClick={() => handleClick(navItem.destination)}
              >
                <span className={navItemIndexStyle}>{navItem.index}</span>
                <span
                  className={`uppercase ${
                    navItem.title == "Home" ? "md:py-auto" : ""
                  }`}
                >
                  {navItem.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
