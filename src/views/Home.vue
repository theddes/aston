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
import storyblokMixin from '../mixins/storyblok'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  mixins: [
    storyblokMixin
  ]
}
</script>
