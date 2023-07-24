import { configureStore } from '@reduxjs/toolkit';

import commentsReducer from '../redux/store/posts/comments';
import postsReducer from '../redux/store/posts/posts';
// import storeReducer from '../redux/storeResourse/store.js';

export default configureStore( {
      reducer:{
        posts :postsReducer,
        comments : commentsReducer,
      }
})

