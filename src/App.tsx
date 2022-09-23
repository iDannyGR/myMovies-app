import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './assets/sass/global.scss'
import Login from './pages/Login'
import { NotFound } from 'components/404'
import Home from 'pages/Home';

// import Search from './components/NavbarSearch/Search/Search'
//import { MovieDetail } from 'components/MovieDetail'

const App = ()=> {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
      {/* <NavBar />
      <Search/>
      <MovieInfo /> */}
      
      
    </div>
  );
}

export default App;
