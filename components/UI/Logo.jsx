import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

const Logo = () => {

  const {data, error, isLoading, isSuccess} = useQuery("version");
  const versionText = isSuccess ? data.version : "V0.A23";



  return (
    <div className={'flex flex-col gap-4 relative'}>

    <Link
      href={"/"}
      className={
        " font-OpenSans font-bold uppercase bg-gradient-to-r from-neutral-600/90 via-slayer-500/80 5 to-sky-900/90 bg-clip-text text-transparent shadow-red-400/100 text-3xl pl-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-violet-800/90 hover:via-violet-500/80 5 hover:to-pink-600/90"
      }
    >
     DEPREM
    </Link>
      <h1 className={'absolute text-[0.75rem] uppercase text-slate-800 font-bold -top-[8.5px] right-0'}>Alpha</h1>
      <h1 className={'absolute text-[0.6rem] uppercase text-slate-800 font-bold   top-[28px] left-[18px]'}>{versionText}</h1>

    </div>

  );
};

export default Logo;
