import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ImageDefault from 'Common/assets/images/poster-placeholder.png';

const Link = styled.a`
  text-decoration: none;
`

const ListItemContainer = styled.li`
  border: 1px solid #e4e3e3;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: .5rem 0; 
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 480px) {
    width: 47.5%;
    &:not(:nth-child(2n+2)) {
      margin-right: 1.3rem;
    }
  }
  @media (min-width: 768px) {
    width: 31.2%;
    &:not(:nth-child(2n+2)) {
      margin-right: 0
    }
    &:not(:nth-child(3n)) {
      margin-right: 1.3rem;
    }
  }
  @media (min-width: 1020px) {
    width: 23.1%;
    &:not(:nth-child(3n)) {
      margin-right: 0;
    }
    &:not(:nth-child(4n+4)) {
      margin-right: 1.3rem;
    }
  }
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
    & ~ .item:before {
      content: ', ';
    }
  }
`;


const ListItem = ({ data }) => {
  const { Poster, Title, Type, Year, imdbID } = data;
  const posterUrl = Poster !== "N/A" ? Poster : ImageDefault

  return (
    <ListItemContainer>
      <Link href={`http://www.imdb.com/title/${imdbID}`} target="blank">
        <ListItemImage src={posterUrl} alt={Title} />
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