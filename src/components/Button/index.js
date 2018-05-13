import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Button = styled.button`
  background: #0f88e9;
  color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background: lighten(0.2, '#0f88e9'),
  }
`;


export default Button;