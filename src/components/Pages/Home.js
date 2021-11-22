import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";

import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";

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
              to <span>at least</span> two teams / individuals to do something
              impactful - that contributes positively to their communities -in
              Nigeria.
            </p>
          </div>
          <div className="sub-header">
            <h1>
              The <span> Mary Babatola Bifarin Grant </span> [MBB] (Coming Soon)
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

      <SubHeader>
        <div className="header">
          <h2>
            Solve a problem or do something interesting that makes a (potential)
            <br />
            impact in our community.
          </h2>
        </div>
        <div className="header-content">
          <div className="header-col">
            <p>
              Olatomiwa Bifarin has started the fund up with a donation of
              $1000. As a Post-doc, who still live on a stipend, and doing so
              right in the middle of Atlanta, he wishes he can do better.
            </p>
            <p>
              If you have read his PHD Memoir <span>essay</span> and found it
              useful - and if you are able to - kindly consider donating to the
              fund <span>here.</span>
              If you like to be a sponsor anyway, that's also fine! If you you
              are a sponsor and you would like to be involved in selecting the
              grantee, please contact me at
              <span>
                {" "}
                <a href="https://mbbifaringrant@gmail.com">
                  mbbifaringrant@gmail.com
                </a>{" "}
              </span>
            </p>
            <p>
              For Applicants,{" "}
              <span>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSetl5HMmtOSeJCcnEwPTdlicIQuT1pfBL-2Xb6M2c3bKnv_XA/viewform?usp=sf_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  apply now.
                </a>
              </span>{" "}
              You can apply as a team or an individual.
            </p>
          </div>
        </div>
      </SubHeader>

      <HeroContent>
        <div className="content-1">
          <div className="content-col">
            <h2>What and why?</h2>
          </div>
          <div className="content-col">
            <div className="txt">
              <p>
                MBB grant was started by Olatomiwa Bifarin. The grant is named
                after his grandmother Mary Babatola Bifarin [1936-2010] who was
                a maternity nurse from Imesi-Ile in Osun-State Nigeria. You can
                read more about her <span>here</span>. This personal grantmaking
                endeavor is an experiment to foster innoative thinking amongst
                young people in Nigeria. To foster foresights and responsibility
                by taking on challenging problems in the society.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="content-2">
          <div className="content-col">
            <p>Why</p>
          </div>
          <div className="content-col">
            <span>01</span>
            <h1>A different path for everyone</h1>
          </div>

          <div className="content-col">
            <div className="content-container">
              <span>01</span>
              <h4>
                “Knowledge that is acquired under compulsion obtains no hold on
                the mind.”
              </h4>
              <span>-Pluto</span>
              <p>
                College can be good for learning about what’s been done before,
                but it can also discourage you from doing something new. Each of
                our fellows charts a unique course; together they have proven
                that young people can succeed by thinking for themselves instead
                of following a traditional track and competing on old career
                tracks.
              </p>
            </div>
          </div>
        </div>
        <div className="content-3">
          <div className="content-col"></div>
          <div className="content-col">
            <span>02</span>
            <h1>Freedom to get stuff done</h1>
          </div>
          <div className="content-col">
            <div className="content-container">
              <span>02</span>
              <h4>
                “My grandmother wanted me to have an education, so she kept me
                out of school ”
              </h4>
              <span>-Margaret Mead</span>
              <p>
                Pursue ideas that matter instead of mandatory tests. Take on big
                risks instead of big debt. How you spend your two years in the
                Fellowship is up to you — we’re here to help, but we won’t get
                in the way.
              </p>
            </div>
          </div>
        </div>
        <div className="content-4">
          <div className="content-col"></div>
          <div className="content-col">
            <span>03</span>
            <h1>Our network is yours</h1>
          </div>
          <div className="content-col">
            <div className="content-container">
              <span>03</span>
              <h4>
                “That major that she majored in don't make no money / But she
                won't drop out, her parents'll look at her funny”
              </h4>
              <span>– Kanye</span>
              <p>
                The hardest thing about being a young entrepreneur is that you
                haven’t met everyone you’ll need to know to make your venture
                succeed. We can help connect you — to investors, partners,
                prospective customers — in Silicon Valley and beyond.
              </p>
            </div>
          </div>
        </div> */}
      </HeroContent>

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

      <Humanities>
        <div className="humanity-container">
          <div className="humanity-header">
            <h2>Humanities and Technology Track</h2>
          </div>
          <div className="humanity-txt">
            <p>
              This track is pretty much open ended so I will give a few (broad)
              examples to get the feel of the taste. Again, these are just
              examples, and it’s by no means exhaustive.
            </p>
          </div>
        </div>
        <div className="humanity-content">
          <div className="content-container">
            <div className="content-txt">
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
          <div className="note">
            <p>You get the idea. Note that the impact is very important.</p>
          </div>
        </div>
      </Humanities>

      <Nursing>
        <div className="nursing-header">
          <h1>Nursing Track</h1>
        </div>
        <div className="nursing-content">
          <div className="nursing-txt">
            <p>
              Since my grandma was a nurse, I would like to keep one track that
              is exclusive for nurses in training, and I will be only funding
              Nursing students or interns affiliated with Obafemi Awolowo
              University Teaching Hospital (OAUTHC) in Ile-Ife Nigeria, as this
              will require a more hands-on approach and we have volunteer staff
              nurses who are willing to help as mentors. Example of
              research/project could be researching maternal deaths, say. It
              could be anything related to nursing.
            </p>
          </div>
        </div>
      </Nursing>

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
    color: #39ff14;
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
    color: #39ff14;
    border: 1px solid #39ff14;
    display: block;
    transition: all 0.3s ease;
    text-decoration: none;
    &:hover {
      background: #39ff14;
      color: #ffffff;
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

  .content-1 {
    .content-col {
      padding: 1rem;
      p {
        line-height: 1.6;
        color: #2b2b2b;
      }
      .txt {
        max-width: 45rem;
        margin: 0 auto;
        text-align: center;
      }
    }
  }
  .content-2,
  .content-3,
  .content-4 {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    .content-col {
      margin: 4rem 0;
      line-height: 1.8;

      span {
        color: #858585;
      }
      .content-col {
        border: 1px solid #000000;
      }
      .content-container {
        background: #121212;
        padding: 1.5rem 2rem;
        color: #e2e2e2;
        h4 {
          color: #ffffff;
          padding-bottom: 1.5rem;
        }
        p {
          padding-top: 1.5rem;
          font-size: 0.8rem;
          line-height: 1.7;
        }
        span {
          color: #696969;
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 2rem 1rem;
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
    padding: 2rem 4rem 0 4rem;

    color: #2b2b2b;
    .header-col {
      max-width: 45rem;
      text-align: center;
      margin: 0 auto;
    }

    span {
      color: #39ff14;
      a {
        color: #39ff14;
        text-decoration: none;
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
    padding: 3rem 1rem;
  }
`;

const Humanities = styled.section`
  background: #f3f3f3;
  padding: 5rem 4rem;

  .humanity-container {
    max-width: 45rem;
    margin: 0 auto;
    text-align: center;
  }
  .humanity-header {
    h2 {
      color: #313131;
    }
  }
  .humanity-txt {
    p {
      color: #2b2b2b;
    }
  }
  .humanity-content {
    .note {
      text-align: center;
      padding: 1rem 0;
      color: #2b2b2b;
    }
    padding: 1.5rem 0;
    .content-container {
      .content-txt {
        color: #2b2b2b;
        max-width: 45rem;
        margin: 0 auto;
        li {
          line-height: 1.6;
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
  }
`;
const Nursing = styled.section`
  background: #f3f3f3;
  padding: 0rem 0rem 2rem 0;
  .nursing-header {
    h1 {
      color: #313131;
      text-align: center;
    }
  }
  .nursing-content {
    padding: 1rem 0;
    .nursing-txt {
      max-width: 45rem;
      margin: 0 auto;
      text-align: center;
      p {
        color: #2b2b2b;
        padding-left: 0.9rem;
        line-height: 1.6;
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 0rem 1rem;
    .nursing-content {
      padding: 1.5rem 0;
    }
  }
`;
export default Home;
