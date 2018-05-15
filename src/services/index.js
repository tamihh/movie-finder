const API_URL = 'https://jsonmock.hackerrank.com/api/movies/search/';

export const getMoviesByTitle = (term) => (
  fetch(`${API_URL}?Title=${term}`).then(response => response.json())
);


