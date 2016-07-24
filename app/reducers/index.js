/**
* @license
* Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
*
* This file is part of Brasilcap Blog Project.
* The complete set of authors may be found at http://www.effy.com.br
* Unauthorized copying of this file, via any medium is strictly prohibited
* This code can not be copied and/or distributed without the express
* permission of EFFY
* Effy - support@effy.com.br
*************************************************************************/

import { combineReducers } from 'redux';
import selectedCategory from './selectedCategory';
import postsByCategory from './postsByCategory';
import postOpened from './postOpened';
import { routeReducer } from 'react-router-redux';
import tags from './tags';
import categories from './categories';
import search from './search';
import modal from './modal';

var reducers =  {
    selectedCategory:selectedCategory,
    postsByCategory: postsByCategory,
    postOpened: postOpened,
    tags: tags,
    categories: categories,
    search: search,
    modal: modal
};

export default reducers;
module.exports=reducers;
