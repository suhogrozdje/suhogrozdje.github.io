module.exports = {
  content: [
    ['articles', {
      page: '/_article',
      permalink: '/:section/:slug',
      generate: [
        'get',
        'getAll'
      ]
    }]
  ],
  api: {
    baseURL: ''
  }
}
