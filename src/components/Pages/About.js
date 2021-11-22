import React from "react";
import styled from "styled-components";
import beef from "../images/alayonimi_bifarin.jpeg";
import Nav from "../Nav/Nav";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <>
      <Nav />
      <AboutSection>
        <div className="about-header">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src={beef} alt="beefweb" />
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              accusamus aspernatur tenetur, numquam rerum illo aliquam fugit
              mollitia sed, doloremque accusantium ab magni cupiditate vel
              fugiat in sunt facere. Perspiciatis voluptates enim nostrum soluta
              neque, dolorum perferendis sapiente. Quae ducimus illum blanditiis
              molestiae pariatur voluptates repellendus veritatis reiciendis,
              nemo earum natus sunt nostrum temporibus quisquam quod. Et placeat
              autem, distinctio minus laboriosam in facere vel nemo illo
              reprehenderit provident sed tempora officia unde, debitis error
              tenetur explicabo itaque amet cumque.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos nulla tenetur quo, iure, itaque error est nobis
              corporis, numquam quasi laboriosam expedita amet non praesentium?
            </p>
          </div>
        </div>
      </AboutSection>
      <Footer />
    </>
  );
};
const AboutSection = styled.section`
  padding: 10rem 0;
  .about-header {
    h2 {
      padding: 3rem;
      color: #313131;
      text-align: center;
    }
  }
  .about-content {
    .about-img {
      text-align: center;
      img {
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
        object-fit: contain;
      }
    }
    .about-text {
      max-width: 35rem;
      margin: 2rem auto;
      text-align: center;
      p {
        color: #2b2b2b;
        line-height: 1.6;
      }
    }
  }
`;
export default About;
