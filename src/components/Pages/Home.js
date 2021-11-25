import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";

import why from "../images/why.jpeg";
import solve from "../images/solve.jpeg";
import track from "../images/track.jpeg";

const Home = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    document.title = "The Mary Babatola Bifarin Grant";
  }

  return (
    <div>
      <Nav />
      <HeroSection>
        <div className="main-header">
          <div className="hr-sub-header">
            <p>
              MBB microgrant program will give at least N250,000 ($607.05) grant
              to <span>at least</span> two teams / individuals in Nigeria to do
              something impactful.
            </p>
          </div>
          <div className="sub-header">
            <h1>
              The <span> Mary Babatola Bifarin Grant </span> [MBB Grant] (Coming
              Soon)
            </h1>
          </div>
          <div className="btn-apply">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSetl5HMmtOSeJCcnEwPTdlicIQuT1pfBL-2Xb6M2c3bKnv_XA/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
              className="apply"
            >
              Apply Now
            </a>
          </div>
        </div>
      </HeroSection>

      <HeroContent>
        <div className="content-1">
          <div className="content-col">
            <div className="img-container">
              <img src={why} alt="what and why" />
            </div>
          </div>
          <div className="content-col">
            <div className="txt">
              <p>
                MBB grant was started by Olatomiwa Bifarin. The grant is named
                after his grandmother Mary Babatola Bifarin [1927-2010] who was
                a maternity nurse from Imesi-Ile in Osun-State Nigeria. You can
                read more about her{" "}
                <span>
                  {" "}
                  <Link to="/About">here</Link>{" "}
                </span>
                . This personal grantmaking endeavor is an experiment to foster
                innovative thinking amongst young people in Nigeria. To foster
                foresights and responsibility by taking on challenging problems
                in the society.
              </p>
            </div>
          </div>
        </div>
      </HeroContent>

      <SubHeader>
        <div className="header">
          <h2>
            Do something interesting that makes a (potential)
            <br />
            impact in our community.
          </h2>
        </div>
        <div className="header-content">
          <div className="img-container">
            <img src={solve} alt="solve" />
          </div>
          <div className="header-col">
            <p>
              Olatomiwa Bifarin has started the fund up with a donation of
              $1000. As a Post-doc, who still live on a stipend, and doing so
              right in the middle of Atlanta, he wishes he can do better.
            </p>
            <p>
              If you have read his PhD Memoir <span>essay</span> and found it
              useful - and if you are able to - kindly consider donating to the
              fund <span>here.</span>
              If you like to be a sponsor anyway, that's also fine!
            </p>
          </div>
        </div>
      </SubHeader>

      <Goals>
        <div className="goalHeader">
          <h1>Goal</h1>
        </div>
        <div className="goal-txt">
          <p>
            There are two categories of projects/research that i am looking to
            fund. One is open ended, while the other is relatively restrictive.
          </p>
        </div>
      </Goals>

      <Tracks>
        <div className="track-container">
          <div className="track-row">
            <div className="track-header">
              <img src={track} alt="track" />
            </div>
            <div className="track-subHeader">
              <span>01</span>
              <h2>Humanities and Technology Track</h2>
            </div>
            <div className="track-content">
              <span>01</span>
              <h5>
                This track is pretty much open ended so I will give a few
                (broad) examples to get the feel of the taste. Again, these are
                just examples, and it’s by no means exhaustive.
              </h5>
              <ul>
                <li>
                  Innovative idea to help very, very poor and sick people.
                </li>
                <li>
                  Building a mentorship/educational program for displaced
                  schoolgirls in Northern Nigeria.
                </li>
                <li>
                  Interesting and impactful applications of blockchain
                  technologies and you need some money that will assist.
                </li>
                <li>
                  Say you want to write an interesting book or blog but need
                  money to do some difficult research.
                </li>
                <li>
                  Using AI for say, an interesting indigenous language research
                  (like language preservation),
                </li>
                <li>Computational biology projects,</li>
                <li>
                  You want to shoot a unique documentary or film that you think
                  will be impactful, so you need cameras, but you can’t afford
                  it or something of the sort (for example filming/documenting a
                  dying art in your village),
                </li>
                <li>Alternative school projects,</li>
                <li>Applied computer vision project, etc.</li>
              </ul>
            </div>
          </div>
          <div className="track-row">
            <div></div>
            <div className="track-subHeader">
              <span>02</span>
              <h2>Nursing Track</h2>
            </div>
            <div className="track-content">
              <span>02</span>
              <p>
                Since my grandma was a nurse, I would like to keep one track
                that is exclusive for nurses in training, and I will be only
                funding Nursing students or interns affiliated with Obafemi
                Awolowo University Teaching Hospital (OAUTHC) in Ile-Ife
                Nigeria, as this will require a more hands-on approach and we
                have volunteer staff nurses who are willing to help as mentors.
                Example of research/project could be researching maternal
                deaths, say. It could be anything related to nursing.
              </p>
            </div>
          </div>
        </div>
      </Tracks>
      <Footer />
    </div>
  );
};

const HeroSection = styled.section`
  padding: 11rem 4rem 0 4rem;
  background: #121212;
  .main-header {
    max-width: 45rem;
    padding: 2rem 0;
  }
  span {
    color: #ffe066;
  }
  .hr-sub-header p {
    line-height: 2;
  }
  .sub-header {
    padding: 1rem 0;
  }

  .main-header h1 {
    font-size: 3.5rem;
    line-height: 1.4;
  }
  .btn-apply {
    padding-top: 3rem;
    padding-bottom: 3rem;
    max-width: 13rem;
  }
  .btn-apply .apply {
    padding: 1.5rem 3.5rem;
    border: none;
    background: transparent;
    color: #ffe066;
    border: 1px solid #ffe066;
    display: block;
    transition: all 0.3s ease;
    text-decoration: none;
    &:hover {
      background: #ffe066;
      color: #121212;
    }
  }
  @media screen and (max-width: 765px) {
    width: 100%;
    padding: 6rem 2rem 0 2rem;
    .main-header {
      max-width: 100%;
    }
    .main-header h1 {
      font-size: 1.5rem;
    }
    .btn-apply {
      padding: 1rem 0;
    }
  }
`;

const HeroContent = styled.section`
  background: #f3f3f3;
  color: #000000;
  width: 100%;
  padding: 6rem 4rem 0 4rem;
  h2 {
    color: #2b2b2b;
    text-align: center;
  }
  .content-header {
    padding: 2rem 0;
  }

  .content-1 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    .content-col {
      padding: 1rem;
      p {
        line-height: 1.6;
        color: #2b2b2b;
      }
      .txt {
        max-width: 45rem;
        margin: 0 auto;
        a {
          text-decoration: none;
          font-weight: 600;
          color: #2b2b2b;
        }
      }
    }
  }

  @media screen and (max-width: 765px) {
    padding: 3rem 1rem 2rem 1rem;
    .content-1 {
      display: flex;

      flex-direction: column;
      .content-col {
        padding: 0;
      }
    }
  }
`;

const SubHeader = styled.section`
  background: #f3f3f3;
  padding-top: 5rem;
  .header {
    text-align: center;
    max-width: 50rem;
    margin: 0 auto;
    h2 {
      color: #313131;
      font-weight: 500;
    }
  }
  .header-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    padding: 2rem 4rem 0 4rem;

    color: #2b2b2b;
    .header-col {
      max-width: 45rem;

      margin: 0 auto;
    }

    span {
      color: #121212;
      font-weight: 600;
      a {
        color: #121212;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
  @media screen and (max-width: 765px) {
    .header {
      max-width: 100%;
    }
    .header-content {
      padding: 3rem 1rem;
    }
  }
`;
const Goals = styled.section`
  text-align: center;
  background: #f3f3f3;
  padding: 3rem 0;
  .goalHeader {
    h1 {
      color: #313131;
    }
  }
  .goal-txt {
    max-width: 45rem;
    margin: 0 auto;
    p {
      color: #2b2b2b;
    }
  }
  @media screen and (max-width: 765px) {
    padding: 2rem 1rem;
  }
`;

const Tracks = styled.section`
  padding: 3rem 2rem;
  .track-container {
    .track-row {
      .track-header {
        text-align: center;
        img {
          width: 60rem;
          height: 20rem;
          object-fit: contain;
        }
      }
      margin: 1rem 0;
      h2 {
        color: #313131;
        padding: 1rem 0;
      }

      p,
      li {
        line-height: 1.6;
        font-size: 1.1rem;
      }
      h5 {
        font-weight: 600;
      }
      p,
      h5 {
        padding: 1.5rem 0;
      }
      ul {
        padding: 1rem;
      }

      span {
        color: #818181;
      }
    }
    .track-content {
      padding: 1.5rem;
      background: #121212;
      color: #f3f3f3;
    }
  }
  @media screen and (max-width: 765px) {
    padding: 0.7rem 1rem;
    .track-container {
      .track-row {
        display: flex;
        flex-direction: column;
        .track-header {
          img {
            width: 100%;
          }
        }
      }
      .track-content {
        padding: 1rem;
      }
    }
  }
`;

export default Home;
