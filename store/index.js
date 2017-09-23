import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    article: {},
    articles: [],
    sections: {},
    activeTags: []
  },
  getters: {
    articles: state => state.articles,
    article: state => state.article,
    activeSection: state => state.route.params.section,
    sections: state => state.sections,
    activeTags: state => state.activeTags
  },
  mutations: {
    updateSections (state, sections) {
      state.sections = sections
    },
    updateArticles (state, articles) {
      state.articles = articles
    },
    updateArticle (state, article) {
      state.article = article
    },
    toggleTag (state, tag) {
      // functionality for multiple tags selected, currently not used
      let index = state.activeTags.indexOf(tag)
      if (index > -1) state.activeTags.splice(index, 1)
      else state.activeTags.push(tag)
    },
    activateTag (state, tag) {
      // functionality for one tag
      state.activeTags = [tag]
    },
    clearActiveTags (state) {
      state.activeTags = []
    }
  },
  actions: {
    clickTag ({ state, commit }, { $router, tag, section }) {
      commit('activateTag', tag)
      if (state.route.name != 'section' && section !== undefined && $router !== undefined) {
        $router.push({
          name: 'section',
          params: {section: section}
        })
      }
    }
  },
  modules: {
  }
})

export default store
