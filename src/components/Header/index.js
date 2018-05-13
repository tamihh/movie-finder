import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Wrapper from 'Components/Wrapper';

const HeaderContainer = styled.div`
  background: #00caa8;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;

  .header-title, 
  .header-subtitle {
    color: #fff;
    margin: .5rem 0;
    font-weight: normal;
  }

  .header-subtitle {
    font-weight: lighter;
    font-size: 1.2rem;
  }

`;

const Header = props => {
  return (
    <HeaderContainer>
      <Wrapper>
        <h1 className="header-title">Movie Finder</h1>
        <h2 className="header-subtitle">Find your next favourite movie :) </h2>
      </Wrapper>
    </HeaderContainer>
  );
};


export default Header;