import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
   box-sizing :border-box;

}
html{
    font-size:62.5%;
    overflow-x : hidden;
}
   
h1{
    color:${({ theme }) => theme.colors.heading}
    font-size:6rem;
    font-weight:900;
}
h2{
    colors:${({ theme }) => theme.colors.heading};
    font-size:4.4rem;
    white-space:normal;
    font-weight:300;
    text-align:center;
}
h3{
    font-size:1.8rem;
    font-weight:400;
}
p{
    color :${({ theme }) => theme.colors.text};
    opacity:.7;
    font-size:1.65rem;
    line-height:1.5;
    margin-top:1rem;
    font-weight:400;

}
    .Main-contianer{
     background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0;
    z-index:1000;
    }
      .header-container {
     display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    padding:10px 20px;
  }
    .logo img {
      height: 50px;
      width: 100%;
    }
  
   
 
 .grid{
    display:grid;
    gap:9rem;
 }
 .grid-two-column{
    grid-template-columns:repeat(2,1fr);
 }
 .grid-three-column{
    grid-template-columns:repeat(3,1fr);
 }
 .grid-four-column{
    grid-template-columns:1fr 1.2fr .5fr .8fr;
 }


 .roboto-thin {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.roboto-light {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-medium {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.roboto-bold {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.roboto-black {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.roboto-thin-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.roboto-light-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.roboto-regular-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.roboto-medium-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.roboto-bold-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.roboto-black-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: italic;
}

`;
