import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "../Icons/CloseIcon";
import "./mobileMenu.css";

const MobileMenu = ({ setIsMenuOpen }) => {
  return (
    <div className="mobile">
      <div className="mobile-wrapper">
        <div onClick={() => setIsMenuOpen(false)}>
          <CloseIcon className="close-icon-menu" />
        </div>
        <nav className="">
          <ul className="navigation-list-mobile">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
};
export default MobileMenu;
