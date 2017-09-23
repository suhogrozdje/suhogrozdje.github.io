<template>
  <div class="article">
    <h1>{{ article.title }}</h1>
    <div class="article-details">
      {{ article.date }} // {{ section }}
    </div>
    <div class="article-abstract" v-html="article.abstract"></div>
    <section class="article-body">
      <nuxtent-body :body="article.body" />
    </section>
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

.article{
  counter-reset: definition theorem;

  h1{
    font-size: 22px;
    margin: 0;
    line-height: 1.2;
  }
  .article-abstract {
    margin-top: 10px;
    font-family: $serif;
    text-align: justify;
  }
  .article-details {
    color: #999;
    font-size: 13px;
    font-family: $mono;
  }
  .article-body {
    text-align: justify;
    font-family: $serif;

    .theorem {
      display: block;
      margin: 12px 0;
      font-style: italic;
      border: 1px solid #000;
      padding: 10px;
    }
    .theorem:before {
      counter-increment: theorem;
      content: "Theorem " counter(theorem) " (" attr(data-title) "). ";
      font-weight: bold;
      font-style: normal;
    }
    .theorem[data-title=""]::before, .theorem:not([data-title])::before {
      content: "Theorem " counter(theorem) ". ";
    }
    .lemma {
      display: block;
      margin: 12px 0;
      font-style: italic;
      border: 1px solid #000;
      padding: 10px;
    }
    .lemma:before {
      content: "Lemma. ";
      font-weight: bold;
      font-style: normal;
    }
    .proof {
      display: block;
      margin: 12px 0;
      padding: 10px 0 10px 8px;
      // background: #f7f7f7;
      border-left: 3px solid #eee;
      font-style: normal;
    }
    .proof:before {
      content: "Proof. ";
      font-style: italic;
    }
    .proof:after {
      content: "\25FB";
      float:right;
    }
    .definition {
      display: block;
      margin: 12px 0;
      font-style: normal;
      border: 1px solid #000;
      padding: 10px;
    }
    .definition:before {
      counter-increment: definition;
      content: "Definition " counter(definition) " (" attr(data-title) "). ";
      font-weight: bold;
      font-style: normal;
    }
    .definition[data-title=""]::before, .definition:not([data-title])::before {
      content: "Definition " counter(definition) ". ";
    }
  }
}
</style>
