<template>
  <div class="splash-screen fixed top-0 z-50 flex w-screen h-screen justify-center items-center bg-gradient-to-b from-primeblue-500 to-primeblue-400 text-white">
    <div class="spinner relative">
      <div class="double-bounce1" />
      <div class="double-bounce2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashScreen'
}
</script>

<style lang="less" scoped>
  .splash-screen {
    .spinner {
      @wh: 60px;
      width: @wh;
      height: @wh;
    }
    .double-bounce1, .double-bounce2 {
      @apply absolute top-0 left-0 w-full h-full rounded-full bg-primeblue-900 opacity-60;
      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }
    .double-bounce2 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    @-webkit-keyframes sk-bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
    }
    @keyframes sk-bounce {
      0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }
  }
</style>
