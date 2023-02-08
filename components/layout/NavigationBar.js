import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";

const NavigationBar = () => {
  return (
    <div className={"pb-8 "}>
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

          <div className={"py-4 flex-col flex gap-2 relative group"}>
            <Link href={"/"}>
              <Image
                src={"/hamburgermenu.png"}
                width={"200"}
                height={"200"}
                className={"w-11 h-11 hover:bg-neutral-50 group"}
                alt={"hamburgermenu"}
              />
            </Link>

            <div
              className={
                "hidden group-hover:block bg-red-400 absolute -bottom-[11.2rem] -right-[10.80rem] py-24 px-80"
              }
            ></div>
          </div>
        </div>
      </div>
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
