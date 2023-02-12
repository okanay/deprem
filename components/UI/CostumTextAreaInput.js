import Image from "next/image";
import React from "react";

const CostumTextAreaInput = ({details, formik, }) => {

  return  (
    <div className={"relative py-2"}>
            <textarea
              className={
                "peer focus:outline-none transition duration-300 focus:border-gray-800 placeholder:text-transparent w-full px-9 py-1 h-30 bg-gray-50 border-2 border-slate-500"
              }
              rows={details.rows}
              maxLength={details.maxLength}
              placeholder={details.description}
              name={details.name}
              onChange={formik.handleChange}
              value={details.formik}
            />
      <Image
        src={details.src}
        width={"200"}
        height={"200"}
        alt={details.name}
        className={"absolute top-4 left-2 w-5 h-5"}
      />

      <label
        htmlFor={details.name}
        className={`absolute left-0 -top-2.5 ${
          details.error ? "text-red-400" : "text-gray-400"
        } ${
          details.error
            ? "peer-placeholder-shown:text-red-400"
            : "peer-placeholder-shown:text-gray-400"
        } text-[0.7rem] peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:top-4 peer-placeholder-shown:left-10 transition-all duration-300 pointer-events-none`}
      >
        {details.description}
      </label>
    </div>
  )
}

export default CostumTextAreaInput