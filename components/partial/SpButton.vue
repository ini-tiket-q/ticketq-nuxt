<template>
  <button
    v-wave
    :disabled="disabled"
    class="inline-block text-center no-underline align-middle whitespace-nowrap duration-300 transform focus:ring focus:ring-opacity-90 focus:ring-offset-2 active:scale-90"
    :class="{
      'cursor-pointer': !disabled,
      'cursor-not-allowed opacity-75': disabled,
      'rounded-lg': !round,
      'rounded-full': round,
      'w-full': block,
      'focus:ring-primeblue-600': color === 'primeblue',
      'text-white bg-primeblue hover:bg-primeblue-600': color === 'primeblue' && !border,
      'focus:ring-red-600': color === 'red',
      'text-white bg-red-500 hover:bg-red-600': color === 'red' && !border,
      'focus:ring-blue-500': color === 'blue',
      'text-white bg-blue-400 hover:bg-blue-500': color === 'blue' && !border,
      'border border-gray-300 text-gray-800 bg-white hover:bg-gray-300 focus:ring-gray-300': color === 'white',
      'text-primeblue': color === 'white' && textPrimeblue,
      'border': border,
      'bg-white border-primeblue-300 text-primeblue hover:bg-primeblue-300 hover:bg-opacity-20': color === 'primeblue' && border,
      'text-red-500 bg-white border-red-500 hover:bg-red-300 hover:bg-opacity-20': color === 'red' && border
    }"
    style="outline: none !important; line-height: 1.5; font-size: calc(1rem - 2px);"
    :style="formatedPadding"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SpButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null // null, sm
    },
    round: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null // primeblue, red, blue, white
    },
    textPrimeblue: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return { fragmentedRem: '(1rem / 4)' }
  },

  computed: {
    formatedPadding () {
      let padding = null
      if (this.size === 'sm') {
        if (this.border || this.color === 'white') {
          padding = `calc((${this.fragmentedRem} * 1) - 1px) calc((${this.fragmentedRem} * 3) - 1px)`
        } else {
          padding = `calc(${this.fragmentedRem} * 1) calc(${this.fragmentedRem} * 3)`
        }
      } else if (!this.size) {
        if (this.border || this.color === 'white') {
          padding = `calc((${this.fragmentedRem} * 2) - 1px) calc((${this.fragmentedRem} * 4) - 1px)`
        } else {
          padding = `calc(${this.fragmentedRem} * 2) calc(${this.fragmentedRem} * 4)`
        }
      }
      return `padding: ${padding}`
    }
  }
}
</script>

<style lang="less">
  .click-effect { @apply transform duration-300 active:scale-90; }
</style>
