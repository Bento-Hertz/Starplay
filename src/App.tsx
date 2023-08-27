import Navbar from "components/Navbar/navbar";
import SearchBar from "components/SearchBar/search-bar";
import Bookmarked from "pages/Bookmarked/bookmarked";
import Home from "pages/Home/home";
import Movies from "pages/Movies/movies";
import SearchedContents from "pages/SearchedContents/searchedContents";
import TvSeries from "pages/TvSeries/tv-series";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  const [search, setSearch] = useState('');
  
  return (
    <Router>
        <Navbar />
        <SearchBar onSearch={(value) => setSearch(value)}/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<Navigate to='/' />}/>
            <Route path='tv-series' element={<TvSeries />}/>
            <Route path='movies' element={<Movies />}/>
            <Route path='bookmarked' element={<Bookmarked />}/>
            <Route path='search' element={<SearchedContents search={search}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
