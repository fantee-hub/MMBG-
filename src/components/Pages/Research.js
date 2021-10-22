import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";

/** Images */
import growthLimit from "../images/growth_limit_model.png";
import urbanRural from "../images/urban_rural_estimate.png";
import foodChange from "../images/schematized_foldchange.png";
import mutation from "../images/muts.png";
/** Images */

const Research = () => {
  const { pathname } = useLocation();

  if (pathname === "/Research") {
    document.title = "Research - Griffin Chure, PhD";
  }

  return (
    <>
      <Nav />
      <ResearchSection>
        <div className="research-header">
          <h1>Research</h1>
          <p>
            Below is a short-ish list of my past, current, and future research
            projects. Where available, links have been provided to the
            publisher, paper website, and GitHub repository. If you cannot
            access any of the papers,{" "}
            <a href="http://mailto:gchure@stanford.edu/">let me know.</a>
          </p>
        </div>
        <div className="research-content">
          <div className="postdoctoral main-header">
            <h1>Postdoctoral Research</h1>
            <h2 className="sub-header">
              Leveraging proteomics to identify limiting processes for bacterial
              growth
            </h2>
            <a href="https://www.cell.com/cell-systems/fulltext/S2405-4712(21)00209-X?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS240547122100209X%3Fshowall%3Dtrue">
              <span className="button">Publication in Cell Systems</span>
            </a>
            <a href="https://www.rpgroup.caltech.edu/growth_limits">
              <span className="button">Website</span>
            </a>
            <a href="https://www.github.com/rpgroup-pboc/growth_limits">
              <span className="button">GitHub Repository</span>
            </a>
            <div className="postdoctoral-content">
              <p>
                Recent years have seen an experimental deluge interrogating the
                relationship between bacterial growth rate, cell size, and
                protein content, quantifying the abundance of proteins across
                growth conditions with unprecedented resolution. However, we
                still lack a rigorous understanding of what sets the scale of
                these 18 quantities and when protein abundances should (or
                should not) depend on growth rate. In this forthcoming work, we
                seek to quantitatively understand this relationship across a
                collection of Escherichia coli proteomic data sets covering ≈
                4000 proteins and 36 growth rates. We estimate the basic
                requirements for steady-state growth by considering key
                processes in nutrient transport, energy generation, cell
                envelope biogenesis, and the central dogma. From these
                estimates, ribosome biogenesis emerges as a primary determinant
                of growth rate. We expand on this assessment by exploring a
                model of proteomic regulation as a function of the nutrient
                supply, revealing a mechanism that ties cell size and growth
                rate to ribosomal content. The figure below illustrates this
                mechanism where the amino acid accumulation rate (difference
                between the supply and consumption) can be related to the total
                ribosome copy number per cell. The plot on the right-hand side
                shows how the cellular growth rate scales with changing ribosome
                copy number and amino acid supply rate.
              </p>
              <div className="img-container">
                <img src={growthLimit} alt="growthLimit" />
              </div>
            </div>
          </div>
          <div className="human-impact main-header">
            <h1>Human Impacts by the Numbers</h1>
            <p>
              Manuscript under review.{" "}
              <a href="https://arxiv.org/abs/2101.09620">
                Preprint available on the arXiv
              </a>
            </p>
            <p>
              The greatest experiment of the last 10,000 years is the presence
              and action of modern human beings on planet Earth. At this point,
              the con- sequences of this experiment are being felt on many
              fronts. Yet, many people still hold the view that because the
              world is so “huge”, humans cannot really make a substantial
              impact. In this ongoing research we present a collection of what
              we have come to view as essential numbers that summarize the broad
              reach of human action across the planet, presenting a view of the
              impact of human presence on Earth. These numbers include recent
              estimates/measurements of the volume of meltwater released from
              ice-sheets on an annual basis, the year change in ocean acidity
              from the absorption of CO2 , the background plutonium isotope
              reactivity found in soils stemming from nuclear weapons testing in
              the 1960’s, to the number of livestock on the planet to give a few
              of many examples. In collecting and scrutinizing these data, we
              are also establishing the{" "}
              <a href="https://anthroponumbers.org/">
                ’Human Impacts Database’
              </a>
              , a internet database similar in spirit to the{" "}
              <a href="https://bionumbers.hms.harvard.edu/">BioNumbers</a>{" "}
              website that we hope will be used by scientists and the general
              public alike. The figure below shows how one can arrive at a
              reasonable order-of-magnitude estimate for the amount of land
              appropriated by humans for urban centers. Here, we use ‘ƒ’
              tongue-in-cheek to mathematically denote ‘a few’.
            </p>
            <div className="img-container">
              <img src={urbanRural} alt="urban-rural" />
            </div>
          </div>
          <div className="graduate-research main-header">
            <h1>Graduate Research</h1>
            <h2 className="sub-header">
              Allosteric control in transcriptional regulation
            </h2>
            <a href="https://www.sciencedirect.com/science/article/pii/S2405471218300577">
              <span className="button">Publication in Cell Systems</span>
            </a>
            <a href="https://www.rpgroup.caltech.edu/mwc_induction">
              <span className="button">Website</span>
            </a>
            <a href="https://www.github.com/rpgroup-pboc/mwc_induction">
              <span className="button">GitHub Repository</span>
            </a>
            <div className="grad-research-content">
              <p>
                Allosteric regulation is found across all domains of life, yet
                we still lack simple, predictive theories that directly link the
                experimentally tunable parameters of a system to its
                input-output response. Through use of a statistical mechanical
                depiction of the Monod-Wyman-Changeux model of allostery, one
                can derive analytical expressions for the fold-change in gene
                expression of a transcriptional regulatory circuit in which the
                transcription factor is the allosteric regulator. In Razo-Mejia
                and Chure, et al., we put forward such a theory and rigorously
                test it experimentally in the context of the most ubiquitous
                bacterial regulatory architecture - simple repression. The
                result of this extensive theory and experiment dialogue is the
                simple input-output function schematized below which defines the
                fold-change in gene expression.
              </p>
              <div className="img-container">
                <img src={foodChange} alt="food change" />
              </div>
            </div>
          </div>
          <div className="shifts main-header">
            <h1>
              Using shifts in free-energy as a classifier of mutant phenotypes
            </h1>
            <a href="https://www.pnas.org/content/116/37/18275.short">
              <span className="button">Publication in Cell PNAS</span>
            </a>
            <a href="https://www.rpgroup.caltech.edu/mwc_mutants">
              <span className="button">Website</span>
            </a>
            <a href="https://github.com/rpgroup-pboc/mwc_mutants">
              <span className="button">GitHub Repository</span>
            </a>
          </div>
          <div className="shifts-content">
            <p>
              Mutation is a critical mechanism by which evolution explores the
              functional landscape of proteins. Despite our ability to
              experimentally inflict mutations at will, it remains difficult to
              link sequence-level perturbations to systems-level responses. In
              this work, Ij present a framework to link individual mutations in
              a transcriptional repressor to the parameters which govern its
              response through measuring changes in the free energy of the
              system. Our findings are that the energetic effects of the
              mutations can be categorized into several classes which have
              stereotypical curves as a function of the inducer concentration.
              These diagnostic predictions are tested experimentally
              well-characterized LacI repressor of Escherichia coli, probing
              several mutations in the DNA binding and inducer binding domains.
              The change in gene expression in response to a point mutation can
              be captured by modifying a subset of the model parameters which
              describe the respective domain of the wild-type protein. These
              parameters appear to be insulated, with mutations in the DNA
              binding domain altering only the DNA affinity and those in the
              inducer binding domain altering only the allosteric parameters.
              Changing these subsets of parameters tunes the free energy of the
              system in a way that is concordant with theoretical expectations.
              Finally, I show that the induction profiles and resulting free
              energies associated with double mutants can be predicted with
              quantitative accuracy given knowledge of the single mutants,
              providing an avenue for identifying and quantifying epistatic
              interactions. The figure below gives a schematic representation of
              how mutations influence phenotypes by translations in free energy
              space.
            </p>
            <div className="img-container">
              <img src={mutation} alt="mutation" />
            </div>
          </div>
          <div className="continue-research main-header">
            <h1>Continuing Research</h1>
            <h2 className="sub-header">
              Developing Pipelines For Open and Reproducible Research
            </h2>
            <a href="https://www.gchure.github.io/reproducible_research">
              <span className="button">Template Github Repository</span>
            </a>
            <div className="continue-content">
              <p>
                As biological data becomes bigger and bigger and analysis
                routines become more computationally sophisticated, the
                scientific process must be adapted such that research is
                reproducible. I’ve committed myself to using the git version
                control system coupled with the hosting service GitHub as a
                laboratory notebook and data repository. Each project I am
                involved in has its own repository (linked above) and I have
                created Reproducible Research: A Template For Using Git and
                GitHub As A Scientific Research Tool which sets out the bare
                bones of how I structure my projects. If you are interested in
                doing the same, feel free to fork the repository and modify as
                you see fit.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </ResearchSection>
    </>
  );
};

const ResearchSection = styled.section`
  a {
    color: #4b4b4b;
    font-weight: 600;
    text-decoration-color: #4f76ba;
    text-decoration-style: solid;
  }
  padding-top: 5rem;
  max-width: 55rem;
  margin: 0 auto;
  .research-content .main-header {
    padding-top: 3rem;
  }
  .research-content .sub-header {
    padding: 1rem 0;
    font-style: italic;
  }
  .research-content img {
    max-width: 35rem;
    max-height: 35rem;
    margin: 0 auto;
    object-fit: contain;
    padding: 1.5rem 0;
  }
  .img-container {
    text-align: center;
  }
  .research-content span {
    margin-right: 0.5rem;
  }
  .shifts h1 {
    padding: 1rem 0;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    .research-content span {
      margin-top: 0.5rem;
    }
  }
`;
export default Research;
