import Contents from "components/Contents/contents";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useContents } from "redux/slices/sliceContents";

interface Props {
    search: string;
}

export default function SearchedContents({ search }: Props) {

    const contentList = useSelector(useContents);
    const searchFilter = contentList.filter(content => content.title.toLowerCase().includes(search.toLowerCase()));

    if(search.length > 0)
        return (
            <main> 
                <Contents category={`Results for "${search}"`} contentList={searchFilter}/>
            </main>
        );
    else
        return <Navigate to='/'/>
}