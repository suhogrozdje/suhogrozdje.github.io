<template>
  <div class="article-listing">
    <div class="date">
      {{ article.date }} // {{ section }}
      <span v-if="article.tags">
        // {{ article.tags.join(', ') }}
      </span>
    </div>
    <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
    <div class="abstract" v-html="article.abstract"></div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      required: true,
      type: Object
    }
  },
  computed: {
    section() {
      return this.article.meta.section.substr(1);
    }
  }
}
</script>

<style lang="scss">
@import "~assets/app";

.article-listing {
  margin-bottom: 20px;

  .date{
    color: #999;
    font-family: $mono;
    font-size: 13px
  }
  & > a {
    font-weight: bold;
    margin-bottom: 10px;
    display: inline;
  }
  .abstract {
    margin-top: 15px
  }
}
</style>
