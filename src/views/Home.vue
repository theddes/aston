<template>
  <div :class="$options.name">
    <div v-if="content">
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
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { data } = await api.get('cdn/stories/home')
      this.content = data.story.content
    },
  },
}
</script>
