<template>
  <div class="sp-dropdown relative" @mouseover="open = true" @mouseleave="open = false">
    <button class="z-10 relative flex items-center focus:outline-none select-none" @click="open = !open">
      <slot name="button" />
      <solid-chevron-down-icon class="w-4 h-4 transform duration-300" :class="{ 'rotate-180': open }" />
    </button>

    <!--dropdown content: desktop-->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-750 ease-in"
      enter-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <div
        v-if="open"
        class="content hidden absolute shadow-md border-t-4 border-primeorange-400 rounded-md text-sm bg-white md:block"
        :class="placement === 'right' ? 'right-0' : 'left-0'"
        style="z-index: 1;"
        :style="width === 'lg' ? 'width: 24rem;' : ''"
      >
        <slot name="content" />
      </div>
    </transition>

    <!--dropdown content: mobile-->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-750 ease-in"
      enter-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <div
        v-if="open"
        class="content absolute shadow-md border-t-2 border-primeorange-400 rounded-md text-sm bg-white md:hidden"
        :class="placement === 'right' ? 'right-0' : 'left-0'"
        style="z-index: 1;"
        :style="width === 'lg' ? 'width: 24rem;' : ''"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SpDropdown',

  props: {
    placement: {
      type: String,
      default: 'right',
      validator: value => ['right', 'left'].includes(value) !== -1
    },
    width: {
      type: String,
      default: null
    }
  },

  data () {
    return { open: false }
  },

  mounted () {
    const onEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') { this.open = false }
    }

    document.addEventListener('keydown', onEscape)

    this.$once('hook:beforeDestroy', () => { document.removeEventListener('keydown', onEscape) })
  }
}
</script>

<style lang="less">
  .sp-dropdown {
    .content .content-item { @apply block w-full p-2 duration-300 transform active:scale-90; }
    &:not(.clear) .content {
      @apply w-60 py-1;
      .content-item {
        @apply block duration-300 cursor-pointer hover:bg-primeorange-400 hover:bg-opacity-25;
      }
    }
  }
</style>
