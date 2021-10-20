import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

/** Images */
import bugs from "../images/bugs.png";
import caltech from "../images/caltech.jpg";
import diffractionPattern from "../images/diffraction_pattern.jpg";
import notes from "../images/notes.png";
import iguacu from "../images/iguacu.jpeg";
import random_walk from "../images/random_walk_expon.png";
/** Images */

const Home = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    document.title = "Griffin Chure, PhD -";
  }

  return (
    <div>
      <>
        <Intro>
          <p>
            The short version is that I'm a biologist trying to become a
            physicist. The slightly longer version is that I'm a postdoc at
            Stanford sitting in the lab of Jonas Cremer where I use principles
            of bacterial physiology to make predictive models of evolution. I
            firmly believe that the future of biology relies on an intuition for
            the physics that governs it, especially in evolutionary biology.
          </p>
        </Intro>
        <ImageCollection>
          <div className="collection">
            <Link to="/About">
              <span className="img-1">
                <img src={bugs} alt="bugs" />
                <div className="text-1">About</div>
              </span>
            </Link>
            <Link to="/Teaching">
              <span className="img-2">
                <img src={diffractionPattern} alt="diffractionPattern" />
                <div className="text-2">Teaching</div>
              </span>
            </Link>
            <Link to="/Photography">
              <span className="img-3">
                <img src={iguacu} alt="iguacu" />
                <div className="text-3">Photography</div>
              </span>
            </Link>
          </div>
          <div className="collection">
            <Link to="/CV">
              <span>
                <img src={caltech} alt="caltech" />
                <div className="text-4">Curriculum Vitae</div>
              </span>
            </Link>
            <Link to="/Research">
              <span>
                <img src={notes} alt="notes" />
                <div className="text-5">Research</div>
              </span>
            </Link>
            <Link to="/Showcase">
              <span>
                <img src={random_walk} alt="random_walk" />
                <div className="text-6">Showcase</div>
              </span>
            </Link>
          </div>
        </ImageCollection>
      </>
      <Footer />
    </div>
  );
};

const Intro = styled.section`
  padding-top: 5rem;
  max-width: 55rem;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
const ImageCollection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 5rem;
  .collection {
    flex: 50%;
    max-width: 55%;
    padding: 0 3px;
  }

  .collection span {
    position: relative;
  }
  .collection span div {
    color: #ffffff;
    padding: 0 1rem;
    position: absolute;

    font-size: 2rem;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
  .collection span .text-1 {
    top: -100%;
    left: 16px;
  }
  .collection span .text-2 {
    top: -100%;
    left: 16px;
  }
  .collection span .text-3 {
    top: -100%;
    left: 16px;
  }
  .collection span .text-4 {
    top: -100%;
    left: 16px;
  }
  .collection span .text-5 {
    top: -100%;
    left: 16px;
  }
  .collection span .text-6 {
    top: -100%;
    left: 16px;
  }
  .collection img {
    margin-top: 6px;
    vertical-align: middle;
  }
  @media screen and (max-width: 700px) {
    .collection span div {
      font-size: 1rem;
    }
  }
`;
export default Home;
