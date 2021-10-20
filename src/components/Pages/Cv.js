import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";

const Cv = () => {
  const { pathname } = useLocation();

  if (pathname === "/CV") {
    document.title = "Curriculum Vitae - Griffin Chure, PhD";
  }

  return (
    <CvSection>
      <div className="cv-header">
        <h1>Curriculum Vitae</h1>
      </div>
      <div className="cv-section">
        <div className="button">Download as pdf</div>
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
              Thesis Topic: The Biochemical Assembly of the Bacterial Flagellar
              Motor
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
              Milo, and Rob Phillips (2020). "The Anthropocene by the Numbers: A
              Quantitative Snapshot of Humanity's Influence on the Planet".
              Preprint posted on the ArXiv. arXiv: 2101.09620.{" "}
              <span className="button">Graphical Snapshot</span>
              <span className="button">The Human Impacts Database</span>
            </li>
            <li>
              Griffin Chure, Zofii A. Kaczmarek, and Rob Phillips (2019).
              "Physiological Adaptability and Parametric Versatility in a Simple
              Genetic Circuit." Preprint on bioRxiv. doi:
              10.1101/2019.12.19.878462. <span className="button">Website</span>
              <span className="button">GitHub Repository</span>
            </li>
          </ol>
        </section>
        <section className="peer-review">
          <h1>Peer-reviewed Publications</h1>
          <ol>
            <li>
              Nathan M. Belliveau ☭ , Griffin Chure☭, Christina L. Heuschen,
              Hernan G. Garcia,Jane Kondev, Daniel S. Fisher, Julie A. Theriot,
              and Rob Phillips (2021). "Fundamental Limits on the Rate of
              Bacterial Growth and Their Influence on Proteomic Composition"
              Cell Systems 12. doi: 10.1016/j.cels.2021.06.002{" "}
              <span className="button">Publisher Website</span>
              <span className="button">Website</span>
              <span className="button">GitHub Repository</span>
            </li>
            <li>
              Manuel Razo-Mejia, Sarah Marzen, Griffin Chure, Muir Morrison,
              Rachel Taubman, and Rob Phillips. (2020). "First-principles
              prediction of the information processing capacity of a simple
              genetic circuit". Physical Review E. 102
              DOI:10.1103/PhysRevE.102.022404(https://doi.org/10.1103/PhysRevE.102.022404).{" "}
              <span className="button">Open Access PDF</span>
              <span className="button">GitHub Repository</span>
              <span className="button">Website</span>
            </li>
            <li>
              Kathrin S. Laxhuber, Muir Morrison, Griffin Chure, Nathan M.
              Belliveau, Charlotte Strandkvist, Kyle L. Naughton, and Rob
              Phillips (2020). "Theoretical investigation of a genetic switch
              for metabolic adaptation". PLoS ONE 15 (2020).
              DOI:10.1371/journal.pone.0226453.{" "}
              <span className="button">Open Access PDF</span>
            </li>
            <li>
              Soichi Hirokawa, Griffin Chure, Nathan M. Belliveau, Geoffrey A.
              Lovely, Michael Anaya, David G. Schatz, David Baltimore, and Rob
              Phillips (2020). Sequence-Dependent Dynamics of Endogenous and
              Synthetic RSSs in V(D)J Recombination, Nucleic Acids Research
              48(12). DOI: 10.1093/nar/gkaa418.{" "}
              <span className="button">Open Access PDF</span>
              <span className="button">GitHub Repository</span>
              <span className="button">Website</span>
            </li>
            <li>
              Griffin Chure, Manuel Razo-Mejia, Nathan M. Belliveau, Tal Einav,
              Zofii A. Kaczmarek, Stephanie L. Barnes, Mitchell Lewis, and Rob
              Phillips (2019). Predictive Shifts In Free Energy Couple Mutations
              To Their Phenotypic Consequences. *PNAS* 116. DOI:
              10.1073/pnas.1907869116.{" "}
              <span className="button">Open Access PDF</span>
              <span className="button">GitHub Repository</span>
              <span className="button">Website</span>
            </li>
            <li>
              Rob Phillips, Nathan M. Belliveau, Griffin Chure, Hernan G.
              Garcia, Manuel Razo-Mejia, and Clarissa Scholes (2019). Figure 1
              Theory Meets Figure 2 Experiments in the Study of Gene Expression.
              Annual Reviews of Biophysics 48. DOI:
              10.1146/annurev-biophys-052118-115525.{" "}
              <span className="button">PDF From Publisher</span>
            </li>
            <li>
              Griffin Chure ☭, Heun Jin Lee ☭, Akiko Rasmussen, and Rob Phillips
              (2018). Connecting the Dots Between Mechanosensitive Channel
              Abundance, Osmotic Shock, and Survival At Single-Cell Resolution,
              Journal of Bacteriology 200. DOI: 10.1128/JB.00460-18.{" "}
              <span className="button">Open Access PDF</span>
              <span className="button">GitHub Repository</span>
              <span className="button">Website</span>
            </li>
            <li>
              Manuel Razo-Mejia ☭, Stephanie L. Barnes ☭, Nathan M. Belliveau ☭,
              Griffin Chure ☭, Tal Einav ☭, Mitchell Lewis, and Rob Phillips
              (2018). Tuning Transcriptional Regulation Through Signaling: A
              Predictive Theory of Allosteric Induction, Cell Systems 6. DOI:
              10.1016/j.cels.2018.02.004.{" "}
              <span className="button">Open Access PDF</span>
              <span className="button">GitHub Repository</span>
              <span className="button">Website</span>
            </li>
          </ol>
        </section>
        <section className="doctoral">
          <h1>Doctoral Thesis</h1>
          <ol>
            <li>
              Griffin Chure (2020). The Molecular Biophysics of Evolutionary and
              Physiological Adaptation. California Institute of Technology.
              DOI:10.7907/q8h6-xr92.{" "}
              <span className="button">Open Access PDF</span>
              <span className="button">GitHub Repository</span>
              <span className="button">Website</span>
            </li>
          </ol>
        </section>
      </div>
      <Footer />
    </CvSection>
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
