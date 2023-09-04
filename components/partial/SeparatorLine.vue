<template>
  <div v-if="type === 'section'" class="h-3 bg-gray-200 sm:h-1" />
</template>

<script>
export default {
  name: 'SeparatorLine',

  props: {
    type: {
      type: String,
      default: 'section'
    }
  }
}
</script>
