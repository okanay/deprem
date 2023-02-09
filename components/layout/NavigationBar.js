
import React, { useState } from "react";
import FormsMenues from "./formsMenues";
import Diveded from "../UI/diveded";
import Logo from "../UI/Logo";
import HamburgerMenuIcon from "../UI/HamburgerMenuIcon";

const NavigationBar = () => {
  // React Hooks = React Hooks Functions
  const [hamburger, setHamburger] = useState("hidden");
  const hamburgerState = () => {
    return setHamburger((prevState) => {
      return prevState === "hidden" ? "block" : "hidden";
    });
  };

  return (
    <div className={"pb-8"}>
      <div className={"flex justify-between items-center"}>
        <Logo />
        <div className={"flex justify-between gap-4 pr-5 items-center"}>
          <Diveded />
          <HamburgerMenuIcon
            hamburgerState={hamburgerState}
            hamburger={hamburger}
          />
        </div>
      </div>
      <FormsMenues hamburgerState={hamburgerState} hamburger={hamburger} />
    </div>
  );
};

export default NavigationBar;

