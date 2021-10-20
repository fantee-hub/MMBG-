import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const [toggler, setToggler] = useState(false);
  const toggleNav = () => {
    setToggler(!toggler);
  };
  const closeNav = () => {
    setToggler(false);
  };

  return (
    <>
      <Nav_Bar>
        <div className="brand-name">
          <Link to="/">
            <a> Griffin Chure, PhD</a>
            <Line style={{ width: "0%" }} />
          </Link>
        </div>
        <div className="links">
          <Link to="/About" className="link-list">
            <a>About</a>
            <Line style={{ width: pathname === "/About" ? "55%" : "0%" }} />
          </Link>
          <Link to="/CV" className="link-list">
            <a>CV</a>
            <Line style={{ width: pathname === "/CV" ? "45%" : "0%" }} />
          </Link>
          <Link to="/Research" className="link-list">
            <a>Research</a>
            <Line style={{ width: pathname === "/Research" ? "70%" : "0%" }} />
          </Link>
          <Link to="/Teaching" className="link-list">
            <a>Teaching</a>
            <Line style={{ width: pathname === "/Teaching" ? "65%" : "0%" }} />
          </Link>
          <Link to="/Showcase" className="link-list">
            <a>Showcase</a>
            <Line style={{ width: pathname === "/Showcase" ? "70%" : "0%" }} />
          </Link>
          <Link to="/Photography" className="link-list">
            <a>Photography</a>
            <Line
              style={{ width: pathname === "/Photography" ? "50%" : "0%" }}
            />
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
      </Nav_Bar>
      <MobileNav>
        <div className={`mobile-links ${toggler ? "show-links" : " "}`}>
          <Link to="/About" onClick={closeNav}>
            <a style={{ color: pathname === "/About" ? "#4f76ba" : "#ffffff" }}>
              About
            </a>
          </Link>
          <Link to="/CV" onClick={closeNav}>
            <a style={{ color: pathname === "/CV" ? "#4f76ba" : "#ffffff" }}>
              CV
            </a>
          </Link>
          <Link to="/Research" onClick={closeNav}>
            <a
              style={{
                color: pathname === "/Research" ? "#4f76ba" : "#ffffff",
              }}
            >
              Research
            </a>
          </Link>
          <Link to="/Teaching" onClick={closeNav}>
            <a
              style={{
                color: pathname === "/Teaching" ? "#4f76ba" : "#ffffff",
              }}
            >
              Teaching
            </a>
          </Link>
          <Link to="/Showcase" onClick={closeNav}>
            <a
              style={{
                color: pathname === "/Showcase" ? "#4f76ba" : "#ffffff",
              }}
            >
              Showcase
            </a>
          </Link>
          <Link to="/Photography" onClick={closeNav}>
            <a
              style={{
                color: pathname === "/Photography" ? "#4f76ba" : "#ffffff",
              }}
            >
              Photography
            </a>
          </Link>
        </div>
      </MobileNav>
    </>
  );
};

const Nav_Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8rem;
  max-width: 55rem;
  margin: 0 auto;
  border-bottom: 1px solid #dbe8f8;
  .links a {
    text-decoration: none;
    font-family: "Crimson Text", serif;
    color: #4b4b4b;
    padding: 0 0.9rem 0 0;
    transition: all 0.15s ease-in-out;
    font-style: italic;
    position: relative;
    &:hover {
      color: #4f76ba;
    }
  }
  .brand-name a {
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    font-family: "Crimson Text", serif;
    color: #4b4b4b;
    padding: 0 1.2rem 0 0;
    position: relative;
    transition: all 0.15s ease-in-out;
    &:hover {
      color: #4f76ba;
    }
  }
  .nav-toggler > div {
    width: 2rem;
    height: 4px;
    background: #4b4b4b;
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
    background: #ffffff;
  }
  .toggle .line-3 {
    transform: translate(-7px, -8px) rotate(45deg);
    background: #ffffff;
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
    background: rgba(60, 60, 60, 0.9);
    display: grid;
    grid-template-rows: repeat(6, 50px);
    align-items: center;
    padding: 5rem 0 0 3rem;
    transition: all 0.5s ease;
    transform: translateX(-100%);
    z-index: 99;
    a {
      text-decoration: none;
      font-family: "Crimson Text", serif;
      color: #ffffff;
      font-size: 1.5rem;
      padding: 0 0.9rem 0 0;
      transition: all 0.15s ease-in-out;
      font-style: italic;

      &:hover {
        color: #4b4b4b !important;
      }
    }
  }
  .show-links {
    transform: translateX(0%);
  }
`;

const Line = styled.div`
  height: 0.1rem;
  background: #4f76ba;
  width: 0%;
  position: absolute;
  bottom: -40%;
  left: 0%;
  transition: all 0.3s ease-out;
`;

export default Nav;
