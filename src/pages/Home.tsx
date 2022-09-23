import React from 'react'
import { MovieInfo } from 'components/MovieInfo'
import { NavBar }  from 'components/NavbarSearch'
//import { useNavigate } from "react-router-dom";
import { movies } from '../api/movieDB';

const Home = () => {
    React.useEffect(() => {
        movies.getAll({ page: 1 }).then((r) => {
            console.log(r.data.results)
        })
    });
  return (
      <>
          <div>  <NavBar /></div>
          <section>
              <MovieInfo />
          </section> 
      </>
  )
}

export default Home