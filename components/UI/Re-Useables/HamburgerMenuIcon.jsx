import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";


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
const HamburgerMenuIcon = ({hamburger, hamburgerState}) => {

  return (
    <m.div
      className={"py-4"}
      variants={menuAnimation}
      animate={hamburger === "hidden" ? "open" : "close"}
    >
      <div onClick={hamburgerState}>
        <Image
          priority={true}
          loading={'eager'}
          src={"/svg/hamburgerMenu.svg"}
          width={"200"}
          height={"200"}
          className={"w-9 h-9 hover:bg-neutral-50 group"}
          alt={"hamburgermenu"}
        />
      </div>
    </m.div>
  )
}

export default HamburgerMenuIcon