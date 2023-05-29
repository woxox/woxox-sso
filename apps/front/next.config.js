const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  reactStrictMode: true,
  rewrites: [
    {
      source: '/api/',
      destination: 'http://localhost:3001/api/',
    },
  ]
})