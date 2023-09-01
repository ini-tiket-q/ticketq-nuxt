<template>
  <button
    v-wave
    class="inline-block py-3 px-4 rounded-lg text-center no-underline align-middle duration-300 transform cursor-pointer focus:ring focus:ring-opacity-90 focus:ring-offset-2 active:scale-90"
    :class="{
      'w-full': block,
      'text-white bg-primeblue hover:bg-primeblue-600 focus:ring-primeblue-600': color === 'primeblue',
      'text-white bg-green-500 hover:bg-green-600 focus:ring-green-600': color === 'green',
      'text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300': color === 'white'
    }"
    style="outline: none !important; line-height: 1.5; font-size: calc(1rem - 2px);"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SpButton',

  props: {
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primeblue'
    }
  }
}
</script>
