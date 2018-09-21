<template>
  <header role="banner" id="site-header" :class="`${$options.name}`">
    <router-link to="/about">
      <h1 :class="`${$options.name}__logo`" v-editable="content" v-if="content">
        <img
          :src="$img(content.image, 250, 79)"
          :srcset="`${$img(content.image, 600, 189, { quality: 60 })} 2x`"
          :alt="content.title"
        >
      </h1>
    </router-link>
  </header>
</template>

<script>
import storyblokMixin from '../mixins/storyblok'

export default {
  name: 'SiteHeader',
  mixins: [
    storyblokMixin
  ]
}
</script>

<style lang="scss">
.SiteHeader {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  &__logo {
    img {
      width: 250px;
      padding: 50px 0 40px;
    }
  }
}
</style>
