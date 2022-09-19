// Nextjs Imports
import Image from "next/image";

// React Imports
import { useState } from "react";

// Asset Imports
import logo from "../../assets/Logo-Blue.svg";
import youtube from "../../assets/Header-Youtube.svg";
import linkedin from "../../assets/Header-LinkedIn.svg";
import instagram from "../../assets/Header-Insta.svg";
import facebook from "../../assets/Header-Facebook.svg";

const Header = () => {
  const textLinks = [
    {
      key: 1,
      text: "Home",
      link: "",
    },
    {
      key: 2,
      text: "About Us",
      link: "",
    },
    {
      key: 3,
      text: "Events",
      link: "",
    },
    {
      key: 4,
      text: "Contact Us",
      link: "",
    },
  ];

  const imageLinks = [
    {
      key: 5,
      src: youtube,
      alt: "Youtube",
    },
    {
      key: 6,
      src: linkedin,
      alt: "LinkedIn",
    },
    {
      key: 7,
      src: instagram,
      alt: "Instagram",
    },
    {
      key: 8,
      src: facebook,
      alt: "Facebook",
    },
  ];

  const [hamOpen, setHamOpen] = useState(false);
  const [hamBurgerAnimation, setHumBurgerAnimation] = useState({
    upper: "h-1 w-8 bg-black rounded-md ease-in-out duration-300 my-[2.5px]",
    middle: "h-1 w-8 bg-black rounded-md ease-in-out duration-300 my-[2.5px]",
    lower: "h-1 w-8 bg-black rounded-md ease-in-out duration-300 my-[2.5px]",
  });
  const [showMenuData, setShowMenuData] = useState(
    "w-0 h-auto absolute z-10 bg-neutral-700 opacity-90 top-0 right-0 left-0 ease-in-out duration-300"
  );
  const [hideNavLinks, setHideNavLinks] = useState("hidden");

  const clickHandler = () => {
    if (!hamOpen) {
      setHumBurgerAnimation({
        upper:
          "h-1 w-8 bg-black rotate-[45deg] translate-y-[0.56rem] rounded-md ease-in-out duration-300 my-[2.5px]",
        middle:
          "h-1 w-8 bg-transparent rounded-md ease-in-out duration-300 my-[2.5px]",
        lower:
          "h-1 w-8 bg-black rotate-[-45deg] -translate-y-[0.56rem] rounded-md ease-in-out duration-300 my-[2.5px]",
      });
      setShowMenuData(
        "w-[100%] h-auto p-8 py-6 absolute z-10 bg-neutral-700 opacity-90 top-0 right-0 left-0 ease-in-out duration-300"
      );
      setHideNavLinks("block");
      setHamOpen(true);
    } else if (hamOpen) {
      setHumBurgerAnimation({
        upper:
          "h-1 w-8 bg-black rounded-md ease-in-out duration-300 my-[2.5px]",
        middle:
          "h-1 w-8 bg-black rounded-md ease-in-out duration-300 my-[2.5px]",
        lower:
          "h-1 w-8 bg-black rounded-md ease-in-out duration-300 my-[2.5px]",
      });
      setShowMenuData(
        "w-0 h-auto absolute z-10 bg-neutral-700 opacity-90 top-0 right-0 left-0 ease-in-out duration-300"
      );
      setHideNavLinks("hidden");
      setHamOpen(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center pt-6 pb-6">
        <Image
          src={logo}
          alt="ISOI Logo"
          layout="fixed"
          width={112}
          height={56}
          draggable="false"
        />

        <div className="hidden lg:flex lg:items-center">
          <ul className="flex items-center">
            {textLinks.map((item) => {
              return (
                <li
                  className="ml-3 mr-3 font-navbar text-primary"
                  key={item.key}
                >
                  {item.text}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center">
            {imageLinks.map((item) => {
              return (
                <div className="ml-3 mr-3" key={item.key}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fixed"
                    width={24}
                    height={24}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          onClick={clickHandler}
          className="flex flex-col lg:hidden p-4 cursor-pointer relative z-20"
        >
          <div className={hamBurgerAnimation.upper}></div>
          <div className={hamBurgerAnimation.middle}></div>
          <div className={hamBurgerAnimation.lower}></div>
        </div>
      </div>

      <nav className={showMenuData}>
        <ul className={hideNavLinks}>
          {textLinks.map((item) => {
            return (
              <li className="ml-3 mr-3 font-navbar" key={item.key}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
