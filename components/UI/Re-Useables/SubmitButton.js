import React from "react";

const SubmitButton = () => {
  return (
    <button
      type={"submit "}
      className={
        "py-2 px-6 bg-red-400 border border-gray-400/20 rounded-md text-center text-slate-50 transition duration-300 hover:text-slate-50 hover:bg-slate-500 mr-2"
      }
    >
      Gönder
    </button>
  );
};

export default SubmitButton;
