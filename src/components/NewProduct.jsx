import React from "react";
import { styled } from "styled-components";

const NewProduct = ({ src, title, cardText }) => {
  return (
    <Wrapper>
      <div class="card">
        <div className="bgCard-img">
          <img src={src} class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{cardText}</p>
          <div class="viewMore-container">
            <a
              class="elementor-button elementor-button-link elementor-size-sm"
              href="https://m-techindia.com/index.php/rfid-reader-division/rfid-tags/rfid-bolt-seal/"
            >
              <span class="moreInfo-Wrapper">
                <span class="moreInfo-button-icon">
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-far-arrow-alt-circle-right"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
                  </svg>{" "}
                </span>
                <span class="moreInfo-button-text">View More</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewProduct;

const Wrapper = styled.section`
 
  .card{
   box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, 0.5);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding:15px;
  }
  .card .bgCard-img {
    background-image: url("./images/bgWhiteforCard.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    width:100%;
  }
    .bgCard-img img{
        height: 100%;
        width: 100%;
        object-fit:cover;
    }
        .bgCard-img {
    height: 200px; /* Set a fixed height for the image container */
    overflow: hidden;
  }
    
    .card-body{
    margin-top:10px;
    flex:1;
    display:flex;
    flex-direction:column;
    align-items: center;
    }
 
    .card-body .card-title{
    font-size:2rem;
    color:#000;
    opacity:0.7;
    }
    .card-text{
    text-align:center;
    }

   .viewMore-container {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    fill: #343434;
    color: #343434;
    background-color: #FFFFFF;
    margin-top:50px;
}
    .moreInfo-Wrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
}
    .viewMore-container a{
    text-decoration:none;
    }

    .moreInfo-button-icon .e-font-icon-svg {
    height: 1.2em;
}
    .moreInfo-button-text{
    color: ${({ theme }) => theme.colors.text};
    font-size:1.5rem;

    }
  }
`;
