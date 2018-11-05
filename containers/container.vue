<template>
  <div class="app">
    <div class="heading">
      <span class="title"><nuxt-link to='/' @click.native="clearActiveTags">miloševo suho grožđe</nuxt-link></span>
      <span class="description">kdo je dal rozine v to potico ffs</span>
      <ul class="nav">
        <li v-for="{tags, section} in sections">
          <nuxt-link :to="{name: 'section', params: {section: section}}" @click.native="clearActiveTags">{{ section }}</nuxt-link>
          <ul v-show="section === activeSection">
            <li v-for="tag in tags"><a href="#" @click.prevent="clickTag({tag, section, $router})" :class="{active: activeTags.includes(tag)}">{{ tag }}</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <hr>
    <div class="content">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import _ from 'lodash'

export default {
  fetch ({app, store}) {
    let sections = {}
    // console.error(process.env.NODE_ENV)
    const promise = app.$content('articles').query({ exclude: 'body' }).getAll().then((response) => {
      response.forEach((article) => {
        let section = article.meta.section.substr(1);
        if (article.tags){
          if (!sections[section]) sections[section] = article.tags
          else sections[section] = _.union(sections[section], article.tags)
        } else {
          if (!sections[section]) sections[section] = []
        }
      })
      //sort articles by date
      const sortedArticles = response.sort((a, b) => {
        return a.date < b.date ? 1 : -1
      });
      // make an array of tuples so it's orderable and then order it (mathematics first)
      const sectionsTuples = Object.keys(sections)
      .map((section) => {
        let tags = sections[section]
        return {section, tags}
      })
      .sort((a, b) => {
        if(b.section == 'mathematics') return 1
        return 0
      })
      store.commit('updateArticles', response)
      store.commit('updateSections', sectionsTuples)
    })

    return promise
  },
  computed: {
    ...mapGetters(['sections', 'activeSection', 'activeTags'])
  },
  methods: {
    ...mapActions(['clickTag']),
    ...mapMutations(['clearActiveTags'])
  },
  // updated() {
  //   this.$nextTick(() => {
  //     MathJax.Hub.Queue(
  //       ["PreProcess", MathJax.Hub],
  //       ["Typeset", MathJax.Hub],
  //       ["resetEquationNumbers", MathJax.InputJax.TeX],
  //       // ["Reprocess", MathJax.Hub]
  //     )
  //   })
  // }
}
</script>

<style lang="scss">
@import "~assets/app";

html{
  font-family: $serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body{
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  background: #111;
  color: #222;
  box-sizing: border-box;
}

::selection {
  background: #0f877f; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #0f877f; /* Gecko Browsers */
}

.mathjax-commands {
  display: none;
}

a {
  color: $bordeaux;
  font-family: $mono;
  text-decoration: none;
  border-bottom: 1px dashed $bordeaux;
  line-height: 15px
}
a:hover {
  border-bottom: 1px solid $bordeaux
}

.app{
  display: flex;
  max-width: 1000px;
  @include media-breakpoint-down(sm) {
    display: block;
  }

  &>*{
    box-sizing: border-box;
  }

  hr {
    margin: 0 40px;
    display: none;
    @include media-breakpoint-down(sm) {
      display: block;
    }
  }

  .heading {
    height: 100vh;
    width: 350px;
    padding: 40px;
    position: fixed;
    z-index: 3;
    @include media-breakpoint-down(sm) {
      position: static;
      width: 100%;
      height: auto;
      padding-bottom: 20px;
    }

    span.title {
      font-size: 22px;

      a {
        border-bottom: 0;
        font-family: $serif;
        font-weight: bold;
        color: #fff;
        line-height: 1.2;
        display: block;
      }
    }

    span.description {
      color: #fff
    }

    .nav {
      &>li {
        a.nuxt-link-active, a.router-link-active{
          font-weight: bold;
        }

        &>ul {
          padding-left: 20px;

          &>li>a.active {
            font-weight: bold;
          }
        }
      }
    }
  }

  .content {
    padding: 40px 40px 80px 0;
    width: 100%;
    margin-left: 350px;

    @include media-breakpoint-down(sm) {
      padding: 40px 40px 80px 40px;
      margin-left: 0;
    }
  }
}

hr{
  margin-bottom: 20px;
}
</style>
