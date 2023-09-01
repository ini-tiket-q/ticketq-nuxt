<template>
  <div class="flex flex-col min-h-screen">
    <SplashScreen v-if="showSplashScreen" />
    <LandingNavbar />
    <Nuxt />
    <LandingFooter class="mt-auto" />
  </div>
</template>

<script>
import SplashScreen from '~/components/partial/SplashScreen'
import LandingNavbar from '~/components/partial/LandingNavbar'
import LandingFooter from '~/components/partial/LandingFooter'

export default {
  name: 'LandingLayout',

  components: {
    SplashScreen,
    LandingNavbar,
    LandingFooter
  },

  data () {
    return { showSplashScreen: true }
  },

  beforeCreate () { this.showSplashScreen = true },

  mounted () { this.showSplashScreen = false }
}
</script>
