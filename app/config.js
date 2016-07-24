// *************************************************************************
// * Copyright (C) 2016 Eletrônica Farias Franco LTDA - Todos os direitos reservados.
// *
// * This file is part of Brasilcap Blog Project.
// * The complete set of authors may be found at http://www.effy.com.br
// * Unauthorized copying of this file, via any medium is strictly prohibited
// * This code can not be copied and/or distributed without the express
// * permission of EFFY
// * Effy - support@effy.com.br
// *************************************************************************

require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT) || 3100,
  app: {
    title: 'Zero Perrengue',
    description: 'Blog da Brasilcap, empresa líder em capitalização.',

    meta: {
      author: 'Effy Ltda. - www.effy.com.br',
      charSet: 'utf-8',
      property: {

      }
    }
  }
}, environment);
