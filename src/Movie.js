import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster}){
  return (
      <div>
        <MoviePoster poster={ poster}/>
        <h1>{ title }</h1>
      </div>
  )
}

// class component는 smart component
// class MoviePoster extends Component {
//   render() {
//     //console.log(this.props);
//     return (
//         <img src={ this.props.poster } alt="Moive poster"/>
//     )
//   }
// }

//dump componet
//function component dont have state, no lifecycle
function MoviePoster({poster}) {
  return (
      <img src={ poster } alt="Moive poster"/>
  )
}
Movie.propType = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;