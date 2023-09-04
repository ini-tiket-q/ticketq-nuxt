<template>
  <div v-if="text" class="italic text-red-600">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'SpErrorText',

  props: {
    text: {
      type: String,
      default: null
    }
  }
}
</script>
