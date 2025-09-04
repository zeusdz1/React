import React from 'react'
import './WatchMovies.css'

export const WatchMovies = () => {
  return (
    <a href="" className='movie_show'>
      <img 
        src="https://m.media-amazon.com/images/M/MV5BZmFjODdlOTUtOWU2OS00M2RjLTg0N2YtNTMwZjBlNzIzNjNlXkEyXkFqcGc@._V1_.jpg"
        className='movie_img' 
        alt="moviedetails"
      />
      <div className="movie_details">
        <h3 className='movie_details_h3'>Power House</h3>
        <div className='center_ele moviedate'>
          <p>12-3-2024</p>
        </div>
        <p className='moviedesc'>Action Movie</p>
      </div>
    </a>
  )
}
