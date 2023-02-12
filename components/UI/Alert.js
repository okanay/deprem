import React from "react";

const Alert = ({title, children}) => {



  return (
    <div
      className=" bg-orange-100 border-l-4 border-red-400 text-gray-700 p-4 text-[0.8rem] phone:text-[0.9rem] phoneLG:text-base"
      role="alert"
    >
      <p className="font-bold">{title}</p>

      <p className={"row-span-1"}>
        {children}
      </p>
    </div>
  )
}

export default Alert