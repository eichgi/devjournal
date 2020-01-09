module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dev Journal',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Un diario para desarrolladores'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#AA3939',
    height: '5px',
  },
  /*
  ** Global CSS
  */
  css: [
    {src: '@/assets/css/main.scss', lang: 'sass'},
    {src: 'bulma/bulma.sass', lang: 'sass'},
    {src: 'font-awesome/scss/font-awesome.scss', lang: 'scss'},
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: 'UA-121810463-1'
    }],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  env: {},
}
