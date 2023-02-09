import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className={
        "font-OpenSans font-bold uppercase bg-gradient-to-r from-neutral-600/90 via-slayer-500/80 5 to-sky-900/90 bg-clip-text text-transparent shadow-red-400/100 text-4xl pl-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-violet-800/90 hover:via-violet-500/80 5 hover:to-pink-600/90"
      }
    >
      deprem
    </Link>
  );
};

export default Logo;
