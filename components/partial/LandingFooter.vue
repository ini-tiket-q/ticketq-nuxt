<template>
  <div class="section footer bg-white">
    <SeparatorLine />
    <div class="container pt-12 pb-8 lg:pt-24 xl:px-24">
      <div class="grid grid-cols-12 gap-8">
        <div v-for="(set, index) in linkSet" :key="index" class="col-span-6 space-y-4 sm:col-span-4">
          <div class="section-subtitle">
            {{ set.name }}
          </div>
          <div v-for="(child, indexChild) in set.children" :key="indexChild" v-wave class="text-gray-500 cursor-pointer click-effect">
            {{ child.name }}
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center w-full space-x-4 pt-12">
        <a v-wave :href="$contact.fb.value" target="_blank">
          <div class="h-8 w-8 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/fb.png')})` }" />
        </a>
        <a v-wave :href="$contact.twitter.value" target="_blank">
          <div class="h-8 w-8 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/twitter.png')})` }" />
        </a>
        <a v-wave :href="$contact.ig.value" target="_blank">
          <div class="h-8 w-8 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/ig.png')})` }" />
        </a>
      </div>
      <div class="text-center pt-6 border-t border-gray-400 mt-6 text-gray-400">
        &copy; 2018 TiketQ.com Travel Pte. Ltd. All rights reserved
        <br>PT. INITIKETQUE | Batam, Indonesia
      </div>
    </div>
  </div>
</template>

<script>
import SeparatorLine from '~/components/partial/SeparatorLine'

export default {
  name: 'LandingFooter',

  components: { SeparatorLine },

  data () {
    return {
      linkSet: [
        {
          name: 'Contact Us',
          children: [
            { name: 'Customer service' },
            { name: 'Service protection' },
            { name: 'Give us feedback' }
          ]
        },
        {
          name: 'About Us',
          children: [
            { name: 'About TiketQ' },
            { name: 'News' },
            { name: 'Resources and Policies' }
          ]
        },
        {
          name: 'Get the App',
          children: [
            { name: 'Android app' },
            { name: 'iOs app' }
          ]
        }
      ]
    }
  }
}
</script>
