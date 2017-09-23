import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index.vue'
import Section from '~/pages/section.vue'
import Article from '~/pages/article.vue'
import Container from '~/containers/container.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '',
        component: Container,
        children: [
          {
            path: '/',
            component: Index
          },
          {
            name: 'article',
            path: '/:section/:article',
            component: Article
          },
          {
            name: 'section',
            path: '/:section',
            component: Section
          }
        ]
      }
    ]
  })
}
