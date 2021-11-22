import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background:#f3f3f3;
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
        font-style: normal;
        line-height: 1;
        color: #ffffff;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Mulish', sans-serif;
        color: #ffffff;

        &:first-child {
            margin-top: 0;
        }
    
}
    p,ul,ol{
        
        margin-top:5px;
        font-size: 1rem;
        font-weight: 300; //$p-weight;
        font-family: 'Mulish', sans-serif;
        line-height: 1.4;
        
        
        
    }ol li{
        margin:1.5rem 0rem;
    }
    
    img{
        width:100%;
    }


    

`;
export default Globalstyles;
