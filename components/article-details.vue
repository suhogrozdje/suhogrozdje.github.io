<template>
  <div class="article">
    <h1>{{ article.title }}</h1>
    <div class="article-details">
      {{ article.date }} // {{ section }}
    </div>
    <div class="article-abstract" v-html="article.abstract" v-if="article.abstract"></div>
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
    color: #fff;
  }
  .article-abstract {
    margin-top: 10px;
    font-family: $serif;
    text-align: left;
    background: #9b0f55;
    padding-top: 7px;
  }
  .article-details {
    color: #ccc;
    font-size: 13px;
    font-family: $mono;
  }
  .article-body {
    text-align: left;
    font-family: $serif;
    color: #fff;
    line-height: 26px;
    background: #9b0f55;

    ul, ol {
      margin: 10px;
      padding: 0;
      padding-left: 20px;
    }

    .theorem, .lemma, .example, .definition {
      display: block;
      margin: 12px 0;
      font-style: italic;
      border: 1px solid #000;
      padding: 10px;
    }

    .definition, .example {
      font-style: normal;
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

    .lemma:before {
      content: "Lemma. ";
      font-weight: bold;
      font-style: normal;
    }

    .example:before {
      content: "Example. ";
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
    .proof span.qed:before {
      content: "\25FB";
      float:right;
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
