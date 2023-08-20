import style from './search-bar.module.scss';
import searchIcon from 'assets/icon-search.svg';

export default function SearchBar() {
    return (
        <div className={style.searchBar}>
            <img src={searchIcon} alt="search" />
            <input type="text" placeholder='Search for movies or Tv Series'/>
        </div>
    );
}