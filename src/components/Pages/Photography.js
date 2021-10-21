import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import image1 from "../gallery/image-1.jpg";
import image2 from "../gallery/image-2.jpg";
import image3 from "../gallery/image-3.jpg";
import image4 from "../gallery/image-4.jpg";
import image5 from "../gallery/image-5.jpg";
import image6 from "../gallery/image-6.jpg";
import image7 from "../gallery/image-7.jpg";
import image8 from "../gallery/image-8.jpg";
import image9 from "../gallery/image-9.jpg";
import image10 from "../gallery/image-10.jpg";
import image11 from "../gallery/image-11.jpg";
import image12 from "../gallery/image-12.jpg";
import image13 from "../gallery/image-13.jpg";
import image14 from "../gallery/image-14.jpg";
import image15 from "../gallery/image-15.jpg";
import image16 from "../gallery/image-16.jpg";
import image17 from "../gallery/image-17.jpg";
import image18 from "../gallery/image-18.jpg";
import image19 from "../gallery/image-19.jpg";
import image20 from "../gallery/image-20.jpg";
import image21 from "../gallery/image-21.jpg";
import image22 from "../gallery/image-22.jpg";
import image23 from "../gallery/image-23.jpg";
import image24 from "../gallery/image-24.jpg";
import image25 from "../gallery/image-25.jpg";
import image26 from "../gallery/image-26.jpg";
import image27 from "../gallery/image-27.jpg";
import image28 from "../gallery/image-28.jpg";
import image29 from "../gallery/image-29.jpg";
import image30 from "../gallery/image-30.jpg";

const Photography = () => {
  const { pathname } = useLocation();

  if (pathname === "/Photography") {
    document.title = "Photography - Griffin Chure, PhD";
  }

  return (
    <PhotoSection>
      <div className="row">
        <img src={image1} alt="art" />
        <img src={image2} alt="art" />
        <img src={image3} alt="art" />
        <img src={image4} alt="art" />
        <img src={image5} alt="art" />
        <img src={image6} alt="art" />
        <img src={image7} alt="art" />
        <img src={image8} alt="art" />
        <img src={image9} alt="art" />
        <img src={image10} alt="art" />
      </div>
      <div className="row">
        <img src={image11} alt="art" />
        <img src={image12} alt="art" />
        <img src={image13} alt="art" />
        <img src={image14} alt="art" />
        <img src={image15} alt="art" />
        <img src={image16} alt="art" />
        <img src={image17} alt="art" />
        <img src={image18} alt="art" />
        <img src={image19} alt="art" />
        <img src={image20} alt="art" />
      </div>
      <div className="row">
        <img src={image21} alt="art" />
        <img src={image22} alt="art" />
        <img src={image23} alt="art" />
        <img src={image24} alt="art" />
        <img src={image25} alt="art" />
        <img src={image26} alt="art" />
        <img src={image27} alt="art" />
        <img src={image28} alt="art" />
        <img src={image29} alt="art" />
        <img src={image30} alt="art" />
      </div>
    </PhotoSection>
  );
};
const PhotoSection = styled.div`
  background: black;
  display: flex;
  flex-wrap: wrap;
  .row {
    flex: 33.33%;
  }
  img {
    width: 100%;
    min-height: 20rem;
    object-fit: cover;
  }
  @media screen and (max-width: 700px) {
    .row {
      flex: 50%;
    }
  }
`;
export default Photography;
