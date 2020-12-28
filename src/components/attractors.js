import React, { Component } from "react";

import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts, loaderDelay } = theme;

import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

const StyledContainer = styled.header`
  ${mixins.flexBetween};
  top: 0;
  // padding: 0px 50px;
  background-color: ${colors.navy};
  width: 100%;
  height: 40vh;
  max-height: 500px;
  @media (max-height: 770px) {
    height: 30vh;
  }
  @media (max-height: 660px) {
    height: 20vh;
  }
  @media (max-height: 570px) {
    height: 15vh;
  }
  @media (max-height: 530px) {
    height: 10vh;
    visibility: hidden;
  }
  @media (max-height: 500px) {
    height: 17vh;
    visibility: visible;
  }
  @media (max-width: 420px) and (max-height: 730px) {
    height: 25vh;
  }
  @media (max-height: 455px) {
    visibility: hidden;
  }  
`;


function Attractor() {
  return (
    <StyledContainer className="sketchContainer">
      <P5Wrapper sketch={sketch} />
    </StyledContainer>
  )
}


export default Attractor;