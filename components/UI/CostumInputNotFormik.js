import Image from "next/image";
import React from "react";
const CostumInputNotFormik = ({type, maxLength,minLength,inputMode, description, name, id, handleChange, src,value}) => {

    return (
      <div className={"relative"}>
        <input
          className={
            "peer appearance-none focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-[0px] rounded-[0px] border-b-2 border-slate-500"
          }
          type={type}
          maxLength={maxLength}
          minLength={minLength}
          inputMode={inputMode}
          placeholder={description}
          name={name}
          id={id}
          onChange={handleChange}
          value={value}
        />

        <Image
          priority={true}
          loading={'eager'}

          src={src}
          width={"200"}
          height={"200"}
          alt={name}
          className={"absolute top-2.5 left-2 w-5 h-5"}
        />

        <label
          htmlFor={name}
          className={`absolute left-0 -top-3.5 text-gray-400 peer-placeholder-shown:text-gray-400 text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
        >
          {description}
        </label>
      </div>
  )
}

export default CostumInputNotFormik