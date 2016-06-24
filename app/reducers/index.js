import { combineReducers } from 'redux';
import selectedCategory from './selectedCategory';
import postsByCategory from './postsByCategory';
import postOpened from './postOpened';
import { routeReducer } from 'react-router-redux';
import tags from './tags';
import categories from './categories';

var reducers =  {
    selectedCategory:selectedCategory,
    postsByCategory: postsByCategory,
    postOpened: postOpened,
    tags: tags,
    categories: categories
};

export default reducers;
module.exports=reducers;
