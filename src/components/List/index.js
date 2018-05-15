import React from 'react';
import styled from 'styled-components';

import ListItem from '../ListItem';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const List = ({ movies }) => {
  return (
    <ListContainer>
      {movies &&
        movies.data.map((movie, index) => {
          return <ListItem key={`movie-${index}`}/>
        })
      }
    </ListContainer>
  );
};

export default List;