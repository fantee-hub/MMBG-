import React from "react";
import styled from "styled-components";
import mama from "../images/mama bifarin.jpeg";
import Nav from "../Nav/Nav";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <>
      <Nav />
      <AboutSection>
        <div className="about-header">
          <h2>About Mama</h2>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src={mama} alt="beefweb" />
          </div>
          <div className="about-text">
            <p>
              Chief (Mrs) Mary Babatola Bifarin (Nee Tasanmi) was born on the
              28th January 1927 at Imesi-Ile to Late Benjamin Ojo of Ile Soade,
              Odoba Quarters, Imesi-Ile and Abgael Badejoko of Ile Loriawo, Ile
              Okun, Okciro also in Imesi-Ile. Mama had her elementary scool
              education at Otapete Methodist Primary School, Imesi-Ile from 1936
              to 1943. She then proceeded to Nursing School at the Wesley Guild
              Hospital Ilesha in 1944 which she completed in June 1948. On the
              6th July 1948 she got married to Mr Joseph Ilori Bifarin at
              Imesi-Ile. Mama had her first working stint at Methodist
              Dispensary, Osu in the latter part of 1948. She later worked in
              Ipetu-Ile between December 1948 and December 1950. From January
              1951 to February 1956, Mama was a complete housewife. In March
              1956 till 1969, she worked with the ‘under 5 children’ at
              Imesi-Ile. The research produced 3 basic textbooks in Community
              Health. These are :
              <ol>
                <li>
                  Pediatric Priorities in developing world - A textbook of post
                  graduate Pediatrics series by David Mortey
                </li>
                <li>
                  Where there is no Doctor – a village health care handbook by
                  David Werner
                </li>
                <li>
                  See how they grow – Monitoring child growth for appropriate
                  health care in deceloping countries by David Mortey and
                  Margaret Woodland. 1970 saw her working briefly at the Wesley
                  Guild Hospital, Ilesha from where she voluntarily left the
                  service in the same year. Chief (Mrs) M.B Bifarin started
                  working on her own in 1971 when she established the Alafia
                  Maternity Home a.ka. Walaka Hospital at Ile-Ife.
                </li>
              </ol>
              <p>
                She was conferred with the chieftaincy title of Yeye Saribi of
                Otan Ile on April 17th 1976. In 1977, she was nominated a Woman
                Counselor to Obokun Local Council – while on the 22nd March,
                1978. She was sworn in as a Juvenile Court Panel Member for
                Ile-Ife at the Ibadan High Court. She was again sworn in to a
                similar panel in January 1979. In 1980, Mama was one of the
                members of the Customary Land Use Decree Committee of Obokun
                Local Government.
              </p>
              <p>
                It is Noteworthy to point out that Chief (Mrs) M.B Bifarin has
                excelled both in her profession and in her social life. On the
                international scene, she was part of the team that embarked on
                the first attempt in the world to eradicate measles from a
                town(Imesi-Ile). Thus she was the first nurse to give measles
                vaccine by gun in the whole of Africa. Despite this track record
                of achievements, She remains a God fearing and devoted
                Christian, a mother to all and a peace-loving member of her
                community. Mama breath her last breath at exactly 6:25pm on 15th
                March 2010.
              </p>
              <p>
                Mama was a confirmed member of Methodist Church Nigeria.
                Throughout her lifetime she devoted herself to the service of
                Gid and she was a pioneer member of the Egbe Irepodun of
                Methodist Church Nigeria, Imesi-Ile and Egbe Ifelodun of
                Methodist Church Nigeria, Aladanla, Ile-Ife. She was given an
                award of Woman of Faith by the Women Fellowship of Methodist
                Church Nigeria, Ile Ife Circuit recently. Mama is survived by
                many children, grandchildren and great grandchildren.
              </p>
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
        width: 25rem;
        height: 25rem;
        object-fit: contain;
      }
    }
    .about-text {
      max-width: 35rem;
      margin: 2rem auto;
      text-align: center;
      p,
      li {
        color: #2b2b2b;
        line-height: 1.6;
      }
      ol {
        text-align: left;
      }
    }
  }
  @media screen and (max-width: 765px) {
    .about-content {
      .about-img {
        img {
          width: 100%;
        }
      }
      .about-text {
        padding: 1rem;
      }
    }
  }
`;
export default About;
