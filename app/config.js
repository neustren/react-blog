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
    description: 'All the modern best practices in a blog.',
    meta: {
      charSet: 'utf-8',
      property: {
    
      }
    }
  }
}, environment);
