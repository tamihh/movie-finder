import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from 'Redux/actions/movies'
import SearchInput from '../SearchInput';
import List from '../List';
import Loading from '../Loading';

class Search extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: ''
    }
  }

  componentWillMount() {
    let searchTerm = localStorage.getItem('searchTerm');
    
    if(searchTerm) {
      this.props.loadMovies(searchTerm);
      this.setState({ searchTerm })
    }
  }

  componentDidUpdate() {
    this.handleLocalStorage(this.state.searchTerm)
  }

  handleLocalStorage(searchTerm) {
    if(!this.props.noResults && searchTerm !== '') 
      localStorage.setItem('searchTerm', searchTerm)
    else
      localStorage.removeItem('searchTerm');
  }

  handleSearch(searchTerm) {
    this.props.loadMovies(searchTerm);
    this.setState({ searchTerm })
  }

  noResultMessage() {
    return <p>No Movie Found</p>
  }

  render() { 
    return (
      <Fragment>
        <SearchInput action={this.handleSearch.bind(this)}/>
        {this.state.searchTerm ? <h3>Search results for: {this.state.searchTerm}</h3> : null}
        {
          this.props.loadingMovies ? <Loading /> :
          this.props.noResults ? this.noResultMessage() : <List items={this.props.loadedMovies.movies}/>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loadedMovies: state.loadedMovies,
  noResults: state.loadedMovies.noResults,
  loadingMovies: state.loadedMovies.loadingMovies
});

const mapDispatchToProps = {
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);