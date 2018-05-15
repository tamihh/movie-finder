import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from 'Redux/actions/movies'
import SearchInput from '../SearchInput';
import List from '../List';
import Loading from '../Loading';

class Search extends Component {

  searchMovieByTitle(title) {
    this.props.loadMovies(title);
  }

  noResultMessage() {
    return <p>No Movie Found</p>
  }

  render() { 
    return (
      <Fragment>
        <SearchInput action={this.searchMovieByTitle.bind(this)}/>
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