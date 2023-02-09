import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";

const NavigationBar = () => {

  const [hamburger, setHamburger] = useState('hidden')
  const [hamburgerImage, setHamburgerImage] = useState('/hamburgermenu.png')
  const hamburgerState = () => {
    return setHamburger((prevState) => { return prevState === "hidden" ? "block" : "hidden"});
  }

  const hamburgerMenu = {
    hidden : { y : -450, opacity : 0, transition : {duration : 0.5, type : 'bounce'} },
    open : { y : 0, opacity : 1, transition : {duration : 0.5, type : 'bounce'} }
  }

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

          <div className={"py-4 flex-col flex gap-2"}>
            <Link href={"/"} onClick={hamburgerState}>
              <Image
                src={"/hamburgermenu.png"}
                width={"200"}
                height={"200"}
                className={"w-11 h-11 hover:bg-neutral-50 group"}
                alt={"hamburgermenu"}
              />
            </Link>
          </div>
        </div>
      </div>
      <m.div

        variants={hamburgerMenu}
        initial = 'hidden'
        animate={hamburger === 'hidden' ? 'hidden' : 'open'}
        className={
          `absolute top-[6rem] bg-slate-300/90 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full h-40 mx-auto`
        }
      ></m.div>
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
