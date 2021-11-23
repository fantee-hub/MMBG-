import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const [toggler, setToggler] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleNav = () => {
    setToggler(!toggler);
  };
  const closeNav = () => {
    setToggler(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const theme = {
    background: "#f3f3f3",
    color: "black",
  };
  const defaultTheme = {
    background: "#121212",
  };
  const themeColor = {
    color: "#65666b",
  };
  const defaultColor = {
    color: "white",
  };

  return (
    <>
      <NavBar style={navbar ? theme : defaultTheme}>
        <div className="brand-name">
          <Link to="/" style={navbar ? themeColor : defaultColor}>
            MBB<span style={{ fontWeight: "600" }}>Grant.</span>
          </Link>
        </div>
        <div className="links">
          <Link
            to="/Faq"
            className="link-list"
            style={navbar ? themeColor : defaultColor}
          >
            FAQ
          </Link>
          <Link
            to="/Team"
            className="link-list"
            style={navbar ? themeColor : defaultColor}
          >
            Team
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetl5HMmtOSeJCcnEwPTdlicIQuT1pfBL-2Xb6M2c3bKnv_XA/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
            style={navbar ? themeColor : defaultColor}
          >
            Apply
          </a>
          <Link
            to="/About"
            className="link-list"
            style={navbar ? themeColor : defaultColor}
          >
            About Mama
          </Link>
        </div>
        <div
          className={`nav-toggler ${toggler ? "toggle" : ""}`}
          onClick={toggleNav}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </NavBar>
      <MobileNav>
        <div className={`mobile-links ${toggler ? "show-links" : " "}`}>
          <Link to="/Faq" onClick={closeNav}>
            FAQ
          </Link>
          <Link to="/Team" onClick={closeNav}>
            Team
          </Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSetl5HMmtOSeJCcnEwPTdlicIQuT1pfBL-2Xb6M2c3bKnv_XA/viewform?usp=sf_link">
            Apply
          </a>
          <Link to="/About" onClick={closeNav}>
            About Mama
          </Link>
        </div>
      </MobileNav>
    </>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6rem;
  width: 100%;
  padding: 2rem 4rem 2rem 4rem;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all 0.3s ease;

  .links {
    display: flex;
    justify-content: space-between;
  }

  .links a {
    text-decoration: none;

    color: #ffffff;
    padding: 1rem;
    transition: all 0.15s ease-in-out;

    position: relative;
  }
  .brand-name a {
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;

    color: #ffffff;
    padding: 0 1.2rem 0 0;
    position: relative;
    transition: all 0.15s ease-in-out;
    span {
      color: #ffe066;
    }
  }
  .nav-toggler > div {
    width: 2rem;
    height: 4px;
    background: #666666;
    margin: 0.3rem;
    border-radius: 6px;
    transition: all 0.5s ease;
  }
  .nav-toggler {
    cursor: pointer;
    z-index: 999;
  }
  .toggle .line-1 {
    transform: translate(-7px, 8px) rotate(-45deg);
  }
  .toggle .line-3 {
    transform: translate(-7px, -8px) rotate(45deg);
  }
  .toggle .line-2 {
    opacity: 0;
  }

  @media screen and (min-width: 701px) {
    .nav-toggler {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    .links {
      display: none;
    }
    padding: 0 1.5rem;
    .brand-name a {
      font-size: 1.3rem;
    }
  }
`;

const MobileNav = styled.div`
  .mobile-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #121212;
    display: grid;
    grid-template-rows: repeat(6, 50px);
    align-items: center;
    padding: 8rem 0 0 3rem;
    transition: all 0.5s ease;
    transform: translateY(-100%);
    z-index: 99;
    a {
      text-decoration: none;
      font-family: "Crimson Text", serif;
      color: #ffffff;
      font-size: 1.5rem;
      padding: 0 0.9rem 0 0;
      transition: all 0.15s ease-in-out;
      font-style: italic;
    }
  }
  .show-links {
    transform: translateY(0%);
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export default Nav;
