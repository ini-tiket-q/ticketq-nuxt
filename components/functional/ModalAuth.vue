<template>
  <VFModal v-model="showModalAuth">
    <template #title>
      <span>Login / Register</span>
    </template>
    <div class="space-y-4">
      <SpInputText v-model="input.phone.value" label="Email / phone number" placeholder="Enter your email / phone number" :error="input.phone.error" />
      <SpInputText v-model="input.pw.value" label="Password" placeholder="Enter your password" :error="input.pw.error" />
    </div>
    <template #footer-content>
      <SpButton color="white" @click.native="showModalAuth = false">
        Cancel
      </SpButton>
      <SpButton color="primeblue">
        Login / register
      </SpButton>
    </template>
  </VFModal>
</template>

<script>
import VFModal from '~/components/partial/VFModal'
import SpInputText from '~/components/partial/SpInputText'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'ModalAuth',

  components: {
    VFModal,
    SpInputText,
    SpButton
  },

  data () {
    return {
      showModalAuth: false,
      input: {
        phone: { value: null, error: null },
        pw: { value: null, error: null }
      }
    }
  },

  created () {
    this.$nuxt.$on('openModalAuth', () => { this.showModalAuth = true })
  },

  beforeDestroy () { this.$nuxt.$off('openModalAuth') }
}
</script>
