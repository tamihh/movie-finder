import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 0;
  padding: 20px;
  background: ${props => props.focus ? '#f3f3f3' : '#f9f9f9'};
  font-size: 1.4rem;
  font-weight: 900;
  width: 100%;
  color: #666;
  font-family: 'Montserrat', sans-serif;
  transition: all .5s ease-in;
  text-align: center;
  @media (min-width: 700px) {
    font-size: 3.4rem;
  }
  @media (min-width: 1020px) {
    padding: 5px 20px;
    font-size: 4.4rem;
    width: 66%;
  }
  &::-webkit-input-placeholder {
    color: #dadada;
  }
  &::-moz-placeholder {
    color: #dadada;
  }
  &:-ms-input-placeholder {
    color: #dadada;
  }
  &:-moz-placeholder {
    color: #dadada;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;