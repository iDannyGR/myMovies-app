import React, { useEffect, useState } from 'react'
import { api } from 'api/base.api';
import { useGlobalContext } from '../hook/useGlobalContext';
import { MovieResult } from 'models/MovieResult';

const IMG:string = 'https://image.tmdb.org/t/p/w300'

const MovieInfo = () => {
  const [movies, setMovies] = useState<MovieResult>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0 
  }); 

  const [copyMovie, setCopyMovie] =  useState([])
  const { searchMovie, setSearchMovie } = useGlobalContext()
  const splitText = (description:string) => {
  const text = description.substring(0, 150);
  const lastWord = text.split(' ');
     return text.replace(lastWord[lastWord.length - 1], '...')
  }
  
  useEffect(() => {
    const getMovies = async () => {
      const allMovies  = await api.get("trending/movie/day");
      //setMovies({ movies, data });
      if (allMovies.status === 200) { 
        setMovies(allMovies.data);   
        setSearchMovie(allMovies.data.results);
        setCopyMovie(allMovies.data.results);
      }
    }
    getMovies();
  }, []);

  useEffect(() => {
     if(searchMovie.length > 0) setMovies({ ...movies, results: searchMovie })
     else setMovies({ ...movies, results: copyMovie })
    setSearchMovie(copyMovie)
    console.log(searchMovie)
  }, [searchMovie])

  return (
  <div className="flex flex-col">
    {
      movies && movies.results.map((movie, index) =>  
        <div 
          key={index} 
          className="relative w-full h-[550px] rounded-3xl mb-4 shadow-lg border border-gray-400"
          >
          <img className="object-cover w-full h-full rounded-3xl" src={`${IMG}${movie.poster_path}`} alt={movie.title} />
              <div className="">
                  <p className="hidden text-2xl font-semibold">{movie.title}</p>
                  <p className="hidden font-normal text-justify text-gray-700 md:line-clamp-3">{`${splitText(movie.overview) }...`}</p>
                  <p className="hidden text-red-900 text-center md:text-xl  md:mt-3">Release Date: {movie.release_date }</p>
                  <div className="absolute flex justify-center items-center rounded-full w-16 h-16 top-4 left-3 border">
                    <p className='rounded-full flex justify-center items-center  bg-white w-12 h-12 text-black font-extrabold'>
                      <span> { movie.vote_average.toFixed(1)} </span>
                    </p>
                  </div>
              </div>
        </div>
      )
    }
  </div>
  )
}

export default MovieInfo