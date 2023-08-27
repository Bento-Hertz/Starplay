import { useNavigate } from 'react-router-dom';
import style from './search-bar.module.scss';
import searchIcon from 'assets/icon-search.svg';
import { useState } from 'react';

interface Props {
    onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: Props) {

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSearch(search);
        navigate(`search`);
    }

    return (
        <form className={style.searchBar} onSubmit={(e) => handleSubmit(e)}>
            <div className={style.searchIcon}>
                <img src={searchIcon} alt="search" />
            </div>
            <input onChange={(e) => setSearch(e.target.value)} value={search} className={style.searchField} type="text" placeholder='Search for movies or TV series' required/>
        </form>
    );
}