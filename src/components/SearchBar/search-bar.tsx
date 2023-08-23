import style from './search-bar.module.scss';
import searchIcon from 'assets/icon-search.svg';

export default function SearchBar() {
    return (
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <img src={searchIcon} alt="search" />
            </div>
            <input className={style.searchField} type="text" placeholder='Search for movies or Tv Series'/>
        </div>
    );
}