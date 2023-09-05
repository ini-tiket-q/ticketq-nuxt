<template>
  <div>
    <div class="section search bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/illu/hero.png')})`}">
      <div class="flex justify-center items-center w-full pt-32 pb-20 lg:pt-56 lg:pb-40">
        <div class="container" style="max-width: 1024px;">
          <div class="p-2 border border-white rounded-lg bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm md:hidden">
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 sm:col-span-6">
                <SpSelect label="From" placeholder="Choose region" :list="allCity" @change="selectOrigin" />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <SpSelect label="To" placeholder="Choose destination" :list="allCity" @change="selectDestination" />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <SpSelect label="Class" placeholder="Choose class" :list="allClass" @change="selectClass" />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <SpInputText
                  v-model="inputSearch.date"
                  label="Departure date"
                  type="date"
                  format-date="MMMM DD, YYYY"
                  clearable
                  placeholder="Choose departure date"
                />
              </div>
              <div class="col-span-12">
                <SpButton color="primeorange" block @click.native="$router.push('/search')">
                  Search
                </SpButton>
              </div>
            </div>
          </div>
          <div class="hidden w-full p-2 rounded-full bg-white md:flex">
            <div class="w-full px-2">
              <label for="origin">From</label>
              <select id="origin" v-model="inputSearch.origin" class="w-full" style="outline: none;">
                <option :value="null">
                  Choose origin
                </option>
                <option v-for="(city, index) in allCity" :key="index" :value="city.id">
                  {{ city.text }}
                </option>
              </select>
            </div>
            <div class="w-full px-2 border-l border-gray-400 ml-2">
              <label for="destination">To</label>
              <select id="destination" v-model="inputSearch.destination" class="w-full" style="outline: none;">
                <option :value="null">
                  Choose destination
                </option>
                <option v-for="(city, index) in allCity" :key="index" :value="city.id">
                  {{ city.text }}
                </option>
              </select>
            </div>
            <div class="w-full px-2 border-l border-gray-400 ml-2">
              <label>Departure date</label>
              <ClientOnly>
                <DatePicker
                  v-model="inputSearch.date"
                  type="date"
                  value-type="format"
                  format="MMMM DD, YYYY"
                  clearable
                  class="p-0"
                  :input-attr="{ style: `padding: 0; border: 0; outline: none` }"
                  placeholder="Choose departure"
                />
              </ClientOnly>
            </div>
            <div class="w-full px-2 border-l border-gray-400 ml-2">
              <label for="class">Class</label>
              <select id="class" v-model="inputSearch.class" class="w-full" style="outline: none;">
                <option :value="null">
                  Choose class
                </option>
                <option v-for="(cl, index) in allClass" :key="index" :value="cl.value">
                  {{ cl.text }}
                </option>
              </select>
            </div>
            <div v-wave class="flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-full bg-primeorange text-white cursor-pointer click-effect" @click="$router.push('/search')">
              <solid-search-icon class="h-8 w-8" />
            </div>
          </div>
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
import SpSelect from '~/components/partial/SpSelect'
import SpInputText from '~/components/partial/SpInputText'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'IndexPage',

  components: {
    SpSelect,
    SpInputText,
    SpButton
  },

  layout: 'landing',

  data () {
    return {
      allCity: [
        { value: 'bth', text: 'Batam (BTH)' },
        { value: 'dps', text: 'Bali (DPS)' }
      ],
      allClass: [
        { value: 'economy', text: 'Economy' },
        { value: 'business', text: 'Business' },
        { value: 'first', text: 'First class' }
      ],
      inputSearch: {
        origin: null,
        destination: null,
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
  },

  methods: {
    selectOrigin (selection) { this.inputSearch.origin = selection },

    selectDestination (selection) { this.inputSearch.destination = selection },

    selectClass (selection) { this.inputSearch.class = selection }
  }
}
</script>
