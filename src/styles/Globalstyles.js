import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background:#ffffff;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-style: normal;
        line-height: 1;
        color: #6C7A89;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Crimson Text', serif;
        color: #4b4b4b;

        &:first-child {
            margin-top: 0;
        }
    
}
    p,ul,ol{
        text-align: justify;
        margin-top:5px;
        font-size: 1rem;
        font-weight: 300; //$p-weight;
        font-family: 'Nunito', sans-serif;
        line-height: 1.4;
        
    }ol li{
        margin:1.5rem 0rem;
    }
    
    img{
        width:100%;
    }
    .button{
        display: inline-block;
        padding: .1rem; //3px 3px  3px;
        margin-top: 0px;
       
        border: 1px solid #4f76ba;
        background: #fff; //$accent-color;
        color: #4f76ba;
        font-weight: normal; //$button-weight;
        letter-spacing: 0; //$button-spacing;
        cursor: pointer;

        &:hover {
		background: #4f76ba; // adjust-hue($accent-color,15%);
		// border-color: adjust-hue($accent-color,15%);
		color: #ffffff;
	}


    }
    @media screen and (max-width:700px){
        p{
            font-size:.9rem;
        }
       li{
           font-size:.9rem;
           word-wrap: break-word;
           line-height:1.6;
           
       }
       ul, ol{
           padding:0;
           width:90%;
           margin:0 auto;
       }
    }

`;
export default Globalstyles;
