<template>
  <main :class="$options.name">
    <div :class="`${$options.name}__icons`">
      <router-link to="/">
        <img
          :src="$img(require('../media/film.png'), 376, 382)"
          :srcset="`${$img(require('../media/film.png'), 376, 382, { quality: 100 })} 2x`"
          alt="Film"
        >
      </router-link>
      <router-link to="/">
        <img
          :src="$img(require('../media/illustration.png'), 376, 382)"
          :srcset="`${$img(require('../media/illustration.png'), 376, 382, { quality: 100 })} 2x`"
          alt="Illustration"
        >
      </router-link>
      <router-link to="/">
        <img
          :src="$img(require('../media/brand.png'), 376, 382)"
          :srcset="`${$img(require('../media/brand.png'), 376, 382, { quality: 100 })} 2x`"
          alt="Brand"
        >
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.Home {
  width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
  border-top: 2px solid #404040;
  border-bottom: 2px solid #404040;

  &__icons {
    display: flex;
    justify-content: space-evenly;

    img {
      width: 188px;
    }
  }
}
</style>
