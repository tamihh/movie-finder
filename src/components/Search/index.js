import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadMovies } from 'Redux/actions/movies';
import { setInputState } from 'Redux/actions/ui';
import SearchInput from '../SearchInput';
import List from '../List';
import Wrapper from '../Wrapper';
import Loading from '../Loading';
import NoResultMessage from '../NoResultMessage';
import NoResultImage from 'Common/assets/images/whoops.png';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      inputFocus: false
    }
  }

  componentWillMount() {
    let searchTerm = localStorage.getItem('searchTerm');
    let inputFocus = localStorage.getItem('inputFocus');
    
    if(searchTerm) {
      this.props.loadMovies(searchTerm);
      this.setState({ searchTerm, inputFocus })
    }
  }

  componentDidUpdate() {
    this.handleLocalStorage(this.state.searchTerm, this.state.inputFocus)
  }

  handleLocalStorage(searchTerm, inputFocus) {
    if(!this.props.noResults && searchTerm !== '') {
      localStorage.setItem('searchTerm', searchTerm)
      localStorage.setItem('inputFocus', inputFocus)
    } else {
      localStorage.removeItem('searchTerm');
      localStorage.removeItem('inputFocus');
    }
  }

  handleSearch(searchTerm) {
    this.props.loadMovies(searchTerm);
    this.setState({ searchTerm })
  }

  handleInputState(value) {
    this.props.setInputState(value);
    this.setState({ inputFocus: value})
  }

  renderNoResultMessage() {
    return (
      <Wrapper>
        <NoResultMessage>
          <img src={NoResultImage} alt="Whoops! Content not Found!" />
          <p>Movie not found :(</p>
        </NoResultMessage>
      </Wrapper>
    )
  }

  render() { 
    return (
      <Fragment>
        <SearchInput 
          searchTerm={this.state.searchTerm}
          inputFocus={this.state.inputFocus}
          setInputState={this.handleInputState.bind(this)}
          action={this.handleSearch.bind(this)}
        />
        {
          this.props.loadingMovies ? <Wrapper><Loading /></Wrapper> :
          this.props.noResults ? this.renderNoResultMessage() : <List items={this.props.loadedMovies.movies}/>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loadedMovies: state.loadedMovies,
  noResults: state.loadedMovies.noResults,
  loadingMovies: state.loadedMovies.loadingMovies,
  inputFocus: state.ui.inputFocus
});

const mapDispatchToProps = {
  loadMovies,
  setInputState
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);