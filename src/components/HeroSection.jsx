import React from "react";
import { styled } from "styled-components";
import { Button } from "../style/Button";
import ProductList from "../components/ProductList";
import { products_List, card_productList } from "./data";
import { NavLink } from "react-router-dom";
import NewProduct from "../components/NewProduct";
import HomeSlider from "./HomeSlider";

const HeroSection = () => {
  return (
    <>
      <Wrapper>
        <section className="video-Section">
          <video
            class="elementor-Video"
            src="./public/video/vecteezy_glasses-with-newspaper-with-the-headline-press-on-a-table_1799609.mp4"
            autoplay=""
            loop=""
            muted="muted"
          ></video>
        </section>
        <section className="container">
          <ProductList products_List={products_List} />
        </section>

        {/* <section className="bgImagesction">
          <div className="hero-data-container"></div>
        </section> */}

        <section className="hero-data-container">
          <div className="bgImagesction">
            <div className="herodata-background-overlay"></div>
            <div className="container grid grid-two-column">
              <div className="section-hero-data">
                <div className="welcometext">
                  <h3>Welcome SaviraIndia</h3>
                </div>
                <p className="hero-info">
                  Savira was launched in 2010 with vision to carve an exclusive
                  niche in the realms of plastic printing. This assumed real
                  dimensions as Savira claimed market leader status in the
                  manufacture of labels, dials, stickers, membrane switches and
                  security cards with in the short span of time. This was
                  achieved by adhering to high standards of client satisfaction
                  and stringent Quality System parameters. The focus was on
                  unwavering commitment to eliminating non conformities and
                  deviation in product and manufacturing processes complemented
                  by value enhancing products and prompt response to client
                  needs. The untiring pursuit for excellence and improvement
                  culminated in the award of ISO-9001:2008 Certification for
                  Savira in 2011. Core products like PVC labels, logos, membrane
                  switches and security cards from the spearhead of
                  Savira'business.
                </p>
                <Button className="btn mrgT">
                  <NavLink to="/about" className="readMore-btn">
                    Read More
                  </NavLink>
                </Button>
              </div>
              <div className="section-hero-image">
                <img
                  src="./images/printingImg.avif"
                  alt="infoimage"
                  className="hero-img"
                ></img>
              </div>
            </div>
          </div>
        </section>

        <section className="container mrgT">
          <div className="newl-product-container">
            <div className="product-header">
              <h2 className="product-heading-title">Newly Products</h2>
            </div>
            <section className="product-data">
              {card_productList.map((product) => (
                <NewProduct key={product.title} {...product} />
              ))}
            </section>
          </div>
        </section>

        <section className="hero-product-container product-slider mrgT">
          <div className="bgImagesction">
            <div className="herodata-background-overlay"></div>
            <div className="container ">
              <div className="">
                <HomeSlider />
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
  }
  .product-data {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 2rem;
  }
  .bgImagesction {
    background-image: url("./images/img2.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px;
  }

  .herodata-background-overlay {
    background-color: #000000;
    opacity: 0.5;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  }

  .mrgT {
    margin-top: 20px;
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 3rem;
    display: flex;
    overflow-wrap: break-word;
    word-break: break-all;
  }
  .hero-info {
    text-align: justify;
    font-size: 1.4rem;
    color: #fff;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-item: center;
  }

  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  .welcometext h3 {
    font-size: 4rem;
    background: linear-gradient(to right, #5026df, #e737e5, #4995ee, #157078);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: 700;
  }

  .mainInfo {
    display: flex;
  }
  .btn {
    max-width: 12rem;
    padding: 1rem;
  }
  .readMore-btn {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    font-weight: 500;
  }

  .video-Section,
  .hero-data-container,
  .hero-product-container {
    padding: 10px;
  }

  .product-slider {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .elementor-Video {
    width: 100%;
    display: flex;
    height: 40%;
    border: none;
    background-color: #000;
  }
  .elementor-widget-container {
    text-align: center;
    margin: 20px 0;
  }

  .product-heading-title {
    margin: 0;
    font-size: 4rem;
    font-weight: 600;
  }
`;
export default HeroSection;
