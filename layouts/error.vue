<template>
  <div id="bigContent" class="bg-body">
    <div class="container flex w-full min-h-screen justify-center items-center text-center">
      <SplashScreen v-if="showSplashScreen" />
      <div v-if="error.statusCode === 404" class="max-w-sm py-8">
        <div class="mx-auto mb-4 bg-top bg-contain bg-no-repeat" :style="{ backgroundImage: 'url(' + require('~/assets/img/illu/404.png') + ')' }">
          <img :src="require('~/assets/img/illu/404.png')" class="w-full max-w-xs invisible">
        </div>
        <div class="font-bold text-primeblue" style="font-size: 3rem;">
          Oops..
        </div>
        <p class="mb-4">
          Looks like you are enjoying it so much that you finally get lost.<br>Don`t worry, you can
        </p>
        <div class="flex items-center justify-center space-x-4">
          <SpButton color="primeblue" border @click.native="$router.go(-1)">
            Back
          </SpButton>
          <span>or</span>
          <SpButton color="primeblue" @click.native="$router.replace('/')">
            Towards to home
          </SpButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SplashScreen from '~/components/partial/SplashScreen'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'ErrorPage',

  components: {
    SplashScreen,
    SpButton
  },

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  data () {
    return { showSplashScreen: true }
  },

  beforeCreate () { this.showSplashScreen = true },

  mounted () { this.showSplashScreen = false }
}
</script>
