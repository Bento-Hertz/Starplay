import { useEffect, useState } from 'react';
import TrendMovie from './TrendMovie/trend-movie';
import style from './trending.module.scss';
import movies from 'data/movies.json';

export default function Trending() {

    const [trendMovies, setTrendMovies] = useState(movies);

    //filtering movies when loading this component
    useEffect(() => {
        const filteredMovies = movies.filter(movie => movie.trending === true);
        setTrendMovies(filteredMovies);
    }, []);

    return (
        <section className={style.trending}>
            <h1>Trending</h1>
            <div className={style.movies}>
                {trendMovies.map(movie => 
                    <TrendMovie key={movie.title} {...movie}/>
                )}
            </div>
        </section>
    );
}