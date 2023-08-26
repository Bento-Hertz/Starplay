import { configureStore } from '@reduxjs/toolkit';
import sliceContents from './slices/sliceContents';

const store = configureStore({
    reducer: {
        contents: sliceContents
    }
});

export default store;