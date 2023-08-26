import { useContents } from 'redux/slices/sliceContents';
import Trending from './Trending/trending';
import style from './home.module.scss';
import Contents from 'components/Contents/contents';
import { useSelector } from 'react-redux';

export default function Home() {
    
    const contentList = useSelector(useContents);
    const recommendedContents = contentList.filter(content => content.trending === false);

    return (
        <main className={style.home}>
            <Trending />
            <Contents category='Recommended for you' contentList={recommendedContents}/>
        </main>
    );
}