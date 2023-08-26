import Navbar from "components/Navbar/navbar";
import SearchBar from "components/SearchBar/search-bar";
import Bookmarked from "pages/Bookmarked/bookmarked";
import Home from "pages/Home/home";
import Movies from "pages/Movies/movies";
import TvSeries from "pages/TvSeries/tv-series";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar />
        <SearchBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/tv-series' element={<TvSeries />}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path='/bookmarked' element={<Bookmarked />}/>
        </Routes>
    </Router>
  );
}

export default App;
