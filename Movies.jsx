import React, {useEffect} from 'react'
import './Movies.css'
import {WatchMovies} from './WatchMovies'
import FilterMovies from './FIlterMovies'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [allMoviesFiltered,setAllMoviesFiltered]=useState([])
    const [givingRating,setRating]=useState(0)
    useEffect(()=>{
      fetchmovies();
    },[])
    const fetchmovies=async()=> {
      const res= await fetch("https://api.themoviedb.org/3/person/popular?api_key=f434dd2b03cf16c0be08e2509783466").then((res)=>res.json().then((ata)=>console.log(data)));
      const data = await res.json()
      setMovies(data.results);
      setAllMoviesFiltered(data.results)
    };
    
    const handleFilter=(rating)=>{
      if(rating==givingRating){
        setRating(0)
        setMovies(allMoviesFiltered)
      }
      else {
        setRating(rating)
        const filteredMovies=allMoviesFiltered.filter((movie)=> movie.vote_average >=rating)
        setMovies(filteredMovies);
      }
    }
    
  return (
    <section className="movie_list">
       <header className="movieheader">
        <h2 className='center_ele movie_h2ead'>Popular</h2>
        <div className="center_ele movie_listadd">
           <FilterMovies givingRating={givingRating} 
           onRatingButtonClick={handleFilter} ratings={[8,7,6]}/>
            <select name="" id="" className="movie_sorting">
                <option value="">Sort By</option>
                <option value="">Date</option>
                <option value="">Rating</option>
            </select>
            <select name="" id="" className="movie_sorting">
                <option value="">Ascending</option>
                <option value="">Descending</option>
            </select>
        </div>
       </header>
       <div className='movie_shows'>
       {movies.length>0 ?(movies.map((movie)=>(
        <WatchMovies key={movie.id} movie={movie}/>))):
        (<p className='movie_2head'>No Movies found for it</p>)
       } 
       </div>
 
    </section>
  );
}

export default Movies
