import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <>
      <FooterContent>
        <div className="footer-container">
          <div className="footer-content">
            <div className="content-header">
              <h4>Contact</h4>
            </div>
            <div className="content-items">
              <li>
                <a href="https://mbbifaringrant@gmail.com">
                  mbbifaringrant@gmail.com
                </a>
              </li>
              <li>&copy; {getYear} The Mary Babatola Bifarin Grant</li>
              <li>All rights reserved.</li>
            </div>
          </div>
          <div className="footer-content">
            <div className="content-header">
              <h4>Navigate</h4>
            </div>
            <div className="content-items">
              <li>
                <Link to="/Faq">Faq</Link>
              </li>
              <li>
                <Link to="/Team">Team</Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSetl5HMmtOSeJCcnEwPTdlicIQuT1pfBL-2Xb6M2c3bKnv_XA/viewform?usp=sf_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now
                </a>
              </li>
            </div>
          </div>
          <div className="footer-content">
            <div className="content-header">
              <h4>Social</h4>
            </div>
            <div className="content-items">
              <FontAwesomeIcon icon={faTwitter} color="#65666b" />
            </div>
          </div>
        </div>
      </FooterContent>
    </>
  );
};

const FooterContent = styled.section`
  background: #121212;
  padding: 3rem 4rem;

  .footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    padding: 0.7rem;
    .footer-content {
      li {
        list-style-type: none;
        padding: 0.5rem 0;
        font-size: 0.9rem;
        color: #65666b;
        a {
          color: #65666b;
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
    .footer-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .footer-content {
        margin: 0.7rem 0;
      }
    }
  }
`;

export default Footer;
