import Image from "next/image";
import React from "react";

const CustomInput = ({item, formik}) => {


  return (
    <div className={"relative mb-1 pb-[0.7rem]"}>
      <input
        className={
          "peer appearance-none focus:outline-none transition duration-300 focus:border-slate-800 placeholder:text-transparent w-full px-9 h-10 bg-gray-50 border-[0px] rounded-[0px] border-b-2 border-slate-500"
        }
        type={item.type}
        maxLength={item.maxLength}
        minLength={item.minLength}
        inputMode={item.inputMode}
        placeholder={item.description}
        name={item.name}
        id={item.id}
        onChange={formik.handleChange}
        value={item.formik}
      />

      <Image
        priority={true}
        loading={'eager'}

        src={item.src}
        width={"200"}
        height={"200"}
        alt={item.name}
        className={"absolute top-2.5 left-2 w-5 h-5"}
      />

      <label
        htmlFor={item.name}
        className={`absolute left-0 -top-3.5 ${
          item.error ? "text-red-400" : "text-gray-400"
        } ${
          item.error
            ? "peer-placeholder-shown:text-red-400"
            : "peer-placeholder-shown:text-gray-400"
        } text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
      >
        {item.description}
      </label>
    </div>
  )

}

export default CustomInput