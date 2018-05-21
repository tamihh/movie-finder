import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Wrapper from 'Components/Wrapper';
import Logo from 'Common/assets/images/logo.png';

const inputFocus = localStorage.getItem('inputFocus');

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all .25s ease;
  padding: ${props => inputFocus || props.inputFocus ? '40px 0' : '25vh 0 40px 0'};
`;

const Img = styled.img`
  width: 80px;
  transition: all .25s ease;
  @media (min-width: 700px) {
    width: ${props => inputFocus || props.inputFocus ? '90px' : '150px'};
  }
`;

const Header = ({ inputFocus }) => {
  return (
    <HeaderContainer inputFocus={inputFocus}>
      <Img src={Logo} alt="Awesome movie finder" inputFocus={inputFocus} />
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({ inputFocus: state.ui.inputFocus });

export default connect(mapStateToProps)(Header);