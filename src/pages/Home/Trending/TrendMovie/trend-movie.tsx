/* eslint-disable react-hooks/exhaustive-deps */
import Movie from 'interfaces/Movie';
import style from './trend-movie.module.scss';
import { useEffect, useState } from 'react';
import bookmarkIcon from 'assets/icon-bookmark-empty.svg';
import classNames from 'classnames';

interface Props {
    movie: Movie;
    id: number;
    firstChild?: boolean;
    lastChild?: boolean;
}

export default function TrendMovie(props: Props) {

    const {title, releaseDate, ageRestriction, category, images} = props.movie;
    const {id, firstChild=false, lastChild=false} = props;

    const [currentImage, setCurrentImage] = useState('');
    
    const strId = `${id}`;

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
    },[]);

    return (
        <div id={strId} className={classNames({
            [style.movie]: true,
            [style.movie__firstChild]: firstChild,
            [style.movie__lastChild]: lastChild
        })}>
            <div className={style.movieImage}>
                <img src={currentImage} alt="" />
            </div>
            <div className={style.info}>
                <button className={style.bookmark}>
                    <img src={bookmarkIcon} alt="bookmark" />
                </button>
                <div className={style.description}>
                    <span>{releaseDate}</span>
                    <div className={style.smallDot}></div>
                    <div className={style.category}>
                        <img src={category.icon} alt="" />
                        <span>{category.name}</span>
                    </div>
                    <div className={style.smallDot}></div>
                    <span className={style.ageRestriction}>{ageRestriction}</span>
                </div>
                <h2>{title}</h2>
            </div>
        </div>
    );
}