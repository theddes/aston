<template>
  <div :class="$options.name">
    <div
      v-editable="content"
      v-if="content">
      {{ content.title }}
    </div>
  </div>
</template>

<script>
import api from '../utils/api'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      content: null
    }
  },
  created () {
    this.fetchData()
    if (this.$storyblok) {
      this.$storyblok.init()

      // Reload the browser if the content
      // is saved or published in the editor.
      this.$storyblok.on(['change', 'published'], () => window.location.reload())

      // Live update the content
      // in the Visual Editor.
      this.$storyblok.on('input', ({ story }) => {
        this.content = story.content
      })
    }
  },
  methods: {
    async fetchData () {
      const { data } = await api.get(`cdn/stories/${this.$options.name.toLowerCase()}`)
      this.content = data.story.content
    }
  }
}
</script>
