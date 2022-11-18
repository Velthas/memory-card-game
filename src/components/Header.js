import React from "react";
import styled from "styled-components";

import pokeLogo from '../images/logo.png';

const Header = () => {
  return (
    <HeaderContainer id="header">
      <Logo src={pokeLogo}></Logo>
      <BallButtonContainer>
        <BallButtonOuter>
          <BallButtonInner>
          </BallButtonInner>
        </BallButtonOuter>
      </BallButtonContainer>
    </HeaderContainer>
  )
}

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderContainer = styled(FlexCenter)`
  flex-direction: column;
  margin-bottom: 80px;
  background-color: #ee1b24;
`

const Logo = styled.img`
  width: 70%;
  margin: 40px;
`

const BallButtonContainer = styled(FlexCenter)`
  height: 20px;
  width: 100%;

  background-color: black;
`

const BallButtonOuter = styled(FlexCenter)`
  height: 80px;
  width: 80px;

  border: 6px solid black;
  border-radius: 46px;

  background-color: white;
`

const BallButtonInner = styled.div`
  height: 40px;
  width: 40px;

  border: 6px solid black;
  border-radius: 26px;

  background-color: white;
`

export default Header;
