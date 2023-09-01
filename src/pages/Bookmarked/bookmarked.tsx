import Contents from "components/Contents/contents";
import { useSelector } from 'react-redux';
import { useContents } from "redux/slices/sliceContents";
import style from './bookmark.module.scss';

export default function Bookmarked() {

    const contentList = useSelector(useContents);
    const bookmarkedList = contentList.filter(content => content.bookmarked === true);

    return (
        <main>
            <Contents category='Bookmarked' contentList={bookmarkedList}/>
            {bookmarkedList.length === 0 &&
                <p className={style.emptyList}>There are no contents in the bookmarked list. Try adding a new one.</p>
            }
        </main>
    );
}