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
    title: 'We Wash',
    description: 'All the modern best practices in one example.',
    meta: {
      charSet: 'utf-8',
      property: {
        // 'og:site_name': '',
        // 'og:image': 'https://react-redux.herokuapp.com/logo.jpg',
        // 'og:locale': 'en_US',
        // 'og:title': 'We Wash',
        // 'og:description': 'All the modern best practices in one example.',
        // 'twitter:card': 'summary',
        // 'twitter:site': '@erikras',
        // 'twitter:creator': '@erikras',
        // 'twitter:title': 'React Redux Example',
        // 'twitter:description': 'All the modern best practices in one example.',
        // 'twitter:image': 'https://react-redux.herokuapp.com/logo.jpg',
        // 'twitter:image:width': '200',
        // 'twitter:image:height': '200'
      }
    }
  }
}, environment);
