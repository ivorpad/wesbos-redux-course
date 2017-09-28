import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import ivor from './ivor';

// We need to combine all the reducers into one big reducer with combine
// reducers
const rootReducer = combineReducers({ posts, comments, ivor, routing: routerReducer });

export default rootReducer;