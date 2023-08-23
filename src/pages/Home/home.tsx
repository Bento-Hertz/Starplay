import Movies from 'components/Movies/movie-list';
import Trending from './Trending/trending';
import style from './home.module.scss';
import movieList from 'data/movies.json';

export default function Home() {

    const recommendedMovies = movieList.filter(movie => movie.trending === false);

    return (
        <main className={style.home}>
            <Trending />
            <Movies category='Recommended for you' movieList={recommendedMovies}/>
        </main>
    );
}