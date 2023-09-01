<template>
  <nav class="fixed top-0 w-screen bg-white" style="z-index: 5;">
    <div class="container py-3">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-cover bg-center bg-no-repeat" style="margin-bottom: 0;" :style="{ backgroundImage: `url(${require('~/assets/img/logo.png')})` }" />
            <div class="w-8 h-8 bg-cover bg-center bg-no-repeat" style="margin-bottom: 0;" :style="{ backgroundImage: `url(${require('~/assets/img/logoJdih.png')})` }" />
            <span class="font-medium lg:hidden">JDIH BP Batam</span>
          </div>
        </NuxtLink>
        <div class="cursor-pointer lg:hidden" @click="openMenu = !openMenu">
          <div class="w-6 border-b-2 border-gray-800 transform duration-300" :class="{ 'rotate-45': openMenu }" />
          <div class="transform duration-300" :class="{ 'w-6 border-b-2 border-gray-800 my-2': !openMenu }" />
          <div class="w-6 border-b-2 border-gray-800 transform duration-300" :class="{ '-rotate-45': openMenu }" />
        </div>
        <div class="hidden lg:flex lg:items-center">
          <div v-for="(page, index) in pages" :key="index">
            <div v-if="page.child.length <= 0" class="menu-item mx-6 cursor-pointer" @click="$router.push(page.to)">
              {{ page.text }}
            </div>
            <SpDropdown v-if="page.child.length > 0" placement="right">
              <template #button>
                <div class="menu-item mx-6">
                  {{ page.text }}
                </div>
              </template>
              <div v-if="index === 2" slot="content">
                <div v-for="(child, indexChild) in page.child" :key="indexChild" v-wave class="content-item" @click="searchRegulationDoc(child)">
                  {{ child.name ? child.name : 'All Regulations' }}
                </div>
              </div>
              <div v-else slot="content">
                <div v-for="(child, indexChild) in page.child" :key="indexChild" v-wave class="content-item" @click="$router.push(child.to)">
                  {{ child.text }}
                </div>
              </div>
            </SpDropdown>
          </div>
        </div>
      </div>
    </div>
    <div v-if="openMenu" class="py-4 bg-primeblue text-white overflow-auto lg:hidden" style="max-height: calc(100vh - ((.75rem * 2) + 2rem));">
      <div class="mt-4 divide-y divide-white">
        <div v-for="(page, index) in pages" :key="index">
          <div v-if="page.child.length <= 0" v-wave class="p-4 cursor-pointer transform duration-300 active:scale-90" @click="$router.push(page.to); openMenu = false">
            {{ page.text }}
          </div>
          <div v-if="page.child.length > 0" v-wave class="p-4 cursor-pointer transform duration-300 active:scale-90">
            <SpAccordion>
              <template #title>
                {{ page.text }}
              </template>
              <template v-if="index === 2" #content>
                <div v-for="(child, indexChild) in page.child" :key="indexChild" v-wave class="p-4 cursor-pointer transform duration-300 active:scale-90" @click="searchRegulationDoc(child)">
                  {{ child.name ? child.name : 'All Regulations' }}
                </div>
              </template>
              <template v-else #content>
                <div v-for="(child, indexChild) in page.child" :key="indexChild" v-wave class="p-4 cursor-pointer transform duration-300 active:scale-90" @click="$router.push(child.to); openMenu = false">
                  {{ child.text }}
                </div>
              </template>
            </SpAccordion>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-4 w-full p-4">
        <a v-wave :href="`mailto:${$contact.email.value}`" target="_blank">
          <solid-mail-icon class="w-6 h-6" />
        </a>
        <a v-wave :href="`tel:${$contact.phone.value}`" target="_blank">
          <solid-phone-icon class="w-5 h-5" />
        </a>
        <a v-wave :href="$contact.twitter.value" target="_blank">
          <div class="w-6 h-6 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/twitter.png')})` }" />
        </a>
        <a v-wave :href="$contact.ig.value" target="_blank">
          <div class="w-6 h-6 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/ig.png')})` }" />
        </a>
        <a v-wave :href="$contact.fb.value" target="_blank">
          <div class="w-6 h-6 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/fb.png')})` }" />
        </a>
        <a v-wave :href="$contact.yt.value" target="_blank">
          <div class="w-6 h-6 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/yt.png')})` }" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import SpDropdown from '~/components/partial/SpDropdown'
import SpAccordion from '~/components/partial/SpAccordion'

export default {
  name: 'LandingNavbar',

  components: {
    SpDropdown,
    SpAccordion
  },

  data () {
    return {
      openMenu: false,
      showTranslatingLayer: false,
      pages: [
        {
          text: 'Home',
          to: '/',
          child: []
        }
      ]
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
