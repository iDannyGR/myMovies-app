import React ,{ 
  useState
} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './assets/sass/global.scss'
import Login from './pages/Login'
import { NotFound } from 'components/404'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyGlobalContext } from 'hook/useGlobalContext';
// import Search from './components/NavbarSearch/Search/Search'
//import { MovieDetail } from 'components/MovieDetail'
import { NavBar } from 'components/NavbarSearch';
import MovieInfo from './pages/MovieInfo';


const App = ()=> {
  const [searchMovie, setSearchMovie] = useState([])
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<div>
             <MyGlobalContext.Provider value={{searchMovie, setSearchMovie}}>
              <NavBar />
              <Routes>
                <Route path='home' element={<MovieInfo />} />  
              </Routes>
              </MyGlobalContext.Provider>
            </div>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
