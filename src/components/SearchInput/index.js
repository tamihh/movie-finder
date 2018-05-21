import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const SearchInputContainer = styled.div`
  display: flex;
  background: ${props => props.inputFocus ? '#f3f3f3' : 'transparent'};
  justify-content: center;
  transition: all .5s ease-in-out;
  width: ${props => props.inputFocus ? '100%' : 'auto'};
`;

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.searchTerm ? this.props.searchTerm : '', 
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.action(this.state.value);
  }

  handleKeypres(event) {
    if (event.which == 13) {
      this.props.action(this.state.value);
    }
  }

  handleBg(value) {
    this.props.setInputState(value);    
  }

  render() {
    return (
      <SearchInputContainer inputFocus={this.props.inputFocus}>
        <Input 
          type="search" 
          placeholder="What movie are you looking for?" 
          value={this.state.value} 
          focus={this.props.inputFocus}
          onFocus={this.handleBg.bind(this, true)}
          onKeyPress={this.handleKeypres.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </SearchInputContainer>
    );
  }
}

SearchInput.propTypes = {
  
};

export default SearchInput;