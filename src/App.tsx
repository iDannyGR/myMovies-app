import React from 'react';
import './assets/sass/global.scss'
import Login from './pages/Login'
import { MovieInfo } from 'components/MovieInfo';

const App = ()=> {
  return (
    <div className="App">
     <Login/>
     <MovieInfo />
    </div>
  );
}

export default App;
