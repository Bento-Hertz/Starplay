import style from './content.module.scss';
import bookmarkIcon from 'assets/icon-bookmark-empty.svg';
import IContent from 'interfaces/IContent';

export default function Content(props: IContent) {

    const {title, releaseDate, ageRestriction, category, images} = props;

    return (
        <div className={style.content}>
            <div className={style.image}>
                <img src={images.regular} alt="" />
            </div>
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
                <div className={style.smallDot2}></div>
                <span className={style.ageRestriction}>{ageRestriction}</span>
            </div>
            <h3>{title}</h3>
        </div>
    );
}