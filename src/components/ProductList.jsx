import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProductList = ({ products_List }) => {
  return (
    <Wrapper>
      <div className="product-Container">
        {products_List.map((product, index) => (
          <div key={index} className="card">
            <NavLink to={product.url}>
              <img
                src={product.src}
                alt={product.title}
                className="card-img-top"
              />
            </NavLink>
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default ProductList;

const Wrapper = styled.section`
  .product-Container {
    display: flex;
    justify-content: center;
  }
  .card {
    position: relative;
    max-width: 30%;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 10px;
    border: none !important;
  }
  .card img {
    text-align: center;
    transition: background 0.3s, border-radius 0.3s, box-shadow 0.3s,
      transform var(--e-transform-transition-duration, 0.4s);
  }
  .card-body {
    text-align: center;
  }
  .card-title {
    font-size: 3rem;
  }
  .card:first-child,
  .card:last-child {
    margin: 10px 0;
  }
`;
