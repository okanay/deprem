import React from "react";

const TalepStatus = ({ status }) => {
  if (status === 0) {
    return (
      <div
        className={
          "bg-emerald-300 px-2 py-1 rounded border border-slate-700/30"
        }
      >
        <p className={"p-[0.02rem] mt-0.5"}>Hafif</p>
      </div>
    );
  } else if (status === 1) {
    return (
      <div
        className={"bg-orange-300 px-2 py-1 rounded border border-slate-700/30"}
      >
        <p className={"p-[0.02rem] mt-0.5"}>Orta</p>
      </div>
    );
  } else if (status === 2) {
    return (
      <div
        className={"bg-red-300 px-2 py-1 rounded border border-slate-700/30"}
      >
        <p className={"p-[0.02rem] mt-0.5"}>Kritik</p>
      </div>
    );
  } else {
    return (
      <div
        className={"bg-gray-100 px-2 py-1 rounded border border-slate-700/10"}
      >
        <p className={"p-[0.02rem] mt-0.5"}>Belirsiz</p>
      </div>
    );
  }
};

export default TalepStatus;
