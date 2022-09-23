import React, { useState } from 'react';
import { MovieInfo } from 'components/MovieInfo';
import { NavBar } from 'components/NavbarSearch';
import { api } from 'api/base.api';

const Home = () => {
    const [movies, setmovies] = useState({});
    const getMovies = async () => {
        const { data } = await api.get("trending/movie/day");
        setmovies({ movies, data });
        console.log(data);
    };
    getMovies();
  return (
      <>
          <div>
             <NavBar /> 
          </div>
          <section>
              <MovieInfo />
          </section>
         
    </>
  )
}

export default Home