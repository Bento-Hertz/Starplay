import Contents from "components/Contents/contents";
import { useSelector } from 'react-redux';
import { useContents } from "redux/slices/sliceContents";

export default function Movies() {

    const contentList = useSelector(useContents);
    const movies = contentList.filter(content => content.category.name === 'Movie') ;

    return (
        <main>
            <Contents category='Movies' contentList={movies}/>
        </main>
    );
}