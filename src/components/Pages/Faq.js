import React from "react";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import Footer from "../footer/Footer";

import { useLocation } from "react-router-dom";

const Faq = () => {
  const { pathname } = useLocation();

  if (pathname === "/Faq") {
    document.title = "Faq | The Mary Babatola Bifarin Grant";
  }

  return (
    <>
      <Nav />
      <FaqHero>
        <div className="hero">
          <div className="hero-header">
            <h1>FAQ</h1>
          </div>
          <div className="hr-sub-header">
            <p>
              MBB microgrant program will give at least N250,000 ($607.05) grant
              to <span>at least</span> two teams / individuals to do something
              impactful - that contributes positively to their communities -in
              Nigeria.
            </p>
          </div>
        </div>
      </FaqHero>

      <Questions>
        <div className="faqs">
          <div className="question-ans">
            <div className="question">
              <h4>Are there required academic qualifications?</h4>
            </div>
            <div className="answer">
              <p>
                For nurses, see details in the nursing track. For
                Humanities/Technolgy track. No academic qualifications, but if
                you have relevant academic qualification be sure to state that
                in your application.
              </p>
            </div>
          </div>
          <div className="question-ans">
            <div className="question">
              <h4>Will the winning projects be made public?</h4>
            </div>
            <div className="answer">
              <p>
                Yes. For transparency purposes and to magnify the positive
                impact/idea.
              </p>
            </div>
          </div>
          <div className="question-ans">
            <div className="question">
              <h4>
                What does your ideal winning team/individual/project look like
                (esp. for Humanities/STEM Track)?
              </h4>
            </div>
            <div className="answer">
              <p>
                Diverse. Mulitidisciplinary. For example (just and example) a
                computer science student teaming up with a sociology student to
                solve a problem in the community by utilizing their expertise.
                You could also be a lone wolf. Fine with me. Impact is the most
                important factor. And finally, the further away from mainstream
                thinking, the better.
              </p>
            </div>
          </div>
          <div className="question-ans">
            <div className="question">
              <h4>
                My project is a little complicated, and i will need more that
                N250,000?
              </h4>
            </div>
            <div className="answer">
              <p>
                Submit your application anyways. If it's terribly good. We might
                be able to find a way around that. Otherwise, preference goes to
                the N250k cap.
              </p>
            </div>
          </div>
          <div className="question-ans">
            <div className="question">
              <h4>What is the age limit?</h4>
            </div>
            <div className="answer">
              <p>Applicant(s) must be 35 years old or younger.</p>
            </div>
          </div>
          <div className="question-ans">
            <div className="question">
              <h4>How will i get the money?</h4>
            </div>
            <div className="answer">
              <p>
                Ideally in tow or more chunks (directly in your bank accounts or
                viaPaypal), you will nedd to give project update to initiate
                each round of collection
              </p>
            </div>
          </div>
          <div className="question-ans">
            <div className="question">
              <h4>I have additional questions, how do i contact you?</h4>
            </div>
            <div className="answer">
              <p>
                Only on <span>mbbifaringrant@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="question-ans">
            <div className="question">
              <h4>How can i get updates about this project?</h4>
            </div>
            <div className="answer">
              <p>
                I write a newsletter at{" "}
                <a href="https://www.bifarinthefifth.substack.com">
                  bifarinthefifth.substack.com
                </a>{" "}
                and i will share updates there.
              </p>
            </div>
          </div>
          <div className="question-ans">
            <div className="question">
              <h4>What is the time frame for the project completion?</h4>
            </div>
            <div className="answer">
              <p>
                None. However, preference will be given to shorter projects
                (without sacrificing potentially impactful ideas)
              </p>
            </div>
          </div>
        </div>
      </Questions>
      <Footer />
    </>
  );
};

const FaqHero = styled.section`
  background: #121212;

  padding: 11rem 4rem 4rem 4rem;
  .hero {
    max-width: 45rem;
  }
  .hr-sub-header {
    padding-top: 3rem;
    p {
      line-height: 1.6;
    }
    span {
      color: #aaa8a8;
    }
  }
  @media screen and (max-width: 765px) {
    padding: 9rem 1rem 4rem 1rem;
  }
`;

const Questions = styled.section`
  background: #f3f3f3;
  padding: 5rem 4rem 0 4rem;
  color: #121212;
  .faqs {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    h4 {
      color: #313131;
    }
    .question-ans {
      padding: 1.5rem 1.5rem 1.5rem 0;
      border-bottom: 2px solid #000000;
      margin: 1rem 0 1.5rem 1rem;
      .question {
        h4 {
          padding-bottom: 1rem;
        }
      }
      .answer {
        p {
          line-height: 1.6;
          color: #2b2b2b;
        }
        a {
          text-decoration: none;
          color: #000000;
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 4rem 0;
    .faqs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      margin: 0 1rem;
      .question-ans {
        margin: 1rem 0;
        padding: 1rem 0;
      }
    }
  }
`;
export default Faq;
