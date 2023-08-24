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

export default function Navbar() {

    return (
        <nav className={style.navbar}>
            <Link className={style.logo} to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to='/'>
                        {true ?
                            <img src={homeIcon} alt="home" />
                        : 
                            <img src={activeHomeIcon} alt="home" />
                        }
                    </Link>
                </li>
                <li>
                    <Link to='movies'>
                        {true ?
                            <img src={moviesIcon} alt="movies" />
                        : 
                            <img src={activeMoviesIcon} alt="movies" />
                        }
                    </Link>
                </li>
                <li>
                    <Link to='tv-series'>
                        {true ?
                            <img src={tvSeriesIcon} alt="tv series" />
                        : 
                            <img src={activeTvSeriesIcon} alt="tv series" />
                        }
                    </Link>
                </li>
                <li>
                    <a href='typescript:void(0)'>
                        {true ?
                            <img src={bookmarkIcon} alt="bookmarked" />
                        : 
                            <img src={activeBookmarkIcon} alt="bookmarked" />
                        }
                    </a>
                </li>
            </ul>
            <a className={style.profileIcon} href='typescript:void(0)'>
                <img src={profileIcon} alt="profile avatar" />
            </a>
        </nav>
    );
}