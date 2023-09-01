<template>
  <div class="mt-12">
    <div class="h-40 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/illu/404Search.png')})`}" />
    <!-- eslint-disable vue/no-v-html -->
    <div class="mt-4 text-center" v-html="text" />
  </div>
</template>

<script>
export default {
  name: 'EmptyData',

  props: {
    text: {
      type: String,
      default: 'Ups, tidak ada data yang ditemukan'
    }
  }
}
</script>
