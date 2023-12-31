import IContent from 'interfaces/IContent';
import style from './trending-content.module.scss';
import { useEffect, useState } from 'react';
import bookmarkIcon from 'assets/icon-bookmark-empty.svg';
import activeBookmarkIcon from 'assets/icon-bookmark-full.svg';
import playIcon from 'assets/icon-play.svg';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { bookmark } from 'redux/slices/sliceContents';

interface Props {
    content: IContent;
    id: number;
    firstChild?: boolean;
    lastChild?: boolean;
}

export default function TrendingContent(props: Props) {

    const {title, releaseDate, bookmarked, ageRestriction, category, images} = props.content;
    const {id, firstChild=false, lastChild=false} = props;

    const [currentImage, setCurrentImage] = useState('');
    
    const strId = `${id}`;

    const dispatch = useDispatch();

    //changes state of currentImage based on the media query's breakpoint
    const setImgSize = () => {
        if(!images.trending)
            return 0;
        if(window.innerWidth >= 768) {
            setCurrentImage(images.trending.large);
        }
        else {
            setCurrentImage(images.trending.small);
        }
    }

    useEffect(() =>{
        setImgSize();
        //adds a event listener when the component is loaded and removes it when the component is destructed
        window.addEventListener('resize', setImgSize);
        return () => {
            window.removeEventListener('resize', setImgSize);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div id={strId} className={classNames({
            [style.content]: true,
            [style.content__firstChild]: firstChild,
            [style.content__lastChild]: lastChild
        })}>
            <div className={style.imageContainer}>
                <img className={style.contentImage} src={currentImage} alt={title} />
            </div>
            <div className={style.info}>
                <div className={style.play}>
                    <img src={playIcon} alt="play" />
                    <span>Play</span>
                </div>
                <button className={style.bookmark} onClick={() => dispatch(bookmark(title))}>
                    <img src={bookmarked ? activeBookmarkIcon : bookmarkIcon} alt="bookmark" />
                </button>
                <div className={style.description}>
                    <span>{releaseDate}</span>
                    <div className={style.smallDot}></div>
                    <div className={style.category}>
                        <img src={category.icon} alt="" />
                        <span>{category.name}</span>
                    </div>
                    {currentImage === images.trending?.large ? <div className={style.smallDot}></div> : <></>}
                    <span className={style.ageRestriction}>{ageRestriction}</span>
                </div>
                <h3>{title}</h3>
            </div>
        </div>
    );
}