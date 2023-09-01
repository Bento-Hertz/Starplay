import style from './content.module.scss';
import bookmarkIcon from 'assets/icon-bookmark-empty.svg';
import activeBookmarkIcon from 'assets/icon-bookmark-full.svg';
import playIcon from 'assets/icon-play.svg';
import IContent from 'interfaces/IContent';
import { useDispatch } from 'react-redux';
import { bookmark } from 'redux/slices/sliceContents';

export default function Content(props: IContent) {

    const {title, releaseDate, bookmarked, ageRestriction, category, images} = props;

    const dispatch = useDispatch();

    return (
        <article className={style.container}>
            <div className={style.content}>
                <div className={style.imageContainer}>
                    <div className={style.play}>
                        <img src={playIcon} alt="play" />
                        <span>Play</span>
                    </div>
                    <img className={style.contentImage} src={images.regular} alt={title} />
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
                    <div className={style.smallDot2}></div>
                    <span className={style.ageRestriction}>{ageRestriction}</span>
                </div>
                <h3 className={style.title}>{title}</h3>
            </div>
        </article>
    );
}