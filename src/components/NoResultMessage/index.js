import React from 'react';
import styled from 'styled-components';

const NoResultMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #999;
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: lighter;
  @media (min-width: 1020px) {
    font-size: 1.8rem;
  }
  img {
    width: 150px;
    @media (min-width: 1020px) {
      width: 250px;
    }
  }
`;

export default NoResultMessage;
