import Trending from './Trending/trending';
import style from './home.module.scss';

export default function Home() {
    return (
        <main className={style.home}>
            <Trending />
        </main>
    );
}