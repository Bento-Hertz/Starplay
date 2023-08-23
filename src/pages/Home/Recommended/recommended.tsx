import style from './recommended.module.scss';
import movies from 'data/movies.json';
import { useEffect, useState } from 'react';

export default function Recommended() {

    const recommendedMovies = movies.filter(movie => movie.trending === false);

    return (
        <section className={style.recommended}>
            <h1>Recommended</h1>
            <div className={style.movies}>

            </div>
        </section>
    );
}