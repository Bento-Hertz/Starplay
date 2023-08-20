/* eslint-disable react-hooks/exhaustive-deps */
import Movie from 'interfaces/Movie';
import style from './trend-movie.module.scss';
import { useEffect, useState } from 'react';

export default function TrendMovie(props: Movie) {

    const {title, releaseDate, ageRestriction, trending, category, images} = props;

    //state for keeping track of the window's width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentImage, setCurrentImage] = useState('');

    //updates state of windowWidth
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    //changes state of currentImage based on the media query's breakpoint
    const setImageSize = () => {
        if(windowWidth > 768) {
            setCurrentImage(images.trending.large);
        }
        else {
            setCurrentImage(images.trending.small);
        }
    }

    useEffect(() =>{
        //sets image size for the first time
        setImageSize();
        
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
        <div className={style.movie}>
            <img src={currentImage} alt={title} />
        </div>
    );
}