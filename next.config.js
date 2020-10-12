/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([
  [withImages, { esModule: true }],

  {
    trailingSlash: true,

    reactStrictMode: true,

    typescript: {
      ignoreBuildErrors: true,
    },
  },
])
