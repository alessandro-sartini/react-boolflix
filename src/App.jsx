import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
import Main from './components/Main';
import DefaultLayout from './layout/DefaultLayout';

// GlobalProvider
import {GlobalProvider} from './context/GlobalContext'
import FilmsPage from "./pages/FilmsPage";
import TvShowsPage from "./pages/TvShowsPage";
function App() {

  return (

    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          

          <Route path="/" Component={DefaultLayout}>
          
            <Route path="/" Component={Main} />
            <Route path="/films" element={<FilmsPage type="movies" />} />
            <Route path="/tvshows" element={<TvShowsPage type="tv" />} />
            {/* <Route path="/tvshows" Component={TvShowsPage} /> */}
            
          
              {/* <Header/> */}
           
          </Route>
         
       
        </Routes>
        
      
      </BrowserRouter>
     
    </GlobalProvider>
  );
}

export default App;
