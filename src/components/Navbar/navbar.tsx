import style from './navbar.module.scss';
import logo from 'assets/logo.svg';
import homeIcon from 'assets/navbar/icon-nav-home.svg';
import moviesIcon from 'assets/navbar/icon-nav-movies.svg';
import tvSeriesIcon from 'assets/navbar/icon-nav-tv-series.svg';
import bookmarkIcon from 'assets/navbar/icon-nav-bookmark.svg';
import profileIcon from 'assets/image-avatar.png';

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <a className={style.logo} href='typescript:void(0)'>
                <img src={logo} alt="logo" />
            </a>
            <ul>
                <li>
                    <a href='typescript:void(0)'>
                        <img src={homeIcon} alt="home" />
                    </a>
                </li>
                <li>
                    <a href='typescript:void(0)'>
                        <img src={moviesIcon} alt="movies" />
                    </a>
                </li>
                <li>
                    <a href='typescript:void(0)'>
                        <img src={tvSeriesIcon} alt="tv series" />
                    </a>
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