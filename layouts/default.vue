<template>
  <div id="bigContent">
    <SplashScreen v-if="showSplashScreen" />
    <Nuxt />
  </div>
</template>

<script>
import SplashScreen from '~/components/partial/SplashScreen'

export default {
  name: 'DefaultLayout',

  components: {
    SplashScreen
  },

  data () {
    return {
      showSplashScreen: true
    }
  },

  beforeCreate () {
    this.showSplashScreen = true
  },

  mounted () {
    this.showSplashScreen = false
  }
}
</script>
