
import React, { useState } from "react";
import HamburgerHiddenMenues from "./HamburgerHiddenMenues";
import Logo from "../../UI/Re-Useables/Logo";
import HamburgerMenuIcon from "../../UI/Re-Useables/HamburgerMenuIcon";

const NavigationBar = () => {
  // React Hooks = React Hooks Functions
  const [hamburger, setHamburger] = useState("hidden");
  const hamburgerState = () => {
    return setHamburger((prevState) => {
      return prevState === "hidden" ? "block" : "hidden";
    });
  };

  return (
    <div className={"py-6"}>
      <div className={"flex justify-between items-center"}>
        <Logo />
        <div className={"flex justify-between gap-4 pr-5 items-center"}>
          {/* AYIRMA CIZGISI */}
          <div className={`border-r-[1px] border-r-slate-800/50 w-1 h-[2.4rem]`}></div>
          <HamburgerMenuIcon
            hamburgerState={hamburgerState}
            hamburger={hamburger}
          />
        </div>
      </div>
      <HamburgerHiddenMenues hamburger={hamburger} hamburgerState={hamburgerState} />
    </div>
  );
};

export default NavigationBar;

