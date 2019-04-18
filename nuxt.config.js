const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat|Material+Icons'
      }
    ]
  },

  // prueba de middleware
  serverMiddleware: ['~/api/index'],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff0375', height: '10px', duration: 5000 },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl', '~/assets/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/firebase', // BaaS Provider firebase
    '@/plugins/vuetify', // UI Components vuetify
    '@/plugins/swal', // Notificaciones Sweetalert2
    '@/plugins/date-filter', // Filtro de formato de fechas
    '@/plugins/core-components' // registro global de componentes
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
