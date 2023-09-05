<template>
  <div>
    <div class="section search bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/illu/hero.png')})`}">
      <div class="flex justify-center items-center min-h-screen w-full pt-16 pb-20 lg:pt-28">
        <div class="container" style="max-width: 1024px;">
          Input set of search goes here
        </div>
      </div>
    </div>
    <div class="section partner bg-white">
      <div class="container py-12">
        <div class="space-y-8 lg:flex lg:items-start lg:w-full lg:space-y-0 lg:space-x-4">
          <div class="w-full py-4 text-center">
            <div class="section-title">
              Airline Partners
            </div>
            <div>
              Domestic & International Airline Partners
            </div>
            <div class="grid grid-cols-12 gap-2 mt-8 lg:gap-4">
              <div v-for="index in 48" :key="index" class="col-span-2 sm:col-span-1">
                <div class="m-auto bg-no-repeat" style="height: 29px; width: 29px; background-size: calc(29px * 47);" :style="{ backgroundImage: `url(${require('~/assets/img/icon/airlineSet.png')})`, backgroundPositionX: `${-29 * (index - 1)}px` }" />
              </div>
            </div>
          </div>
          <div class="w-full py-4 text-center lg:pl-4 lg:border-l border-primeblue-400">
            <div class="section-title">
              Payment Partners
            </div>
            <div class="grid grid-cols-12 gap-2 mt-8 lg:gap-4">
              <div v-for="index in 17" :key="index" class="col-span-3 sm:col-span-2">
                <div class="m-auto bg-no-repeat" style="height: 58px; width: 58px; background-size: calc(58px * 16);" :style="{ backgroundImage: `url(${require('~/assets/img/icon/paymentSet.png')})`, backgroundPositionX: `${-58 * (index - 1)}px` }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section service bg-primeblue text-white">
      <div class="container py-12 text-center">
        <div class="section-title">
          Why Book with TiketQ
        </div>
        <div class="grid grid-cols-12 gap-y-12 mt-8 sm:gap-8">
          <div v-for="(svc, index) in allService" :key="index" class="col-span-12 sm:col-span-4">
            <div class="mx-auto" style="max-width: 10rem;">
              <div class="aspect-h-1 aspect-w-1 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/illu/' + svc.img)})`}" />
            </div>
            <div class="mt-4 section-subtitle">
              {{ svc.name }}
            </div>
            <div class="mt-4">
              {{ svc.desc }}
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
    return {
      inputSearch: {
        origin: null,
        destination: null,
        adult: null,
        child: null,
        infant: null,
        date: null,
        class: null
      },
      allService: [
        {
          name: 'Secure Transaction Guaranted',
          desc: 'Security and privacy of your online transaction are protected by RapidSSL authorized technology. Receive instant confirmation and e-ticket directly in your email.',
          img: 'svcSecurity.png'
        },
        {
          name: 'Assistance and Support',
          desc: 'We can help you navigate changes in travel plans, flight delays, cancellations, or unforeseen circumstances.',
          img: 'svcAssistant.png'
        },
        {
          name: 'Various Payment Options',
          desc: 'Easy transaction with various payment options from ATM Transfer, Credit Card to Internet Banking.',
          img: 'svcPayment.png'
        }
      ],
      inputAuth: {
        phone: { value: null, error: null },
        pw: { value: null, error: null }
      }
    }
  }
}
</script>
