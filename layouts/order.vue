<template>
  <div class="flex flex-col min-h-screen">
    <SplashScreen v-if="showSplashScreen" />
    <nav class="fixed top-0 w-screen" style="z-index: 5;">
      <div class="py-2 bg-primeblue">
        <div class="h-8 bg-contain bg-center bg-no-repeat" style="margin-bottom: 0;" :style="{ backgroundImage: `url(${require('~/assets/img/logo.png')})` }" />
      </div>
      <div class="border-b border-gray-400 bg-white">
        <div class="container flex items-center justify-center w-full space-x-4 py-2">
          <div v-for="(step, index) in orderStep" :key="index" class="flex items-center space-x-4">
            <div class="border-b-4" :class="[index === currentStep ? 'border-primeorange' : 'border-transparent']">
              {{ step }}
            </div>
            <div v-if="index < orderStep.length - 1">
              -
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="pt-32 pb-12">
      <Nuxt />
    </div>
    <LandingFooter class="mt-auto" />
  </div>
</template>

<script>
import SplashScreen from '~/components/partial/SplashScreen'
import LandingFooter from '~/components/partial/LandingFooter'

export default {
  name: 'OrderLayout',

  components: {
    SplashScreen,
    LandingFooter
  },

  data () {
    return {
      showSplashScreen: true,
      orderStep: ['Data', 'Review', 'Payment', 'eTicket'],
      currentStep: 0
    }
  },

  watch: {
    $route (to) {
      if (to.path.substring(to.path.lastIndexOf('/') + 1) === 'data') { this.currentStep = 0 }
      if (to.path.substring(to.path.lastIndexOf('/') + 1) === 'review') { this.currentStep = 1 }
      if (to.path.substring(to.path.lastIndexOf('/') + 1) === 'payment') { this.currentStep = 2 }
      if (to.path.substring(to.path.lastIndexOf('/') + 1) === 'eticket') { this.currentStep = 3 }
    }
  },

  beforeCreate () { this.showSplashScreen = true },

  mounted () { this.showSplashScreen = false }
}
</script>
