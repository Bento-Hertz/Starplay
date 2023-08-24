import Contents from 'components/Contents/contents';
import contentList from 'data/contents.json';

export default function TvSeries() {

    const tvSeries = contentList.filter(content => content.category.name === 'TV Series');

    return (
        <main>
            <Contents category='TV Series' contentList={tvSeries}/>
        </main>
    );
}