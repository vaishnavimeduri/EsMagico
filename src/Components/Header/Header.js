import React from "react";
import base from "../../img/Header Base.png";
import navigation from "../../img/Navigation.png";
import orangeup from "../../img/Orange Pattern for BG.svg";

import border from "../../img/Border.png";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={base} alt="" className="base" />
      <img src={navigation} alt="" className="navigation" />

      <img src={orangeup} alt="" className="orangeup" />

      <img src={border} alt="" className="border" />
    </div>
  );
}

export default Header;
