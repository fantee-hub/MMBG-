import React from "react";
import styled from "styled-components";
import bug from "../images/diffusion_bug.png";
import simulation from "../images/constitutive_promoter.png";
import coin from "../images/coin_flip.png";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";

const Showcase = () => {
  const { pathname } = useLocation();

  if (pathname === "/Showcase") {
    document.title = "Showcase - Griffin Chure, PhD";
  }

  return (
    <>
      <Nav />
      <ShowcaseSection>
        <h1>Showcase</h1>
        <p>
          In addition to photography, I focus my artistic streak on making
          high-quality illustrations for talks, papers, and presentations, some
          of which are shown below. I also think that the future of publishing
          will not include PDF file formats. Therefore, I enjoy making
          interactive figures and pedagogical tools. This page shows a bunch of
          those examples with some descriptions. All interactive figures were
          built using the Bokeh plotting library in Python. The script used to
          generate it can be downloaded from the link below each figure. This
          page will look pretty weird on a phone or tablet screen. Things are
          much easier to interact with on a computer.
        </p>
        <div className="random-walk">
          <h3 className="sub-heading">A two-dimensional random walk</h3>
          <div className="img-container">
            <img src={bug} alt="bug" />
          </div>
          <p>
            Random walk processes can be used to explain an enormous variety of
            physical phenomena and is the basis for one of my favorite
            computational techniques, Markov chain Monte Carlo. The interactive
            tool below allows you to create a two dimensional random walk of 10
            5 steps. The left plot will show the entire random walk while the
            right plot will show the current position and the previous 5000
            steps. Adjust the slider to move the particle along its path.
          </p>
        </div>
        <div className="simulation">
          <h3 className="sub-heading">
            Gillespie simulation of a constitutive promoter
          </h3>
          <div className="img-container">
            <img src={simulation} alt="simulation" />
            <p>
              The Gillespie algorithm is an incredibly powerful computational
              technique to simulate stochastic processes and numerically compute
              distributions of otherwise hard-to-solve differential equations.
              The tool below lets you perform a Gillespie simulation of a
              constitutively expressing promoter (i.e. not regulated) at the
              level of mRNAs. While the ODE is trivial to solve (equation in the
              box above), it’s illustrative to run the simulation to see how it
              can be reproduced numerically. In the interactive, thin purple
              lines correspond to the simulations whereas the orange line
              presents the analytical solution given the input parameters.
            </p>
          </div>
        </div>
        <div className="coin">
          <h3 className="sub-heading">The Bayesian coin flip</h3>
          <div className="img-container">
            <img src={coin} alt="coin" />
            <p>
              This interactive illustrates how a posterior probability
              distribution over the bias of a coin is influenced by the number
              of flips and the parameters of the prior distribution. In this
              example, the likelihood is a Binomial distribution of the form f (
              n | N , p ) = N ! n ! ( N − n ) ! p n ( 1 − p ) N − n , where N is
              the number of flips total and n is the number of heads. The
              conjugate prior of the Binomial likelihood is a Beta distribution
              parameterized by α and β , f ( p | α , β ) = p α − 1 ( 1 − p ) β −
              1 B ( α , β ) , where B ( α , β ) is a normalization factor
              defined as B ( α , β ) = Γ ( α ) Γ ( β ) Γ ( α + β ) ,
            </p>
          </div>
        </div>
        <Footer />
      </ShowcaseSection>
    </>
  );
};

const ShowcaseSection = styled.section`
  padding-top: 5rem;
  max-width: 55rem;
  margin: 0 auto;
  .img-container img {
    max-width: 35rem;
    max-height: 35rem;
    object-fit: contain;
  }
  .img-container {
    text-align: center;
  }
  .img-container p {
    padding-top: 1rem;
  }
  .sub-heading {
    font-style: italic;
    padding: 1.5rem 0;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
export default Showcase;
