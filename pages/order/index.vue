<template>
  <div>
    <div class="section bg-white">
      <div class="container py-16">
        <div class="section-title">
          Purchase history
        </div>
        <div class="flex items-center justify-center w-full space-x-4 pt-8 rounded-lg">
          <div class="h-20 w-20 max-w-lg bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/illu/noTrx.png')})`}" />
          <div class="space-y-2">
            <div class="section-subtitle">
              No purchase found
            </div>
            <div>
              You have no any purchase history
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',

  layout: 'landing',

  data () {
    return {
      allPurchase: []
    }
  },

  head: { title: 'Purchase history |' }
}
</script>
