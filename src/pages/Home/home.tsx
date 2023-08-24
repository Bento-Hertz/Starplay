import Trending from './Trending/trending';
import style from './home.module.scss';
import contentList from 'data/contents.json';
import Contents from 'components/Contents/contents';

export default function Home() {

    const recommendedContents = contentList.filter(content => content.trending === false);

    return (
        <main className={style.home}>
            <Trending />
            <Contents category='Recommended for you' contentList={recommendedContents}/>
        </main>
    );
}