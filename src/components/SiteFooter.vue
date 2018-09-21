<template>
  <footer role="contentinfo" id="site-footer" :class="`${$options.name}`">
    &copy; Aston
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss">
.SiteFooter {
  width: 1000px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
}
</style>
