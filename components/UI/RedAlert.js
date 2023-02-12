import React from "react";

const RedAlert = ({title, children}) => {

  return (
    <div
      className=" bg-red-100 border-l-4 border-orange-400 text-orange-700 p-4"
      role="alert"
    >
      <p className="font-bold">{title}</p>

      <p className={"row-span-1"}>
        {children}
      </p>
    </div>
  )
}

export default RedAlert