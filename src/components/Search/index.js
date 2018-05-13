import React, { Component, Fragment } from 'react';
import InputSearch from '../InputSearch';
import List from '../List';

class Search extends Component {
  render() {
    return (
      <Fragment>
        <InputSearch />
        <List />
      </Fragment>
    );
  }
}

export default Search;