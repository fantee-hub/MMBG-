import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faOrcid,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <FooterSection>
      <div className="footer-content">
        <div className="email-part">
          <a href="http://mailto:gchure@stanford.edu/">gchure@stanford.edu</a>
          <p>&copy; {getYear} Griffin Chure, PhD Jekyll Themes</p>
        </div>
        <div className="social-links">
          <div>
            <a href="http://twitter.com/gdchure">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#ffffff" />
            </a>
          </div>
          <div>
            <a href="https://orcid.org/0000-0002-2216-2057">
              <FontAwesomeIcon icon={faOrcid} size="2x" color="#ffffff" />
            </a>
          </div>
          <div>
            <a href="http://github.com/gchure">
              <FontAwesomeIcon icon={faGithub} size="2x" color="#ffffff" />
            </a>
          </div>
        </div>
      </div>
    </FooterSection>
  );
};

const FooterSection = styled.div`
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
  padding: 5rem 0;
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
  .social-links > div {
    height: 50px;
    width: 50px;
    text-align: center;
    padding: 0.5rem 0;
    margin-right: 0.3rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    background: #abb7b7;
    &:hover {
      background: #4f76ba;
    }
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

export default Footer;
