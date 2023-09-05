<template>
  <VFModal v-model="showModalLogout">
    <template #title>
      <span>Logout</span>
    </template>
    <div class="space-y-4">
      Are you sure to logout?
    </div>
    <template #footer-content>
      <SpButton color="white" @click.native="showModalLogout = false">
        Cancel
      </SpButton>
      <SpButton color="red">
        Logout
      </SpButton>
    </template>
  </VFModal>
</template>

<script>
import VFModal from '~/components/partial/VFModal'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'ModalLogout',

  components: {
    VFModal,
    SpButton
  },

  data () {
    return { showModalLogout: false }
  },

  created () {
    this.$nuxt.$on('openModalLogout', () => { this.showModalLogout = true })
  },

  beforeDestroy () { this.$nuxt.$off('openModalLogout') }
}
</script>
