import { useState } from 'react';
import TrendMovie from './TrendMovie/trend-movie';
import style from './trending.module.scss';
import movies from 'data/movies.json';
import ScrollButton from './ScrollButton/scroll-button';

export default function Trending() {

    const [currentMovieId, setCurrentMovieId] = useState('0');
    
    //filtering movies when loading this component
    const trendMovies = movies.filter(movie => movie.trending === true); 

    return (
        <section className={style.trending}>
            <h1>Trending</h1>

            <ScrollButton 
                type='scrollBack' 
                limitOfIds={trendMovies.length-1} 
                currentId={currentMovieId} 
                whenUpdated={(id) => setCurrentMovieId(id)}
            />

            <div id='movies' className={style.movies}>
                {trendMovies.map((movie, index) => {
                    if(index === 0) 
                        return <TrendMovie key={movie.title} id={index} firstChild={true} movie={movie}/>;
                    else if(index === trendMovies.length - 1)
                        return <TrendMovie key={movie.title} id={index} lastChild={true} movie={movie}/>;
                    else
                        return <TrendMovie key={movie.title} id={index} movie={movie}/>;;
                    }
                )}
            </div>

            <ScrollButton 
                type='scrollFront' 
                limitOfIds={trendMovies.length-1} 
                currentId={currentMovieId} 
                whenUpdated={(id) => setCurrentMovieId(id)}
            />

        </section>
    );
}