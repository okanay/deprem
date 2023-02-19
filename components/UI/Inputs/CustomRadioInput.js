import React from "react";

const CustomRadioInput  = ({item, handleSelectedOption, selectedOption}) => {

  return (

    <div className="mb-2 relative">
      <input
        type="radio"
        id={item.id}
        name={item.value}
        value={item.value}
        checked={selectedOption === item.value}
        onChange={handleSelectedOption}
        className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer peer"
      />
      <label
        htmlFor={item.value}
        className={`${item.labelColor} absolute top-0 left-6 peer-checked:font-semibold`}
      >
        {item.name}
      </label>
    </div>

  )
}

export default CustomRadioInput