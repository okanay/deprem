import { motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

//absolute top-[6rem]
const FormsMenues = ({ hamburger }) => {

  const hamburgerMenu = {
    hidden: {
      opacity: 0.8,
      scaleY: 0,
      y: -50,
      transition: { duration: 0.10},
    },
    open: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      display: "block",
      scaleX : 0.95,
      transition: { duration: 0.30, type: 'spring' },
    },
  };

  const YardimAlTitle = 'İhtiyaç Formları';
  const YardimVerTitle = 'Yardım Formları';


  const YardimAl = [
    {
      key: "FYA0",
      url: "/",
      src: "/menuIcons/help.png",
      alt: "help",
      description: "Enkaz Formları",
    },
    {
      key: "FYA1",
      url: "/",
      src: "/menuIcons/foods.png",
      alt: "help",
      description: "Gida Formları",
    },
    {
      key: "FYA2",
      url: "/",
      src: "/menuIcons/warm.png",
      alt: "help",
      description: "Barinma Formları",
    },
  ];

  const YardimVer = [
    {
      key: "FYV0",
      url: "/",
      src: "/menuIcons/house.png",
      alt: "share-house",
      description: "Konaklama Formları",
    },
    {
      key: "FYV1",
      url: "/",
      src: "/menuIcons/construction-worker.png",
      alt: "construction-worker",
      description: "İş Makinesi Formları",
    },
    {
      key: "FYV2",
      url: "/",
      src: "/menuIcons/bus-driver.png",
      alt: "bus-driver",
      description: "Ulaşım Formları",
    },
  ];

  return (
    <m.div
      variants={hamburgerMenu}
      initial={'hidden'}
      animate={hamburger === "hidden" ? "hidden" : "open"}
      className={`absolute top-[6rem] rounded-md text-center bg-gradient-to-tl from-gray-100 via-slate-50 to-gray-100 border border-gray-200/90 max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full mx-auto h-20`}
    >

      <div className="h-full w-full flex justify-center items-center text-[0.9rem] text-gray-800">
        <nav className={'flex flex-row w-full items-center gap-5 justify-center font-semibold text-[0.6rem] phone:text-[0.71rem] phoneLG:text-[0.8rem]'}>

          <div className="flex flex-row">
            <Link href={'/'} className={'px-2  text-gray-600'}>POLİTİKA</Link>
            <Link href={'/'} className={'px-2  text-gray-600'}>HAKKIMDA</Link>
            <Link href={'/'} className={'px-2  text-gray-600'}>İLETİŞİM</Link>
          </div>


          <div className="flex flex-row gap-1">
            <Link href={'/'} className={'px-2 py-2 mr-1 rounded-[2.5px] border border-l-[4px] border-l-red-300 bg-slate-50/90'}>Giriş Yap</Link>
            <Link href={'/'} className={'px-2 py-2 mr-1 rounded-[2.5px] border border-l-[4px] border-l-sky-300 bg-slate-50/90'}>Kayıt Ol</Link>
          </div>
        </nav>

      </div>

    </m.div>
  );
};

export default FormsMenues;



/*

<div className={"flex flex-row justify-around pt-[1.2rem]"}>
        <div>
          <h1 className={"text-sm font-bold text-slate-700 bg-slate-200 px-2 py-1 rounded-md shadow-md shadow-sky-900/10"}>
            {YardimAlTitle}
          </h1>
          <div className={"pt-4 flex flex-col gap-4 pl-2 text-[0.8rem] font-light text-gray-800 items-start"}>
            {YardimAl.map((item) => {
              return (
                <Link
                  href={item.url}
                  className={
                    "hover:text-red-700 hover:font-light hover:underline hover:underline-offset-[3px]"
                  }
                  key={item.key}
                >
                  <span>
                    {" "}
                    <Image
                      src={item.src}
                      width={"200"}
                      height={"200"}
                      alt={item.alt}
                      className={
                        "w-4 h-4 duration-300 group-hover:animate-pulse inline mr-2 "
                      }
                    />
                    {item.description}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className={"text-sm font-bold text-slate-700 bg-slate-200 px-2 py-1 rounded-md shadow-md shadow-sky-900/10"}>
            {YardimVerTitle}
          </h1>
          <div className={"pt-4 flex flex-col gap-4  text-[0.8rem] font-light text-gray-800 items-start"}>
            {YardimVer.map((item) => {
              return (
                <Link
                  href={item.url}
                  className={
                    "hover:text-sky-700 hover:font-light hover:underline hover:underline-offset-[3px]"
                  }
                  key={item.key}
                >
                  <span>
                    {" "}
                    <Image
                      src={item.src}
                      width={"200"}
                      height={"200"}
                      alt={item.alt}
                      className={
                        "w-4 h-4 duration-300 group-hover:animate-pulse inline mr-2"
                      }
                    />
                    {item.description}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>


 */