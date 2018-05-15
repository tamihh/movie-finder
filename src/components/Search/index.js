import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from 'Redux/actions/movies'
import SearchInput from '../SearchInput';
import List from '../List';

class Search extends Component {

  searchMovieByTitle(title) {
    this.props.loadMovies(title);
  }

  render() {  
    console.log(this.props.movies)  
    return (
      <Fragment>
        <SearchInput action={this.searchMovieByTitle.bind(this)}/>
        <List items={this.props.movies}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.searchMovies
});

const mapDispatchToProps = {
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);