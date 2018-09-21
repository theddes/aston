import api from '../utils/api'

export default {
  data () {
    return {
      blok: this.$options.name.toLowerCase(),
      content: null
    }
  },
  created () {
    this.fetchData()

    if (this.$storyblok) {
      this.$storyblok.init()

      this.$storyblok.on(['change', 'published'], () => window.location.reload())

      this.$storyblok.on('input', ({ story }) => {
        this.content = story.content
      })
    }
  },
  methods: {
    async fetchData () {
      const { data } = await api.get(`cdn/stories/${this._data.blok}`)
      this.content = data.story.content
    }
  }
}
