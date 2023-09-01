<template>
  <div>
    <div class="flex items-center w-full cursor-pointer" @click="opened = !opened">
      <div class="mr-4">
        <slot name="title" />
      </div>
      <div class="ml-auto">
        <solid-chevron-down-icon class="w-6 h-6 transform duration-300" :class="{ 'rotate-180': opened }" />
      </div>
    </div>
    <div class="transform duration-300" :class="{ 'max-h-screen py-2 overflow-auto': opened, 'max-h-0 overflow-hidden': !opened }">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpAccordion',

  data () {
    return { opened: false }
  }
}
</script>
