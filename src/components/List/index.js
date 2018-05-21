import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import { 
  duration, growFactor, moveLeft
} from './variables';


const ListContainer = styled.div `
  display: flex;
  margin: 0;
  padding: 0 20px;
  overflow: scroll;
  width: 100%;
  @media (min-width: 1020px) {
    padding: 0 10px;
  }
`;

const Row = styled.ul`
  transition: ${duration} transform;
  font-size: 0;
  white-space: nowrap;
  padding: 0;
  margin: 20px 0;
  @media (min-width: 700px) {
    margin: 50px 0;
  }

  &:hover{
    transform: translate3d(${moveLeft}px, 0, 0);
  }
  &:hover .tile{
    opacity: .3;
  }
`;

const List = ({ items }) => {
  return (
    <ListContainer>
      <Row className="row__inner">
        {items.data &&
          items.data.map((data, index) => {
            return <ListItem key={`item-${index}`} data={data} />
          })
        }
      </Row>
    </ListContainer>
  );
};

export default List;