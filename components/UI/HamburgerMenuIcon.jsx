import { motion as m } from "framer-motion";
import Link from "next/link";
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
      <Link href={"/"} onClick={hamburgerState}>
        <Image
          src={"/menuIcons/hamburgermenu.png"}
          width={"200"}
          height={"200"}
          className={"w-9 h-9 hover:bg-neutral-50 group"}
          alt={"hamburgermenu"}
        />
      </Link>
    </m.div>
  )
}

export default HamburgerMenuIcon