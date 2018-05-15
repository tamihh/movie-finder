import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
`

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

  .title{
    color: #000
  }
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


const ListItem = ({ data }) => {
  const { Poster, Title, Type, Year, imdbID } = data;

  return (
    <ListItemContainer>
      <Link href={`http://www.imdb.com/title/${imdbID}`} target="blank">
        <ListItemImage src={Poster} alt={Title}/>
        <ListItemContent>
          <h3 className="title">{Title}</h3>
          <MetadataList>
            <li className="item">{Type}</li>
            <li className="item">{Year}</li>
          </MetadataList>
        </ListItemContent>
      </Link>
    </ListItemContainer>
  );
};

ListItem.propTypes = {
  
};

export default ListItem;