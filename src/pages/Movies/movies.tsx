import Contents from "components/Contents/contents";
import contentList from 'data/contents.json';

export default function Movies() {

    const movies = contentList.filter(content => content.category.name === 'Movie') ;

    return (
        <main>
            <Contents category='Movies' contentList={movies}/>
        </main>
    );
}