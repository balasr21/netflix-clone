import React, { useState, useEffect } from "react";
import "./Nav.styles.css";
import "../../assets/NetflixUserProfile.png";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/archive/0/08/20190206123156%21Netflix_2015_logo.svg"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav__userprofile"
        src="https://www.flaticon.com/svg/static/icons/svg/179/179839.svg"
        alt="User profile"
      ></img>
    </div>
  );
};

export default Nav;
