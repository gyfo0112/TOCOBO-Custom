import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Util from "./Util";
import { headerData } from "../util/header";
import "./styles/Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logo, menus, utils, gnb, bottom } = headerData;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const cartCount = 0;

  return (
    <header className={isOpen ? "menu-open" : ""}>
      <div className="inner">
        <div className="desktop-only nav-area">
          <Nav menus={menus} />
        </div>

        <button
          className={`trigger-btn mobile-only ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>menu</span>
        </button>

        <h1 className="tit">
          <a href={logo.href}>
            <img src={logo.src} alt={logo.alt} />
          </a>
        </h1>

        <div className="desktop-only util-area">
          <Util utils={utils} />
        </div>

        <div className="mobile-only mobile-cart">
          <a href="#">
            <img src="/img/icon_cart.svg" alt="cart" />
            {cartCount > 0 && <span className="count">{cartCount}</span>}
          </a>
        </div>
      </div>

      <div className={`menu-drawer mobile-only ${isOpen ? "open" : ""}`}>
        <div className="drawer-inner">
          <div className="util-icons">
            {utils.map((util) => (
              <a href={util.href} key={util.id}>
                <img src={util.icon} alt={util.label} />
              </a>
            ))}
          </div>

          <ul className="gnb-list">
            {gnb.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <div className="bottom-links">
            {bottom.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {isOpen && <div className="menu-overlay mobile-only" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
};

export default Header;