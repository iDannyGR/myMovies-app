import React, { useEffect, useState } from 'react'
import { api } from 'api/base.api';
import { useGlobalContext } from '../hook/useGlobalContext';
const IMG = 'https://image.tmdb.org/t/p/w300'
interface Results {
adult: boolean
backdrop_path: string
genre_ids: Array<number>
id: number
media_type: string
original_language: string
original_title: string
overview: string
popularity: number
poster_path: string
release_date : string
title : string
video : boolean
vote_average : number
vote_count : number
 }
interface MovieResult {
  page: number
  results: Array<Results>
  total_pages: number
  total_results: number
}

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

  return (<div className='grid grid-cols-3'>
    {
      movies && movies.results.map((movie, index) =>  
                <a href="#" key={index} className="flex flex-col  items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-black-700 dark:bg-white-800 dark:hover:bg-white-700">
          <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`${IMG}${movie.poster_path}`} alt={movie.title} />
              <div className=" pl-4 pr-3 flex flex-col justify-between leading-normal">
                  <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{movie.title}</h5>
                  <p className="line-clamp-3 font-normal text-justify text-gray-700 dark:text-gray-400">{`${splitText(movie.overview) }...`}</p>
                  <p className=' text-center text-xl text-red-900 mt-3'>Release Date: {movie.release_date }</p>
            <p className=' text-center text-xl text-red-900'>Average Vote: { movie.vote_average}</p>
              </div>
          </a>
      )
    }
  </div>
  )
}

export default MovieInfo