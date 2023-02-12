import React from "react";

const KvkCheckBox = ({handleKVKChecked, formik}) => {


  return (
    <div className="mb-2 relative">
      <input
        type="checkbox"
        id={"kvk"}
        name={"kvk"}
        onChange={handleKVKChecked}
        className="rounded-full h-4 w-4 border border-gray-300 bg-white active:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer peer"
      />
      <label
        htmlFor={"kvk"}
        className={`absolute w-48 top-1 left-6 text-[0.7rem] ${
          formik.errors.kvk ? "text-red-400" : "text-gray-400"
        } peer-checked:font-semibold peer-checked:text-gray-700`}
      >
        KVK Kurallarini Onayliyorum
      </label>
    </div>
  )
}

export default KvkCheckBox