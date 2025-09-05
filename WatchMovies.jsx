import React from 'react'
import './WatchMovies.css'
import PropTypes, { number } from 'prop-types'

export const WatchMovies = ({movie}) => {
  return (
    <a href="" className='movie_show'>
      <img 
        src="https://m.media-amazon.com/images/M/MV5BZmFjODdlOTUtOWU2OS00M2RjLTg0N2YtNTMwZjBlNzIzNjNlXkEyXkFqcGc@._V1_.jpg"
        className='movie_img' 
        alt="moviedetails"
      />
      <div className="movie_details">
        <h3 className='movie_details_h3'>{movie.original_title}</h3>
        <div className='center_ele moviedate'>
          <p>{movie.releas_date}</p>
        </div>
        <p className='moviedesc'>{movie.overview.slice(0,100)+"."}</p>
      </div>
    </a>
  )
};

WatchMovies.propTypes={
  movie: PropTypes.shape({
    id:PropTypes.number.isRequired,
    poster_path:PropTypes.string,
    original_title:PropTypes.string.isRequired,
    releas_date:PropTypes.string,
    rate_average:PropTypes.number,
    overview:PropTypes.string,
    
  }).isRequired,
}
