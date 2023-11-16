/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import "./styles.css";
import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../../assets/images/icon-delete.svg";
import iconMenu from "../../assets/images/icon-menu.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <div className="navigation-menu">
          <div className="logo-title">
            <div className="logo" onClick={() => setIsMenuOpen(true)}>
              <img src={iconMenu} alt="Menu" />
            </div>
            <h1>Sneakers</h1>
          </div>
          <nav className="navigation">
            <ul className="navigation-list">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className="profile">
          <div className="profile-cart" onClick={() => setClicked(!clicked)}>
            <img src={cart} alt="Cart" className="cart" />
          </div>
          <div className="profile-avatar">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>
        </div>
        {clicked ? (
          <div className="cart-items-wrapper">
            <div className="cart-bannner">
              <strong className="banner">Cart</strong>
            </div>
            <hr />
            <div className="cart-items">
              <div className="items">
                <div className="cart-thumbnail">
                  <img
                    src={thumbnail1}
                    alt="Thumbnail"
                    className="thumbnail-cart"
                  />
                </div>
                <div>
                  <span className="cart-item-title">
                    Fall Limited Edition Sneakers
                  </span>
                  <div>
                    <span className="cart-item-price">$125.00 x 3 </span>
                    <strong>$375.00</strong>
                  </div>
                </div>
                <div className="icon-delete">
                  <img src={iconDelete} alt="Delete" className="delete" />
                </div>
              </div>
              <button type="button" className="cart-btn">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <MobileMenu setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
