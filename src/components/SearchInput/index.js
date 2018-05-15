import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const SearchInputContainer = styled.div`
  padding: 20px 0;
`;

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <SearchInputContainer>
        <Input 
          type="search" 
          placeholder="Search Movies" 
          value={this.state.value} 
          onChange={this.handleChange.bind(this)}
        />
        <Button onClick={() => this.props.action(this.state.value)}>Search</Button>
      </SearchInputContainer>
    );
  }
}

SearchInput.propTypes = {
  
};

export default SearchInput;