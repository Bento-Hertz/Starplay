import Movie from 'components/Movies/Movie/movie';
import style from './movies.module.scss';
import IMovie from 'interfaces/IMovie';

interface Props {
    category: string;
    movieList: IMovie[];
}

export default function Movies(props: Props) {

    const {category, movieList} = props;

    return (
        <section className={style.container}>
            <h1>{category}</h1>
            <div className={style.movies}>
                {movieList.map(movie => (
                    <Movie {...movie}/>
                ))}
            </div>
        </section>
    );
}