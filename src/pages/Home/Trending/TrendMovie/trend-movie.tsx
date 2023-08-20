/* eslint-disable react-hooks/exhaustive-deps */
import Movie from 'interfaces/Movie';
import style from './trend-movie.module.scss';
import { useEffect, useState } from 'react';
import bookmarkIcon from 'assets/icon-bookmark-empty.svg';
import classNames from 'classnames';

interface Props {
    movie: Movie;
    firstChild?: boolean;
    lastChild?: boolean;
}

export default function TrendMovie(props: Props) {

    const {title, releaseDate, ageRestriction, category, images} = props.movie;
    const {firstChild=false, lastChild=false} = props;

    //state for keeping track of the window's width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentImage, setCurrentImage] = useState('');

    //updates state of windowWidth
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    //changes state of currentImage based on the media query's breakpoint
    const setImageSize = () => {
        if(!(images.trending))
            return 0;
        if(windowWidth > 768) {
            setCurrentImage(images.trending.large);
        }
        else {
            setCurrentImage(images.trending.small);
        }
    }

    useEffect(() =>{
        //adds a event listener when the component is loaded and removes it when the component is destructed
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);

    //calls handleResize() every time the window is resized
    useEffect(() => {
        setImageSize();
    }, [windowWidth]);

    return (
        <div className={classNames({
            [style.movie]: true,
            [style.movie__firstChild]: firstChild,
            [style.movie__lastChild]: lastChild
        })}>
            <img className={style.movieImage} src={currentImage} alt={title} />
            <div className={style.info}>
                <button className={style.bookmark}>
                    <img src={bookmarkIcon} alt="bookmark" />
                </button>
                <div className={style.description}>
                    <span>{releaseDate}</span>
                    <div className={style.smallDot}></div>
                    <div className={style.category}>
                        <img src={category.icon} alt={category.name} />
                        <span>{category.name}</span>
                    </div>
                    <div className={style.smallDot}></div>
                    <span>{ageRestriction}</span>
                </div>
                <h2>{title}</h2>
            </div>
        </div>
    );
}