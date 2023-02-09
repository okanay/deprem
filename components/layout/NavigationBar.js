import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";

const NavigationBar = () => {
  const [hamburger, setHamburger] = useState("hidden");
  const [hamburgerImage, setHamburgerImage] = useState("/hamburgermenu.png");
  const hamburgerState = () => {
    return setHamburger((prevState) => {
      return prevState === "hidden" ? "block" : "hidden";
    });
  };

  const hamburgerMenu = {
    hidden: {
      opacity: 0.8,
      scaleY: 0,
      y: -80,
      transition: { duration: 0.1, bounce: 50 },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      display: "block",
      transition: { duration: 0.2, bounce: 50 },
    },
  };

  const menuAnimation = {
    close: {
      opacity: 0.8,
      scaleY: 1,
      scaleX: 1,
      transition: { duration: 0.45, type: "bounce" },
    },
    open: {
      opacity: 1,
      scaleY: 0.9,
      scaleX: 0.9,
      transition: { duration: 0.45, type: "bounce" },
    },
  };

  return (
    <div className={"pb-8"}>
      <div className={"flex justify-between items-center"}>
        <Link
          href={"/"}
          className={
            "font-OpenSans font-bold uppercase bg-gradient-to-r from-neutral-600/90 via-slayer-500/80 5 to-sky-900/90 bg-clip-text text-transparent shadow-red-400/100 text-4xl pl-5"
          }
        >
          deprem
        </Link>
        <div className={"flex justify-between gap-4 pr-5 items-center"}>
          {/*HAMBURGER MENU COME HERE*/}

          <h1 className={"text-4xl mb-2 text-gray-500/80 font-light"}>|</h1>

          <m.div
            className={"py-4"}
            variants={menuAnimation}
            animate={hamburger === "hidden" ? "open" : "close"}
          >
            <Link href={"/"} onClick={hamburgerState}>
              <Image
                src={"/hamburgermenu.png"}
                width={"200"}
                height={"200"}
                className={"w-9 h-9 hover:bg-neutral-50 group"}
                alt={"hamburgermenu"}
              />
            </Link>
          </m.div>
        </div>
      </div>
      <m.div
        variants={hamburgerMenu}
        // initial = 'hidden'
        animate={hamburger === "hidden" ? "hidden" : "open"}
        className={`absolute top-[6rem] bg-gradient-to-tl from-gray-100 via-slate-50 to-gray-100 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full h-44 mx-auto border border-gray-200/90 text-center`}
      >
        <div className={"flex flex-row justify-around pt-[1.2rem]"}>
          <div>
            <h1
              className={
                "text-sm font-bold text-red-400 bg-slate-200 px-2 py-1 rounded-md shadow-md shadow-red-800/30"
              }
            >
              Ihtiyac Formlari
            </h1>
            <div
              className={
                "pt-4 flex flex-col gap-4 pl-2 text-[0.8rem] font-light text-gray-800 items-start"
              }
            >
              <Link href={"/"} className={'hover:text-red-400 hover:font-light hover:underline hover:underline-offset-[3px]'}>
                <span> <Image
                    src={"/earthquake.png"}
                    width={"200"}
                    height={"200"}
                    alt={"earthquake"}
                    className={"w-4 h-4 duration-300 group-hover:animate-pulse inline mr-2 "} />
                  Enkaz Formlari
                </span>
              </Link>
              <Link href={"/"} className={'hover:text-red-400 hover:font-light hover:underline hover:underline-offset-[3px]'}>
                <span> <Image
                  src={"/foods.png"}
                  width={"200"}
                  height={"200"}
                  alt={"warm"}
                  className={"w-4 h-4 duration-300 group-hover:animate-pulse inline mr-2"} />
                  Gida Formlari
                </span>
              </Link>
              <Link href={"/"} className={'hover:text-red-400 hover:font-light hover:underline hover:underline-offset-[3px]'}>
                <span> <Image
                  src={"/warm.png"}
                  width={"200"}
                  height={"200"}
                  alt={"food"}
                  className={"w-4 h-4 duration-300 group-hover:animate-pulse inline mr-2"} />
                  Barinma Formlari
                </span>
              </Link>
            </div>
          </div>
          <div>
            <h1
              className={
                "text-sm font-bold text-sky-400 bg-slate-200 px-2 py-1 rounded-md shadow-md shadow-sky-800/30"
              }
            >
              Yardim Formlari
            </h1>
            <div
              className={
                "pt-4 flex flex-col gap-4  text-[0.8rem] font-light text-gray-800 items-start"
              }
            >
              <Link href={"/"} className={'hover:text-sky-400 hover:font-light hover:underline hover:underline-offset-[3px]'}>
                <span> <Image
                  src={"/house.png"}
                  width={"200"}
                  height={"200"}
                  alt={"share house"}
                  className={"w-4 h-4 duration-300 group-hover:animate-pulse inline mr-2"} />
                  Konaklama Formlari
                </span>
              </Link>
              <Link href={"/"} className={'hover:text-sky-400 hover:font-light hover:underline hover:underline-offset-[3px]'}>
                <span> <Image
                  src={"/construction-worker.png"}
                  width={"200"}
                  height={"200"}
                  alt={"construction-worker"}
                  className={"w-4 h-4 duration-300 group-hover:animate-pulse inline mr-2"} />
                  Is Makinesi Formlari
                </span>
              </Link>
              <Link href={"/"} className={'hover:text-sky-400 hover:font-light hover:underline hover:underline-offset-[3px]'}>
                <span> <Image
                  src={"/bus-driver.png"}
                  width={"200"}
                  height={"200"}
                  alt={"bus"}
                  className={"w-4 h-4 duration-300 group-hover:animate-pulse inline mr-2"} />
                  Ulasim Formlari
                </span>
              </Link>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default NavigationBar;

/*


           <Link
            href={"/"}
            className={
              "transition-colors duration-[450ms] py-1 px-2 bg-gray-50/80 text-neutral-800/90 hover:bg-gray-800/80 hover:text-gray-50/90 border border-slate-800/25 border-opacity-20 shadow shadow-slate-800/25 rounded-lg text-2xl font-semibold"
            }
          >
            AFAD
          </Link>

          <Link
            href={"/"}
            className={
              "transition-colors duration-[450ms] py-1 px-2 bg-gray-50/80 text-neutral-800/90 hover:bg-gray-800/80 hover:text-gray-50/90 border border-slate-800/25 border-opacity-20 shadow shadow-slate-800/25 rounded-lg text-2xl font-semibold"
            }
          >
            AHBAP
          </Link>
* */
