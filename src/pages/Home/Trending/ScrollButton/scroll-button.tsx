import classNames from 'classnames';
import style from './scroll-button.module.scss';
import { Link } from 'react-scroll';

interface Props {
    type: string;
    currentId: string;
    limitOfIds: number;
    whenUpdated: (newCurrentId: string) => void;
}

export default function ScrollButton(props: Props) {

    const {type, currentId, limitOfIds, whenUpdated} = props;

    let idIncrement = 2;
    if(type === 'scrollBack') {
        idIncrement = -2;
    }
    
    //increments the currentMovieId with a specified value
    function onIncrementingId(increment: number) {
        return Number(currentId) + increment;
    }

    //sets a new state for the current movie id
    function selectNextId(increment: number) {
        const newId = onIncrementingId(increment);
        if(newId < 0)
            whenUpdated('0');
        else if(newId > limitOfIds)
            whenUpdated(String(limitOfIds));
        else
            whenUpdated(String(newId));
    }

    //returns a new current movie id
    function destination(increment: number) {
        const newId = onIncrementingId(increment);
        if(newId < 0)
            return '0';
        else if(newId > limitOfIds)
            return String(limitOfIds);
        else
            return String(newId);
    }


    return (
        <Link 
                className={classNames({
                    [style.scrollBack]: type === 'scrollBack',
                    [style.scrollFront]: type === 'scrollFront',
                    [style.hideScroll]: (type === 'scrollFront' && currentId === String(limitOfIds)) || (type === 'scrollBack' && currentId === '0')
                })} 
                to={destination(idIncrement)} 
                onClick={() => selectNextId(idIncrement)} 
                containerId='movies' 
                duration={500} 
                offset={-30} 
                smooth 
                horizontal 
                ignoreCancelEvents       
            >
                {type === 'scrollBack' ?
                    <i className="fa-solid fa-caret-left"></i>
                    :
                    <i className="fa-solid fa-caret-right"></i>
                }
        </Link>
    );
}