<template>
  <div>
    <nav class="fixed top-0 w-screen" style="z-index: 5;">
      <div class="container max-w-screen-lg pt-2 pb-3 bg-primeblue text-white sm:rounded-b-xl" style="max-width: 1024px;">
        <div class="flex items-center justify-between">
          <div class="bg-cover bg-center bg-no-repeat" style="margin-bottom: 0;" :style="{ backgroundImage: `url(${require('~/assets/img/logo.png')})` }" @click="$router.push('/')">
            <img :src="require('~/assets/img/logo.png')" class="h-8 invisible">
          </div>
          <div class="cursor-pointer sm:hidden" @click="openMenu = !openMenu">
            <div class="w-6 border-b-2 border-white transform duration-300" :class="{ 'rotate-45': openMenu }" />
            <div class="transform duration-300" :class="{ 'w-6 border-b-2 border-white my-2': !openMenu }" />
            <div class="w-6 border-b-2 border-white transform duration-300" :class="{ '-rotate-45': openMenu }" />
          </div>
          <div class="hidden sm:flex sm:items-center sm:space-x-4">
            <SpButton color="primeblue">
              Login
            </SpButton>
            <SpButton color="white" text-primeblue>
              Register
            </SpButton>
          </div>
        </div>
      </div>
      <div v-if="openMenu" class="container py-4 bg-primeblue text-white overflow-auto sm:hidden" style="max-height: calc(100vh - ((.75rem * 2) + 2rem));">
        <div class="flex items-center space-x-4 mt-4 sm:hidden">
          <SpButton color="primeblue" block @click.native="$nuxt.$emit('openModalAuth')">
            Login
          </SpButton>
          <SpButton color="white" block text-primeblue @click.native="$nuxt.$emit('openModalAuth')">
            Register
          </SpButton>
        </div>
      </div>
    </nav>
    <ModalAuth />
  </div>
</template>

<script>
import SpButton from '~/components/partial/SpButton'
import ModalAuth from '~/components/functional/ModalAuth'

export default {
  name: 'LandingNavbar',

  components: {
    SpButton,
    ModalAuth
  },

  data () {
    return {
      openMenu: false
    }
  },

  methods: {
    toggleMenu () { this.openMenu = !this.openMenu },

    moveToPage (link) {
      if (this.$nuxt.$route.path === '/') {
        this.$router.push(link)
      } else {
        this.$router.replace(link)
      }
      this.openMenu = false
    }
  }
}
</script>

<style lang="less" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .15s ease-in;
  }
  .fade-enter, .fade-leave-to {
    transform: translate(0, 4rem) rotate(0deg) !important;
    opacity: 0;
  }
</style>
