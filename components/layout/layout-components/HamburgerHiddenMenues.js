import { motion as m } from "framer-motion";
import Link from "next/link";

import Image from "next/image";

const HamburgerHiddenMenues = ({ hamburger, hamburgerState }) => {
  const hamburgerMenu = {
    hidden: {
      opacity: 0.8,
      scaleY: 0,
      y: -50,
      transition: { duration: 0.1 },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      display: "block",
      scaleX: 0.95,
      transition: { duration: 0.3, type: "spring" },
    },
  };

  return (
    <m.div
      variants={hamburgerMenu}
      initial={"hidden"}
      animate={hamburger === "hidden" ? "hidden" : "open"}
      className={`absolute top-[6rem] rounded-md text-center bg-gradient-to-tl from-gray-100 via-slate-50 to-gray-100 border border-gray-200/90 tablet:max-w-screen-tablet  max-w-screen-phoneXS phoneLG:max-w-screen-phoneLG phone:max-w-screen-phone w-full mx-auto h-20`}
    >
      <div className="h-full w-full flex justify-center items-center text-[0.9rem] text-gray-800">
        <nav
          className={
            "flex flex-row w-full items-center gap-5 justify-center font-semibold text-[0.6rem] phone:text-[0.71rem] phoneLG:text-[0.8rem]"
          }
        >
          <div className="flex flex-row">
            <Link
              onClick={() => {
                hamburgerState();
              }}
              href={"/politika"}
              className={"px-2  text-gray-600"}
            >
              POLİTİKA
            </Link>
            <Link
              onClick={() => {
                hamburgerState();
              }}
              href={"https://github.com/okanay"}
              className={"px-2  text-gray-600"}
            >
              HAKKIMDA
            </Link>
            <Link
              onClick={() => {
                hamburgerState();
              }}
              href={"/#contact-me"}
              className={"px-2 text-gray-600 cursor-pointer"}
            >
              İLETİŞİM
            </Link>
          </div>

          <div className="flex flex-row gap-1">
            <Link
              onClick={() => {
                hamburgerState();
              }}
              href={"/giris"}
              className={
                "px-2 py-2 mr-1 rounded-[2.5px] border border-slate-400/20 bg-slate-50/90"
              }
            >
              Giriş Yap
            </Link>
            <Link
              onClick={() => {
                hamburgerState();
              }}
              href={"/kayit"}
              className={
                "px-2 py-2 mr-1 rounded-[2.5px] text-white border border-slate-50/20 bg-blue-500/80"
              }
            >
              Kayıt Ol
            </Link>
          </div>
        </nav>
      </div>
    </m.div>
  );
};

export default HamburgerHiddenMenues;
