import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "#f15b2a",
  };
  return (
    <div className="">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>{" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <NavLink to="/courses" activeStyle={activeStyle}>{" | "}
        Courses
      </NavLink>
    </div>
  );
};

export default Header;
