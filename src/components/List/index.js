import React from 'react';
import styled from 'styled-components';

import ListItem from '../ListItem';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const List = ({ items }) => {
  return (
    <ListContainer>
      {items.data &&
        items.data.map((data, index) => {
          return <ListItem key={`item-${index}`} data={data}/>
        })
      }
    </ListContainer>
  );
};

export default List;