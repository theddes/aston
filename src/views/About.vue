<template>
  <main :class="$options.name" v-editable="content" v-if="content">
    <div
      :class="`${$options.name}__content`"
      v-editable="content"
      v-if="content">
      <img
        :src="$img(content.picture, 700, 741)"
        :srcset="`${$img(content.picture, 700, 741, { quality: 100 })} 2x`"
        alt="Film"
      >
      <div :class="`${$options.name}__content--left`">
        <h2>
          {{ content.title }}
        </h2>
        <p v-html="content.text"></p>
      </div>
    </div>
  </main>
</template>

<script>
import storyblokMixin from '../mixins/storyblok'

export default {
  name: 'About',
  mixins: [
    storyblokMixin
  ]
}
</script>

<style lang="scss">
.About {
  width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
  border-top: 2px solid #404040;
  border-bottom: 2px solid #404040;

  &__content {
    display: flex;
    justify-content: space-evenly;

    h2 {
      max-width: 350px;
    }

    &--left {
      padding-left: 2em;
      width: 60%;
    }
  }
}
</style>
