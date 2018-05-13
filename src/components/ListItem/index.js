import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.li`
  border: 1px solid #e4e3e3;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: .5rem; 
  width: 22.2%;
`;

const ListItemImage = styled.img`
  width: 100%;
`;

const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
`;

const MetadataList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  .item {
    list-style: none;
    color: #0f88e9;
  }
`;

const ListItem = props => {
  return (
    <ListItemContainer>
      <ListItemImage/>
      <ListItemContent>
        <h3 className="title">title</h3>
        <MetadataList>
          <li className="item">movie</li>
          <li className="item">2011</li>
        </MetadataList>
      </ListItemContent>
    </ListItemContainer>
  );
};

ListItem.propTypes = {
  
};

export default ListItem;