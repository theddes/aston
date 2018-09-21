<template>
  <div :class="$options.name">
    <h1>This is an about page</h1>
    <div id="bm"></div>
  </div>
</template>

<script>
import bodymovin from 'bodymovin'
import brand from '../bodymovin/brand.json'

export default {
  name: 'About',
  mounted () {
    const animation = bodymovin.loadAnimation({
      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: brand,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
      }
    })
  }
}
</script>

<style lang="scss">
#bm {
  width: 200px;
}
</style>
