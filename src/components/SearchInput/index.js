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

  handleKeypres(event) {
    if (event.which == 13) {
      this.props.action(this.state.value);
    }
  }

  render() {
    return (
      <SearchInputContainer>
        <Input 
          type="search" 
          placeholder="Search Movies" 
          value={this.state.value} 
          onKeyPress={this.handleKeypres.bind(this)}
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