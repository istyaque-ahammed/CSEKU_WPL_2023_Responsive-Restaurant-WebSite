import styled from 'styled-components';
import FeaturePic from '../../images/featured3.jpg';
import { Link } from 'react-router-dom';
export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled(Link)` 
background: #e31837;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`;
