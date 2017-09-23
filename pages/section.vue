<template>
  <section class="container">
    <article-listing-component v-for="article in filteredArticles" :article="article" :key="article.id"></article-listing-component>
    <div v-if="!filteredArticles.length">
      No {{ activeSection }}-related articles yet.
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import ArticleListing from '~/components/article-listing.vue'

export default {
  components: {
    articleListingComponent: ArticleListing
  },
  computed: {
    ...mapGetters(['articles', 'activeSection', 'activeTags']),
    filteredArticles() {
      return this.articles.filter((article) => {
        const tagFilter =
        this.activeTags.length > 0
        ? article.tags
          ? article.tags.filter((tag) => this.activeTags.includes(tag)).length > 0
          : false
        : true

        return article.meta.section.substr(1) === this.activeSection
        && tagFilter
      })
    }
  },
  head () {
    return {
      title: this.activeSection + ' | suhogrozdje'
    }
  },
}
</script>

<style>

</style>
