<template>
  <picture>
    <img
      :src="$img(content.image, 250, 79)"
      :srcset="`${$img(content.image, 600, 189, { quality: 60 })} 2x`"
      :alt="content.title"
    >
  </picture>
</template>

<script>
export default {
  name: 'media',
  props: {
    content: {
      type: Object,
      required: true
    },
  }
}
</script>
