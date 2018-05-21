import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ImageDefault from 'Common/assets/images/poster-placeholder.png';

import { 
  duration, tileWidth, tileHeight, moveRight, growFactor
} from '../variables';

const Link = styled.a`
  text-decoration: none;
`
const tileWidthResponsive = tileWidth - (tileWidth * 0.08);

const ListItemContainer = styled.li`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 296px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: ${duration} all;
  transform-origin: center left;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  @media (min-width: 700px) {
    width: 220px;
    height: 320px;
  }

  &:hover {
    transform: scale(${growFactor});
    opacity: 1 !important;
    & ~ .tile {
      transform: translate3d(${moveRight}px, 0, 0)
    }
    .content {
      opacity: 1;
    }
  }

  .link {
    display: block;
  }

`;

const ListItemImage = styled.img`
  width: 100%;
`;

const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5%;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: opacity .25s ease;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.85) 52%);
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  .title{
    color: #FFF;
    font-size: 16px;
    line-height: 21px;
    margin: 5px 0;
    display: block;
    white-space: pre-line;
  }
`;

const MetadataList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  .item {
    font-size: 12px;
    color: #ccc;
    list-style: none;
    & ~ .item {
      &:before {
        content: ',';
        margin-right: 10px;
      }
    }
  }
`;


const ListItem = ({ data }) => {
  const { Poster, Title, Type, Year, imdbID } = data;
  const posterUrl = Poster !== "N/A" ? Poster : ImageDefault

  return (
    <ListItemContainer className="tile">
      <Link href={`http://www.imdb.com/title/${imdbID}`} target="blank" className="link">
        <ListItemImage src={posterUrl} alt={Title} />
        <ListItemContent className="content">
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


export default ListItem;