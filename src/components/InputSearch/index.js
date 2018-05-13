import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const SearchInputContainer = styled.div`
  padding: 20px 0;
`;

const SearchInput = props => {
  return (
    <SearchInputContainer>
      <Input type="search" placeholder="Search Movies" />
      <Button>Search</Button>
    </SearchInputContainer>
  );
};

SearchInput.propTypes = {
  
};

export default SearchInput;