<template>
  <ClientOnly>
    <vue-final-modal
      v-slot="{ params, close }"
      v-bind="$attrs"
      class="vf-modal"
      classes="flex justify-center items-center px-4 py-12"
      overlay-class="backdrop-filter backdrop-blur-sm"
      :content-class="[
        'card flex flex-col fixed bottom-0 w-screen max-h-full py-4 border border-b-0 rounded-t-xl bg-white transform duration-300',
        { 'md:bottom-auto md:w-full md:rounded-lg md:m-auto': !keepOnPhoneSize },
        { 'px-2': pxBody },
        size && !keepOnPhoneSize && `md:max-w-${size}`
      ]"
      :content-style="{ maxHeight: 'calc(100vh - 66px)' }"
      :transition="{
        'enter-active-class': 'transition duration-300 ease-in-out transform',
        'enter-class': !keepOnPhoneSize ? 'translate-y-full md:translate-y-0 md:scale-0' : 'translate-y-full',
        'enter-to-class': !keepOnPhoneSize ? 'translate-y-0 md:scale-100' : 'translate-y-0',
        'leave-active-class': 'transition duration-300 ease-in-out transform',
        'leave-to-class': !keepOnPhoneSize ? 'translate-y-full md:translate-y-0 md:scale-0' : 'translate-y-full',
        'leave-class': !keepOnPhoneSize ? 'translate-y-0 md:scale-100' : 'translate-y-0'
      }"
      :esc-to-close="escToClose"
      :prevent-click="preventClick"
      v-on="$listeners"
    >
      <div class="card-body pb-4" :class="{ 'px-2': !pxBody }">
        <div class="font-medium" style="font-size: 1.3rem;">
          <slot name="title" />
        </div>
        <div v-if="x" class="absolute cursor-pointer top-0 right-0 mt-2 mr-2" style="font-size: 2rem;" @click="close">
          &times;
        </div>
      </div>
      <div class="card-body flex-grow overflow-y-auto">
        <slot :params="params" />
      </div>
      <div class="card-body pt-4 flex-shrink-0 flex items-center space-x-2" :class="[footerAlign == 'left' ? 'justify-start' : footerAlign == 'center' ? 'justify-center' :footerAlign == 'right' ? 'justify-end' : 'justify-center', { 'px-2': !pxBody }]">
        <slot name="footer-content" />
      </div>
    </vue-final-modal>
  </ClientOnly>
</template>

<script>
export default {
  name: 'VFModal',

  inheritAttrs: false,

  props: {
    footerAlign: {
      type: String,
      default: 'right'
    },
    x: {
      type: Boolean,
      default: true
    },
    escToClose: {
      type: Boolean,
      default: true
    },
    preventClick: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md' // sm, md, lg, xl
    },
    keepOnPhoneSize: {
      type: Boolean,
      default: false
    },
    pxBody: {
      type: Boolean,
      default: true
    }
  }
}
</script>
