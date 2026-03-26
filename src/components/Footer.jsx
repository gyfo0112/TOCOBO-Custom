import React, { useState } from "react";
import {
  logoData,
  companyData,
  customerCenterData,
  footerMenus,
  socialLinks,
  footerLegal,
} from "../util/footer";
import "./styles/Footer.scss";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="footer-wrapper">
      <div className="inner footer-inner">
        
        <div className="left">
          <h3 className="footer-logo">
            <a href={logoData.href}>
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>
          
          <ul className="company-info">
            {companyData.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <div className="footer-legal desktop-only">
            <p className="copyright">{footerLegal.copyright}</p>
            <div className="legal-links">
              {footerLegal.links.map((link, index) => (
                <a key={index} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="center desktop-only">
          {footerMenus.map((menu, index) => (
            <div key={index} className="menu-col">
              <h4>{menu.title}</h4>
              <ul>
                {menu.items.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`right ${isOpen ? "open" : ""}`}>
          
          <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
            <h4>{customerCenterData.title}</h4>
            <span className="toggle-icon mobile-only"></span>
          </div>

          <div className="accordion-content">
            <p className="tel">
              <a href={customerCenterData.tel.href}>
                {customerCenterData.tel.value}
              </a>
            </p>
            <p className="time">{customerCenterData.hours}</p>
            <p className="notice">{customerCenterData.notice}</p>
            
            <a href={customerCenterData.talk.href} className="btn-talk">
              {customerCenterData.talk.label}
            </a>

            <div className="sns-links desktop-only">
              {socialLinks.map((social) => (
                <a 
                  key={social.id} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="icon" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="inner mobile-legal mobile-only">
         <div className="legal-links">
            {footerLegal.links.map((link, index) => (
              <a key={index} href={link.href}>{link.label}</a>
            ))}
          </div>
          
          <p className="copyright">{footerLegal.copyright}</p>
          
          <div className="sns-links">
             {socialLinks.map((social) => (
                <a key={social.id} href={social.href} target="_blank" rel="noreferrer">
                  <social.icon className="icon" />
                </a>
              ))}
          </div>
      </div>
    </footer>
  );
};

export default Footer;