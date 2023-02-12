import { motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

//absolute top-[6rem]
const HamburgerHiddenMenues = ({ hamburger }) => {

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

export default HamburgerHiddenMenues;
