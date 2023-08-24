import style from './navbar.module.scss';
import logo from 'assets/logo.svg';
import homeIcon from 'assets/navbar/icon-nav-home.svg';
import moviesIcon from 'assets/navbar/icon-nav-movies.svg';
import tvSeriesIcon from 'assets/navbar/icon-nav-tv-series.svg';
import bookmarkIcon from 'assets/navbar/icon-nav-bookmark.svg';
import profileIcon from 'assets/image-avatar.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <a className={style.logo} href='typescript:void(0)'>
                <img src={logo} alt="logo" />
            </a>
            <ul>
                <li>
                    <Link to='/'>
                        <img src={homeIcon} alt="home" />
                    </Link>
                </li>
                <li>
                    <a href='typescript:void(0)'>
                        <img src={moviesIcon} alt="movies" />
                    </a>
                </li>
                <li>
                    <Link to='/tv-series'>
                        <img src={tvSeriesIcon} alt="tv series" />
                    </Link>
                </li>
                <li>
                    <a href='typescript:void(0)'>
                        <img src={bookmarkIcon} alt="bookmark" />
                    </a>
                </li>
            </ul>
            <a className={style.profileIcon} href='typescript:void(0)'>
                <img src={profileIcon} alt="profile avatar" />
            </a>
        </nav>
    );
}