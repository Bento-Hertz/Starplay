import Contents from 'components/Contents/contents';
import { useSelector } from 'react-redux';
import { useContents } from 'redux/slices/sliceContents';

export default function TvSeries() {

    const contentList = useSelector(useContents);
    const tvSeries = contentList.filter(content => content.category.name === 'TV Series');

    return (
        <main>
            <Contents category='TV Series' contentList={tvSeries}/>
        </main>
    );
}