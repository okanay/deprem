import { motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

//absolute top-[6rem]
const FormsMenues = ({hamburger, hamburgerState}) =>
{

  const hamburgerMenu = {
    initial: {
      opacity: 0.8,
      scaleY: 0,
      y: -87,
      transition: { duration: 0 },
    },
    hidden: {
      opacity: 0.8,
      scaleY: 0,
      y: -87,
      transition: { duration: 0.1 },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      display: "block",
      transition: { duration: 0.2, bounce: 50 },
    },
  };

  return (
    <m.div
      variants={hamburgerMenu}
      initial = 'initial'
      animate={hamburger === "hidden" ? "hidden" : "open"}
      className={`hidden absolute top-[6rem] bg-gradient-to-tl from-gray-100 via-slate-50 to-gray-100 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full h-44 mx-auto border border-gray-200/90 text-center`}
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
  )
}

export default FormsMenues