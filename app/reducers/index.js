import { combineReducers } from 'redux';
import category from './categories';
import postsByCategory from './postsByCategory';
import postOpened from './postOpened';
import { routeReducer } from 'react-router-redux';


var reducers =  {
    category:category,
    postsByCategory: postsByCategory,
    postOpened: postOpened
};

export default reducers;
module.exports=reducers;
