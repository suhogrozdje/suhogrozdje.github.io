<template>
  <article-details-component :article="article"></article-details-component>
</template>

<script>
import {mapGetters} from 'vuex'
import articleDetails from '~/components/article-details.vue'

export default {
  // asyncData: async ({ app, route }) => ({
  //   article: await app.$content('/articles').get(route.path)
  // }),
  fetch ({ app, store, route }) {
    return app.$content('articles').get(route.path).then((response) => {
      store.commit('updateArticle', response)
    });
  },
  head () {
    return {
      title: this.article.title + ' | suhogrozdje'
    }
  },
  computed: {
    ...mapGetters(['article'])
  },
  components: {
    articleDetailsComponent: articleDetails
  }
}
</script>
