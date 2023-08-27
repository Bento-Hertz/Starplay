import { useState } from 'react';
import style from './trending.module.scss';
import ScrollButton from './ScrollButton/scroll-button';
import TrendingContent from './TrendingContent/trending-content';
import { useSelector } from 'react-redux';
import { useContents } from 'redux/slices/sliceContents';

export default function Trending() {

    const [currentContentId, setCurrentContentId] = useState('0');
    
    //filtering contents when loading this component

    const contentList = useSelector(useContents);
    const trendingList = contentList.filter(content => content.trending === true); 

    return (
        <section className={style.trending}>
            <h1>Trending</h1>

            <ScrollButton 
                type='scrollBack' 
                limitOfIds={trendingList.length-1} 
                currentId={currentContentId} 
                whenUpdated={(id) => setCurrentContentId(id)}
            />

            <div id='contents' className={style.contents}>
                {trendingList.map((content, index) => {
                    if(index === 0) 
                        return <TrendingContent key={content.title} id={index} firstChild={true} content={content}/>;
                    else if(index === trendingList.length - 1)
                        return <TrendingContent key={content.title} id={index} lastChild={true} content={content}/>;
                    else
                        return <TrendingContent key={content.title} id={index} content={content}/>;;
                    }
                )}
            </div>

            <ScrollButton 
                type='scrollFront' 
                limitOfIds={trendingList.length-1} 
                currentId={currentContentId} 
                whenUpdated={(id) => setCurrentContentId(id)}
            />

        </section>
    );
}