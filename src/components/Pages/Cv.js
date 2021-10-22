import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Cv = () => {
  const { pathname } = useLocation();

  if (pathname === "/CV") {
    document.title = "Curriculum Vitae - Griffin Chure, PhD";
  }

  return (
    <>
      <Nav />
      <CvSection>
        <div className="cv-header">
          <h1>Curriculum Vitae</h1>
        </div>
        <div className="cv-section">
          <a href="https://gchure.github.io/assets/GriffinChure_CV.pdf">
            <div className="button">Download as pdf</div>
          </a>

          <section className="education">
            <h1>Education</h1>
            <p>
              <strong>Ph.D. Biochemistry & Molecular Biophysics</strong>,
              California Institute of Technology, 2020
            </p>
            <ul>
              <li>
                Dissertation Topic: The Molecular Biophysics of Adaptation in
                Transcriptional Regulation
              </li>
              <li>Dissertation Adviser: Prof. Rob Phillips</li>
            </ul>
            <p>B.Sc. Biology & B.Sc. Chemistry — University of Utah, 2013</p>
            <ul>
              <li>
                Thesis Topic: The Biochemical Assembly of the Bacterial
                Flagellar Motor
              </li>
              <li>Thesis Adviser: Prof. David F. Blair</li>
            </ul>
          </section>
          <section className="publications">
            <h1>Publications</h1>
            <p>
              <strong>☭</strong> indicates equal contribution
            </p>
          </section>
          <section className="forthcoming">
            <h1>Forthcoming Publications and Preprints</h1>
            <ol>
              <li>
                <b>Griffin Chure</b>, Rachel A. Banks, Avi I. Flamholz, Nicholas
                S. Sarai, Mason Kamb, Ignacio Lopez-Gomez, Yinon M. Bar-On, Ron
                Milo, and Rob Phillips (2020). "The Anthropocene by the Numbers:
                A Quantitative Snapshot of Humanity's Influence on the Planet".
                Preprint posted on the ArXiv. arXiv: 2101.09620.{" "}
                <a href="http://rpdata.caltech.edu/publications/Chure_et_al_2021_snapshot.pdf">
                  <span className="button">Graphical Snapshot</span>
                </a>
                <a href="https://www.anthroponumbers.org/">
                  <span className="button">The Human Impacts Database</span>
                </a>
              </li>
              <li>
                Griffin Chure, Zofii A. Kaczmarek, and Rob Phillips (2019).
                "Physiological Adaptability and Parametric Versatility in a
                Simple Genetic Circuit." Preprint on bioRxiv. doi:
                10.1101/2019.12.19.878462.{" "}
                <a href="https://rpgroup.caltech.edu/mwc_growth">
                  <span className="button">Website</span>
                </a>
                <a href="https://github.com/rpgroup-pboc/mwc_growth">
                  <span className="button">GitHub Repository</span>
                </a>
              </li>
            </ol>
          </section>
          <section className="peer-review">
            <h1>Peer-reviewed Publications</h1>
            <ol>
              <li>
                Nathan M. Belliveau ☭ , Griffin Chure☭, Christina L. Heuschen,
                Hernan G. Garcia,Jane Kondev, Daniel S. Fisher, Julie A.
                Theriot, and Rob Phillips (2021). "Fundamental Limits on the
                Rate of Bacterial Growth and Their Influence on Proteomic
                Composition" Cell Systems 12. doi: 10.1016/j.cels.2021.06.002{" "}
                <a href="https://doi.org/10.1016/j.cels.2021.06.002">
                  <span className="button">Publisher Website</span>
                </a>
                <a href="https://rpgroup.caltech.edu/growth_limits">
                  <span className="button">Website</span>
                </a>
                <a href="https://github.com/rpgroup-pboc/growth_limits">
                  <span className="button">GitHub Repository</span>
                </a>
              </li>
              <li>
                Manuel Razo-Mejia, Sarah Marzen, Griffin Chure, Muir Morrison,
                Rachel Taubman, and Rob Phillips. (2020). "First-principles
                prediction of the information processing capacity of a simple
                genetic circuit". Physical Review E. 102
                DOI:10.1103/PhysRevE.102.022404(https://doi.org/10.1103/PhysRevE.102.022404).{" "}
                <a href="https://doi.org/10.1103/PhysRevE.102.022404">
                  <span className="button">Open Access PDF</span>
                </a>
                <a href="https://github.com/rpgroup-pboc/chann_cap">
                  <span className="button">GitHub Repository</span>
                </a>
                <a href="https://rpgroup.caltech.edu/chann_cap">
                  <span className="button">Website</span>
                </a>
              </li>
              <li>
                Kathrin S. Laxhuber, Muir Morrison, Griffin Chure, Nathan M.
                Belliveau, Charlotte Strandkvist, Kyle L. Naughton, and Rob
                Phillips (2020). "Theoretical investigation of a genetic switch
                for metabolic adaptation". PLoS ONE 15 (2020).
                DOI:10.1371/journal.pone.0226453.{" "}
                <a href="https://journals.plos.org/plosone/article/comments?id=10.1371/journal.pone.0226453">
                  <span className="button">Open Access PDF</span>
                </a>
              </li>
              <li>
                Soichi Hirokawa, Griffin Chure, Nathan M. Belliveau, Geoffrey A.
                Lovely, Michael Anaya, David G. Schatz, David Baltimore, and Rob
                Phillips (2020). Sequence-Dependent Dynamics of Endogenous and
                Synthetic RSSs in V(D)J Recombination, Nucleic Acids Research
                48(12). DOI: 10.1093/nar/gkaa418.{" "}
                <a href="https://academic.oup.com/nar/article/48/12/6726/5843817">
                  <span className="button">Open Access PDF</span>
                </a>
                <a href="https://github.com/rpgroup-pboc/vdj_recombination">
                  <span className="button">GitHub Repository</span>
                </a>
                <a href="https://rpgroup.caltech.edu/vdj_recombination">
                  <span className="button">Website</span>
                </a>
              </li>
              <li>
                Griffin Chure, Manuel Razo-Mejia, Nathan M. Belliveau, Tal
                Einav, Zofii A. Kaczmarek, Stephanie L. Barnes, Mitchell Lewis,
                and Rob Phillips (2019). Predictive Shifts In Free Energy Couple
                Mutations To Their Phenotypic Consequences. *PNAS* 116. DOI:
                10.1073/pnas.1907869116.{" "}
                <a href="https://www.pnas.org/content/116/37/18275.short">
                  <span className="button">Open Access PDF</span>
                </a>
                <a href="https://github.com/rpgroup-pboc/mwc_mutants">
                  <span className="button">GitHub Repository</span>
                </a>
                <a href="https://rpgroup.caltech.edu/mwc_mutants">
                  <span className="button">Website</span>
                </a>
              </li>
              <li>
                Rob Phillips, Nathan M. Belliveau, Griffin Chure, Hernan G.
                Garcia, Manuel Razo-Mejia, and Clarissa Scholes (2019). Figure 1
                Theory Meets Figure 2 Experiments in the Study of Gene
                Expression. Annual Reviews of Biophysics 48. DOI:
                10.1146/annurev-biophys-052118-115525.{" "}
                <a href="https://www.annualreviews.org/doi/abs/10.1146/annurev-biophys-052118-115525">
                  <span className="button">PDF From Publisher</span>
                </a>
              </li>
              <li>
                Griffin Chure ☭, Heun Jin Lee ☭, Akiko Rasmussen, and Rob
                Phillips (2018). Connecting the Dots Between Mechanosensitive
                Channel Abundance, Osmotic Shock, and Survival At Single-Cell
                Resolution, Journal of Bacteriology 200. DOI:
                10.1128/JB.00460-18.{" "}
                <a href="https://jb.asm.org/content/200/23/e00460-18/article-info">
                  <span className="button">Open Access PDF</span>
                </a>
                <a href="https://github.com/rpgroup-pboc/mscl_survival">
                  <span className="button">GitHub Repository</span>
                </a>
                <a href="https://rpgroup.caltech.edu/mscl_survival">
                  <span className="button">Website</span>
                </a>
              </li>
              <li>
                Manuel Razo-Mejia ☭, Stephanie L. Barnes ☭, Nathan M. Belliveau
                ☭, Griffin Chure ☭, Tal Einav ☭, Mitchell Lewis, and Rob
                Phillips (2018). Tuning Transcriptional Regulation Through
                Signaling: A Predictive Theory of Allosteric Induction, Cell
                Systems 6. DOI: 10.1016/j.cels.2018.02.004.{" "}
                <a href="https://www.sciencedirect.com/journal/cell-systems/vol/6/issue/4">
                  <span className="button">Open Access PDF</span>
                </a>
                <a href="https://github.com/rpgroup-pboc/mwc_induction">
                  <span className="button">GitHub Repository</span>
                </a>
                <a href="https://rpgroup.caltech.edu/mwc_induction">
                  <span className="button">Website</span>
                </a>
              </li>
            </ol>
          </section>
          <section className="doctoral">
            <h1>Doctoral Thesis</h1>
            <ol>
              <li>
                Griffin Chure (2020). The Molecular Biophysics of Evolutionary
                and Physiological Adaptation. California Institute of
                Technology. DOI:10.7907/q8h6-xr92.{" "}
                <a href="https://resolver.caltech.edu/CaltechTHESIS:06022020-102020436">
                  <span className="button">Open Access PDF</span>
                </a>
                <a href="https://github.com/gchure/phd">
                  <span className="button">GitHub Repository</span>
                </a>
                <Link to="/phd">
                  <span className="button">Website Version</span>
                </Link>
              </li>
            </ol>
          </section>
        </div>
        <Footer />
      </CvSection>
    </>
  );
};

const CvSection = styled.section`
  max-width: 55rem;
  margin: 0 auto;
  padding-top: 5rem;
  .cv-header {
    padding-bottom: 1rem;
  }
  .education {
    padding: 1rem 0;
  }
  .forthcoming,
  .peer-review,
  .doctoral {
    padding: 1.5rem 0;
  }

  .forthcoming span {
    font-size: 0.9rem;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  .peer-review span {
    font-size: 0.9rem;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  .doctoral span {
    font-size: 0.9rem;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default Cv;
