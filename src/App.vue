<template>
  <div id="app" :class="$options.name">
    <site-header />
    <router-view />
    <site-footer />
  </div>
</template>

<script>
import siteHeader from '@/components/SiteHeader.vue'
import siteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'aston',
  components: {siteHeader, siteFooter}
}
</script>
