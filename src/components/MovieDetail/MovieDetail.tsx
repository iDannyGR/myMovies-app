import React from 'react'

const MovieDetail = () => {
  return (
       <div className="flex p-4 w-2/4 h-80  bg-back rounded-lg border shadow-md sm:p-6 dark:bg-white-800 dark:border-white-700">
        <div>
          <img className="object-cover w-96  md:rounded" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" alt="" />
        </div>
      <div className='relative'>
        <p className="absolute right-0 bottom-0 text-2xl" id='average'>Average: 8.5</p>
        <h5 className="mb-2 text-2xl p-2 font-bold tracking-tight text-gray-900 dark:text-black">Peaky Blinders (2013)</h5>
        <p className="mb-3 p-4 font-normal text-justify text-black-700 dark:text-black-400">A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world..</p>
        
      </div>
      <div>

      </div>
    </div>
  )
}

export default MovieDetail