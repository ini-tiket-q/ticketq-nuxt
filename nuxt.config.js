export default {
  ssr: false,
  target: 'server',

  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8000
  },

  urlConfig: {
    base_url: process.env.BASE_URL
  },

  serverMiddleware: [
    (req, res, next) => {
      res.removeHeader('Referrer-Policy');
      next();
    }
  ],

  head: {
    titleTemplate: '%s ' + process.env.TITLE,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700&display=swap' }
    ]
  },

  css: ['~/assets/style/_allBundle.less'],

  plugins: [
    { src: '~/plugins/api.js' },
    { src: '~/plugins/local.js', mode: 'client' },
    { src: '~/plugins/vue-moment.js', mode: 'client' },
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/vue-datepicker.js', mode: 'client' },
    { src: '~/plugins/vuefinalmodal.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/solid/nuxt'
  ],

  modules: [
    '@nuxtjs/axios',
    'v-wave/nuxt',
    'vue-currency-filter/nuxt',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api': {
      target: 'https://web.klikmbc.biz/json',
      pathRewrite: { '^/api': '' }
    }
  },

  axios: { baseURL: process.env.API_BASE_URL },

  build: {
    transpile: ['vue-final-modal']
  },

  currencyFilter: [
    {
      name: 'numberEN',
      symbol: '',
      thousandsSeparator: ',',
      fractionCount: 0,
      fractionSeparator: '.',
      symbolPosition: 'front',
      symbolSpacing: true,
      avoidEmptyDecimals: undefined
    },
    {
      name: 'currencyIDR',
      symbol: 'Rp',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: ',',
      symbolPosition: 'front',
      symbolSpacing: true,
      avoidEmptyDecimals: undefined
    }
  ]
}
