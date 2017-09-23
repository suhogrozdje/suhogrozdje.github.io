<template>
  <section class="container">
    <!-- <articles></articles> -->
    <article-listing-component v-for="article in articles" :article="article" :key="article.id"></article-listing-component>
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
    ...mapGetters(['articles'])
  },
  head () {
    return {
      title: "suhogrozdje's write-offs"
    }
  },
}
</script>

<style>

</style>
