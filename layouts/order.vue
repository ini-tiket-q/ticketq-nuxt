<template>
  <div class="flex flex-col min-h-screen">
    <SplashScreen v-if="showSplashScreen" />
    <nav class="fixed top-0 w-screen" style="z-index: 5;">
      <div class="py-2 bg-primeblue">
        <div class="h-8 bg-contain bg-center bg-no-repeat" style="margin-bottom: 0;" :style="{ backgroundImage: `url(${require('~/assets/img/logo.png')})` }" />
      </div>
    </nav>
    <div class="pt-16 pb-12">
      <div class="container pb-8">
        <ScheduleCard :schedule="schedule" :has-choose-btn="false" />
      </div>
      <Nuxt />
    </div>
    <LandingFooter class="mt-auto" />
  </div>
</template>

<script>
import SplashScreen from '~/components/partial/SplashScreen'
import ScheduleCard from '~/components/functional/ScheduleCard'
import LandingFooter from '~/components/partial/LandingFooter'

export default {
  name: 'OrderLayout',

  components: {
    SplashScreen,
    ScheduleCard,
    LandingFooter
  },

  data () {
    return {
      showSplashScreen: true,
      schedule: null
    }
  },

  fetch () {
    this.schedule = JSON.parse(window.localStorage.getItem('schedule'))
    if (!this.schedule) { this.$router.go(-1) }
  },

  beforeCreate () { this.showSplashScreen = true },

  mounted () { this.showSplashScreen = false }
}
</script>
