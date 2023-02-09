import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className={
        "font-OpenSans font-bold uppercase bg-gradient-to-r from-neutral-600/90 via-slayer-500/80 5 to-sky-900/90 bg-clip-text text-transparent shadow-red-400/100 text-4xl pl-4"
      }
    >
      deprem
    </Link>
  );
};

export default Logo;
