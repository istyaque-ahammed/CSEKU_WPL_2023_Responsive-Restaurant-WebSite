import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 90vh;
  padding: 1rem calc((100vw - 1300px) / 2);
  background: black;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 1.5;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1.2rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.5s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const ProductLink = styled(Link)`
font-size: 1.2rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2 ease-out;

&:hover {
  background: #ffc500;
  transition: 0.5s ease-out;
  cursor: pointer;
  color: #000;
}
`;
export const ProductLink1 = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;


