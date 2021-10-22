import React from "react";
import styled from "styled-components";
import bugs from "../images/bugs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Phd = () => {
  const { pathname } = useLocation();

  if (pathname === "/phd") {
    document.title =
      "The Molecular Biophysics of Evolutionary and Physiological Adaptation";
  }
  return (
    <PhdSection>
      <div className="hero-section">
        <div className="hero-content">
          <div className="content-1">
            <h2>
              The Molecular Biophysics of Evolutionary and Physiological
              Adaptation
            </h2>
            <p>Griffin Chure | Ph.D. Thesis</p>
          </div>
          <div className="content-2">
            <h4>Summary</h4>
            <p>
              The ability to adapt is central to the definition of 'Life'.
              Adaptation can be found across the biological scales, governing
              the nanosecond-scale conformational switching of proteins to
              ecological dynamics. This website presents the text of my Ph.D.
              thesis in which I dissected adaptive processes at the molecular
              and organismal level. All research, unless otherwise stated, was
              performed at the California Institute of Technology under the
              guidance of Rob Phillips.
            </p>
          </div>
        </div>
      </div>
      <CardSection>
        <CardContainer>
          <a href="https://gchure.github.io/phd//acknowledgements">
            <Cards className="row-1 ">
              <div className="subheading">
                <h3>Acknowledgements</h3>
                <p>On the shoulders of giants </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//abstract">
            <Cards className="row-1">
              <div className="subheading">
                <h3>Abstract</h3>
                <p>The scope of adaptation in transcriptional regulation </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_01">
            <Cards className="row-1">
              <div className="subheading">
                <h3>Chapter I: Introduction</h3>
                <p>The ubuquity of adaptive behaviour in biological matter </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_02">
            <Cards>
              <div className="subheading">
                <h3>Chapter II: Molecular Adaptation</h3>
                <p>Signal processing within allosteric molecules</p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_03">
            <Cards>
              <div className="subheading">
                <h3>Chapter III: Evolutionary Adaptation</h3>
                <p>
                  Using the simple repression state variable to predict mutant
                  phenotypes{" "}
                </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_04">
            <Cards>
              <div className="subheading">
                <h3>Chapter IV: Physiological Adaptation</h3>
                <p>
                  On the physiological adaptability of a simple genetic circuit{" "}
                </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_05">
            <Cards>
              <div className="subheading">
                <h3>Chapter V: Survival</h3>
                <p>
                  Adaptation where it counts: surviving environmental insults.{" "}
                </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_06">
            <Cards>
              <div className="subheading">
                <h3>Chapter VI: Supplement to Chapter II</h3>
                <p>
                  Supplemental information and extended methods for chapter II{" "}
                </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_07">
            <Cards>
              <div className="subheading">
                <h3>Chapter VII: Supplement to Chapter III</h3>
                <p>
                  Supplemental information and extended methods for chapter III
                </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_08">
            <Cards>
              <div className="subheading">
                <h3>Chapter VIII: Supplement to Chapter IV</h3>
                <p>
                  Supplemental information and extended methods for chapter IV{" "}
                </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
          <a href="https://gchure.github.io/phd//chapter_09">
            <Cards>
              <div className="subheading">
                <h3>Chapter IX: Supplement to Chapter V</h3>
                <p>
                  Supplemental information and extended methods for chapter V{" "}
                </p>
              </div>
              <div className="footer">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Cards>
          </a>
        </CardContainer>
      </CardSection>
      <FooterSection>
        <div className="footer-content">
          <div className="email-part">
            <a href="https://gchure.github.io/phd//">
              Griffin D. Chure | PhD Thesis
            </a>
            <p>Copyright © 2020. - Griffin D. Chure</p>
            <p>All rights reserved.</p>
          </div>
          <div className="social-links">
            <div>
              <a href="http://twitter.com/gdchure">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </FooterSection>
    </PhdSection>
  );
};

const PhdSection = styled.div`
  a {
    text-decoration: none;
    color: #4b4b4b;
  }
  .hero-section {
    background: url(${bugs});
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  }
  .hero-content {
    background: rgba(0, 0, 0, 0.6);

    display: flex;
    min-height: 50vh;
    margin: 0 5rem;
    padding: 1.5rem 2rem;
    border: 1px solid #ffffff;
    align-items: center;
    .content-2 {
      max-width: 40rem;
      border-left: 1px solid #ffffff;
      padding-left: 0.8rem;
    }
    h2,
    h4,
    p {
      color: #ffffff;
    }
  }
  @media screen and (max-width: 800px) {
    .hero-section {
      min-height: 40vh;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      margin: 0;
      min-height: 0;
      .content-2 {
        display: none;
      }
    }
  }
`;
const CardSection = styled.div`
  background: #cccccc;
  width: 100%;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80rem;
  margin: 0 auto;
  flex-wrap: wrap;
  .row-1 {
    height: 15rem;
  }
`;
const Cards = styled.div`
  width: 20rem;
  height: 20rem;
  padding-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: -2rem;
  margin-bottom: 3rem;
  background: #ffffff;

  border: 1px solid #ccc;
  display: grid;
  grid-template-rows: 1fr auto;
  .subheading {
    padding: 1rem 1.5rem;
  }
  .footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid #ccc;
  }
  @media screen and (max-width: 800px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0.9rem;
    margin-right: 0.9rem;
    height: 17rem;
  }
  @media screen and (max-width: 336px) {
    width: 18rem;
  }
`;
const FooterSection = styled.div`
  width: 90%;
  a {
    text-decoration: none;
    font-weight: 600;
    color: #4b4b4b;
  }
  p {
    color: #b6b6b6;
  }
  max-width: 55rem;
  margin: 0 auto;
  padding: 2rem 0;
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    .footer-content {
      display: flex;
      flex-direction: column;
    }
    .social-links {
      justify-content: start;
    }
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default Phd;
