import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductLink,
  ProductLink1
} from './ProductsElements';


const Dessert = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductLink to='/productpage'>Add to cart</ProductLink>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      <ProductLink1 to='/dessert'>More-&gt;</ProductLink1>

    </ProductsContainer>
    
  );
  
};

export default Dessert;
