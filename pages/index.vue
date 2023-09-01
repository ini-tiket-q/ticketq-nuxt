<template>
  <div>
    <div class="section search bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/illu/hero.png')})`}">
      <div class="flex justify-center items-center min-h-screen w-full pt-16 pb-20 lg:pt-28">
        <div class="container" style="max-width: 1024px;">
          <div class="text-center">
            <div class="first-text font-medium">
              Hehe
            </div>
            <div class="second-text mt-4 font-bold">
              Hehe again
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  layout: 'landing',

  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .section {
    scrollbar-width: 0;
    scrollbar-height: 0;
    &.search {
      .second-text { font-size: 1.3rem; }
      @media (min-width: 640px) {
        .first-text { font-size: 1.5rem; }
        .second-text { font-size: 3rem; }
      }
    }
  }
</style>
