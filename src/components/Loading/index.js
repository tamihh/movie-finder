import React from 'react';
import styled from 'styled-components';
import loadingImage from '../../common/assets/images/spinner.gif';

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  color: #999999;
`;

const Spinner = styled.img`
  width: 50px;
  height: 50px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner src={loadingImage} alt="Loading" />
      Loading...
    </LoadingContainer>
  );
};

export default Loading;