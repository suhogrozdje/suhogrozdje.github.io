module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "suhogrozdje's write-offs",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'personal mathematical write-off leaflet with an occasionally dreadful narrative' }
    ],
    link: [
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700&subset=latin-ext'
      // },
      {
        rel: 'stylesheet',
        href: '/fonts/cmun-serif.css'
      }
    ]
  },
  modules: [
   'nuxtent',
   '@nuxtjs/router'
  //  'axios'
  ],
  plugins: [
    {src: '~/plugins/vuex-router-sync.js'}
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'lodash'
    ]
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  generate: {
    routes: [
      '/',
      '/mathematics',
      '/dread',
      '/music'
    ]
  }
}
