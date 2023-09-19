import React from "react";
import LoGo from "../../assets/ss-icon-27.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Shopping</h1>
    </header>
  );
};

export default Header;
