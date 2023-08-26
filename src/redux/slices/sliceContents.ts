import { createSlice } from '@reduxjs/toolkit';
import IContent from 'interfaces/IContent';
import contentList from 'data/contents.json';

const INITIAL_STATE: IContent[] = contentList;

const sliceContents = createSlice({
    name: 'contents',
    initialState: INITIAL_STATE,
    reducers: {
        bookmark(state, action) {
            return state.map(content => content.title === action.payload ? {...content, bookmarked: !content.bookmarked} : content);
        }
    }
});

export default sliceContents.reducer;

export const { bookmark } = sliceContents.actions;
export const useContents = (state: any) => {
    return state.contents as IContent[];
}