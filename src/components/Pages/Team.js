import React from "react";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import alayo from "../images/alayonimi_bifarin.jpeg";
import tomiwa from "../images/olatomiwa_bifarin.jpg";
import bukunmi from "../images/Bukunmi_Ajani.jpeg";
import dayo from "../images/oladayo_bifarin.jpeg";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";

const Team = () => {
  const { pathname } = useLocation();

  if (pathname === "/Team") {
    document.title = "Team | The Mary Babatola Bifarin Grant";
  }

  return (
    <>
      <Nav />
      <TeamSection>
        <div className="team-header">
          <h2>Core Team</h2>
        </div>
        <div className="team-container">
          <div className="team-content">
            <div className="img-container">
              <img src={tomiwa} alt="tomiwa" />
            </div>

            <div className="team-txt">
              <h4>Founder/Program Manager</h4>
              <h5>Olatomiwa Bifarin, PhD.</h5>
              <p>Chemistry PostDoc Fellow at Georgia Tech</p>
            </div>
          </div>
          <div className="team-content">
            <div className="img-container">
              <img src={alayo} alt="alayo" />
            </div>

            <div className="team-txt">
              <h4>Program Assistant</h4>
              <h5>Alayonimi Bifarin</h5>
              <p>Demography Student at Obafemi Awolowo University</p>
            </div>
          </div>
        </div>
        <div className="team-header">
          <h2>Volunteer Judges</h2>
        </div>
        <div className="team-container">
          <div className="team-content">
            <div className="img-container">
              <img src={bukunmi} alt="bukunmi" />
            </div>

            <div className="team-txt">
              <h5>Bukunmi Ajani</h5>
              <p>
                Incoming Anthropology Graduate Student at Georgia State
                University
              </p>
            </div>
          </div>
          <div className="team-content">
            <div className="img-container">
              <img src={dayo} alt="dayo" />
            </div>
            <div className="team-txt">
              <h5>Oladayo Bifarin</h5>
              <p>
                PhD Candidate at the University of Bradford (Centre for Applied
                Dementia Studies)
              </p>
            </div>
          </div>
        </div>
      </TeamSection>
      <Footer />
    </>
  );
};

const TeamSection = styled.section`
  background: #f3f3f3;
  padding: 8rem 4rem;
  .team-header {
    padding: 2rem 0;
    h2 {
      color: #313131;
      text-align: center;
    }
  }
  .team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    .team-content {
      .img-container {
        text-align: center;
        img {
          border-radius: 50%;
          width: 20rem;
          height: 20rem;
          object-fit: contain;
        }
      }

      .team-txt {
        padding: 1rem 1rem 1rem 0;
        text-align: center;
        max-width: 25rem;
        margin: 0 auto;
        h4 {
          color: #1f1f1f;
        }
        p,
        h5 {
          color: #2b2b2b;
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 7rem 0rem;
    .team-container {
      .team-content {
        .img-container {
          text-align: center;
          img {
            width: 15rem;
            height: 15rem;
            margin: 1rem 0;
            object-fit: contain;
          }
        }
        .team-txt {
          h4 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
export default Team;
