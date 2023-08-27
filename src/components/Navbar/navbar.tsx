import style from './navbar.module.scss';
import logo from 'assets/logo.svg';
import profileIcon from 'assets/image-avatar.png';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from 'assets/navbar/icon-nav-home.svg';
import moviesIcon from 'assets/navbar/icon-nav-movies.svg';
import tvSeriesIcon from 'assets/navbar/icon-nav-tv-series.svg';
import bookmarkIcon from 'assets/navbar/icon-nav-bookmark.svg';
import activeHomeIcon from 'assets/navbar/active/icon-nav-home.svg';
import activeMoviesIcon from 'assets/navbar/active/icon-nav-movies.svg';
import activeTvSeriesIcon from 'assets/navbar/active/icon-nav-tv-series.svg';
import activeBookmarkIcon from 'assets/navbar/active/icon-nav-bookmark.svg';
import { useEffect, useState } from 'react';

export default function Navbar() {

    const [activePage, setActivePage] = useState('');
    
    const location = useLocation().pathname;
    //sets an active icon based on the current location
    useEffect(() => {
        if(location.includes('/movies'))
            setActivePage('movies');
        else if(location.includes('/tv-series'))
            setActivePage('tv-series');
        else if(location.includes('/bookmarked'))
            setActivePage('bookmarked');
        else if(location.includes('/search'))
            setActivePage('');
        else
            setActivePage('home');
    }, [location]);



    return (
        <nav className={style.navbar}>
            <Link className={style.logo} to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to='/'>
                        <img src={activePage==='home' ? activeHomeIcon : homeIcon} alt="home" />
                    </Link>
                </li>
                <li>
                    <Link to='movies'>
                        <img src={activePage==='movies' ? activeMoviesIcon : moviesIcon} alt="movies" />
                    </Link>
                </li>
                <li>
                    <Link to='tv-series'>
                        <img src={activePage==='tv-series' ? activeTvSeriesIcon : tvSeriesIcon} alt="tv series" />
                    </Link>
                </li>
                <li>
                    <Link to='bookmarked'>
                        <img src={activePage==='bookmarked' ? activeBookmarkIcon : bookmarkIcon} alt="bookmarked" />
                    </Link>
                </li>
            </ul>
            <a className={style.profileIcon} href='typescript:void(0)'>
                <img src={profileIcon} alt="profile avatar" />
            </a>
        </nav>
    );
}