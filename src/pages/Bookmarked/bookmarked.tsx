import Contents from "components/Contents/contents";
import { useSelector } from 'react-redux';
import { useContents } from "redux/slices/sliceContents";

export default function Bookmarked() {

    const contentList = useSelector(useContents);
    const bookmarkedList = contentList.filter(content => content.bookmarked === true);

    return (
        <main>
            <Contents category='Bookmarked' contentList={bookmarkedList}/>
        </main>
    );
}