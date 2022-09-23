import React, { useEffect } from 'react'
import { api } from 'api/base.api';
const MovieInfo = () => {
//const [movies, setMovies] = useState({});
    

  useEffect(() => {
    const getMovies = async () => {
      const  allMovies  = await api.get("trending/movie/day");
      //setMovies({ movies, data });
      console.log(allMovies)
    }
          getMovies();
  });

  return (
<a href="#" className="flex flex-col m-20 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-black-700 dark:bg-white-800 dark:hover:bg-white-700">
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"></h5>
        <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world..</p>
    </div>
</a>
  )
}

export default MovieInfo