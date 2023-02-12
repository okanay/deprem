import Link from "next/link";
import React from "react";

const FormTitle = ({formName, formFullListURL}) => {


  return (
    <div className={"flex flex-row justify-between items-center"}>
      <h1
        className={"text-lg font-semibold text-neutral-700 text-start my-5"}
      >
        <span className={"text-slate-600/90 "}>{formName}</span>{" "}
        <span className={"font-light font-serif"}>Formu</span>
      </h1>
      <Link
        href={formFullListURL}
        className={
          "py-2 px-2 rounded-md bg-slate-50 border border-slate-800/20 text-slate-700/90 shadow shadow-blue-400/30 uppercase font-bold text-sm transition-colors duration-300 hover:bg-slate-600/90 hover:text-slate-50"
        }
      >
        TAM-LISTE
      </Link>
    </div>
  )
}

export default FormTitle