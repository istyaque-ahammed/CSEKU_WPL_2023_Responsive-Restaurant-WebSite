import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  min-h-screen bg-gray-800 text-white p-20 sm:p-10 md:p-5 lg:p-2 xl:p-1 space-y-10
`;

export const ProductWrapper = styled.div`
  flex flex-wrap justify-center space-x-5 space-y-10
`;

export const ProductCard = styled.div`
  w-72 mx-5 p-5 bg-gray-900 rounded-lg shadow-lg
`;

export const ProductImg = styled.img`
  h-72 w-72 object-cover object-center rounded-md shadow-md
`;

export const ProductsHeading = styled.h1`
  text-3xl text-center mb-10
`;

export const ProductTitle = styled.h2`
  font-medium text-xl
`;

export const ProductInfo = styled.div`
  flex flex-col items-center justify-center p-3
`;

export const ProductDesc = styled.p`
  my-3
`;

export const ProductPrice = styled.p`
  text-2xl my-3
`;

export const ProductButton = styled.button`
  text-lg py-2 px-4 bg-red-600 text-white rounded-lg transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-gray-900 hover:border-gray-900
`;

export const ProductLink = styled(Link)`
  text-xl flex items-center justify-center text-white no-underline cursor-pointer
`;
