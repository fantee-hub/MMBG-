import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
/** image */
import profile from "../images/2021-02_bonny_doon.png";
/** image */
/**Footer */
import Footer from "../footer/Footer";
/** Footer */

const About = () => {
  const { pathname } = useLocation();

  if (pathname === "/About") {
    document.title = "About - Griffin Chure, PhD";
  }

  return (
    <AboutSection>
      <div className="about-header">
        <h1>About</h1>
      </div>
      <section className="profile-section">
        <img src={profile} alt="profile-image" />
      </section>
      <div className="about-content">
        <p>
          I’m a postdoctoral scholar in the lab of{" "}
          <span>
            <a href="https://cremerlab.com">Jonas Cremer</a>
            <Line />
          </span>{" "}
          at{" "}
          <span>
            <a href="https://stanford.edu">Stanford University</a>
            <Line />
          </span>{" "}
          in Stanford, CA. I love anything microbial, quantitative, or wrapped
          in tortillas. I firmly believe that the future of biology relies on an
          intuition for the physics that governs it. I believe this is
          especially true for evolutionary biology where insights from
          statistical mechanics will help shed light on the fundamental
          evolutionary processes that sculpt genomes.
        </p>
        <p>
          I am passionate about programming and promote the use of open source
          software for scientific computing. As outlined on my research page, I
          have been using GitHub as a lab notebook where all code, data, and
          visualizations are freely and easily available to the public. I’ve
          turned my work-flow into a{" "}
          <span>
            <a href="https://github.com/gchure/reproducible_research">
              template GitHub repository
            </a>
            <Line />
          </span>{" "}
          so bench scientists can start doing open-source science without the
          organizational overhead. Eventually, I’ll write something up about my
          experience with structuring my research to be open and reproducible
          from project inception.
        </p>
        <p>
          Outside of science, I love taking{" "}
          <span>
            <a href="https://gchure.github.io/photography">photographs</a>
            <Line />
          </span>
          , making programmatically generated art and exploring the wild lands
          of California / Rocky Mountain West. Being married to a screen writer,
          I also watch my fair share of films and television on which I have
          hard-headed opinions.
        </p>
      </div>
      <Footer />
    </AboutSection>
  );
};

const AboutSection = styled.section`
  max-width: 55rem;
  margin: 0 auto;
  padding-top: 5rem;
  .profile-section {
    padding-top: 3rem;
    text-align: center;
  }
  .profile-section img {
    max-width: 25rem;
    max-height: 30rem;
    object-fit: cover;
    border-radius: 0.8rem;
    border: none;
  }
  .about-content {
    padding-top: 3rem;
  }
  .about-content span {
    position: relative;
  }
  .about-content span a {
    text-decoration: none;
    color: #4b4b4b;
    font-weight: 600;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
const Line = styled.div`
  height: 0.1rem;
  background: #4f76ba;
  width: 100%;
  position: absolute;
  bottom: 0%;
  left: 0%;
`;
export default About;
