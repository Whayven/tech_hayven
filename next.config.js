const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
  env: {
    API_URL: process.env.API_URL
}
})