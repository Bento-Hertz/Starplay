import Navbar from "components/Navbar/navbar";
import SearchBar from "components/SearchBar/search-bar";
import Home from "pages/Home/home";
import Movies from "pages/Movies/movies";
import TvSeries from "pages/TvSeries/tv-series";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <SearchBar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/tv-series' element={<TvSeries />}/>
                <Route path='/movies' element={<Movies />}/>
            </Routes>
        </BrowserRouter>
    );
}