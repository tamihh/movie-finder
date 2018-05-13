import React from 'react';
import styled from 'styled-components';

import ListItem from '../ListItem';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const List = () => {
  return (
    <ListContainer>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
    </ListContainer>
  );
};

export default List;