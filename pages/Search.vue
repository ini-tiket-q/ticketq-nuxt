<template>
  <div>
    <div class="section route bg-white">
      <div class="pt-20 pb-6 rounded-b-2xl bg-primeorange">
        <div class="container">
          <div class="space-y-1">
            <div v-for="(route, index) in allRoute" :key="index" class="p-4 rounded-xl bg-white">
              <div class="section-subtitle">
                {{ route.origin }} &rarr; {{ route.destination }}
              </div>
              <div class="mt-1 text-gray-500 sm:flex sm:space-x-2">
                <div>
                  {{ route.at | moment('LLLL') }}
                </div>
                <div class="sm:pl-2 sm:border-l sm:border-gray-400">
                  {{ route.passanger | numberEN }} passanger
                </div>
                <div class="sm:pl-2 sm:border-l sm:border-gray-400">
                  {{ route.class }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section partner bg-white">
      <div class="container pt-4 pb-12">
        <div class="grid grid-cols-12 gap-4 mb-8">
          <div class="col-span-12 sm:col-span-6 lg:col-span-2">
            <SpSelect placeholder="Sort by price" :list="filter.sort" @change="selectPriceSort" />
          </div>
          <div class="col-span-12 sm:col-span-6 lg:col-span-2">
            <SpSelect placeholder="Airline" :list="filter.airline" @change="selectAirline" />
          </div>
          <div class="col-span-12 sm:col-span-4 lg:col-span-2">
            <SpSelect placeholder="Transit" :list="filter.transit" @change="selectTransit" />
          </div>
          <div class="col-span-12 sm:col-span-4 lg:col-span-2">
            <SpSelect placeholder="Baggage" :list="filter.baggage" @change="selectBaggage" />
          </div>
          <div class="col-span-12 sm:col-span-4 lg:col-span-2">
            <SpSelect placeholder="Class" :list="filter.class" @change="selectClass" />
          </div>
          <div class="col-span-12 lg:col-span-2">
            <SpButton color="primeblue" block>
              Search
            </SpButton>
          </div>
        </div>
        <div v-if="showSkeleton" class="space-y-4">
          <div class="p-2 rounded-xl border border-gray-400 bg-white">
            <div class="grid grid-cols-12 gap-8 sm:gap-y-1">
              <div class="col-span-3 sm:col-span-2">
                <SkeletonBlock class="h-24 w-24 rounded-xl" />
              </div>
              <div class="col-span-9 sm:col-span-5 lg:col-span-4">
                <div class="space-y-2">
                  <SkeletonBlock class="h-8 w-36 rounded-lg" />
                  <div class="flex space-x-2">
                    <SkeletonBlock class="h-4 w-12 rounded-lg" />
                    <SkeletonBlock class="h-4 w-20 rounded-lg" />
                  </div>
                  <SkeletonBlock class="h-8 w-44 rounded-lg" />
                </div>
              </div>
              <div class="col-span-12 sm:col-span-5 lg:col-span-4">
                <div class="flex items-center w-full space-x-2 text-center">
                  <SkeletonBlock class="flex-shrink-0 h-12 w-16 rounded-lg" />
                  <SkeletonBlock class="w-full rounded-lg" style="height: 2px;" />
                  <SkeletonBlock class="flex-shrink-0 h-12 w-16 rounded-lg" />
                </div>
              </div>
            </div>
            <div class="flex justify-end w-full pt-4">
              <SkeletonBlock class="h-9 w-24 rounded-lg" />
            </div>
          </div>
        </div>
        <EmptyData v-if="!showSkeleton && allScheduleData.length <= 0" text="Oops, no flight found<br>Try to search another schedule" />
        <div v-if="!showSkeleton && allScheduleData.length > 0" class="space-y-4">
          <div v-for="(schedule, index) in allScheduleData" :key="index" v-wave class="p-2 rounded-xl border border-gray-400 bg-white cursor-pointer click-effect" @click="allScheduleData[index].showDetail = !allScheduleData[index].showDetail">
            <div class="grid grid-cols-12 gap-8 sm:gap-y-1">
              <div class="col-span-3 sm:col-span-2">
                <div class="h-24 w-24 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/airline/superjet.png')})`}" />
              </div>
              <div class="col-span-9 sm:col-span-5 lg:col-span-4">
                <div class="space-y-1">
                  <div class="section-subtitle">
                    {{ schedule.airline.name }}
                  </div>
                  <div class="flex space-x-2">
                    <span v-if="schedule.freeBaggage" class="px-2 rounded-full border border-gray-800" style="font-size: .75rem;">{{ schedule.freeBaggage }} kg</span>
                    <span v-if="schedule.reschedulable" class="px-2 rounded-full border border-green-600 text-green-600" style="font-size: .75rem;">Rescheduleable</span>
                  </div>
                  <div class="flex items-end">
                    <span class="section-subtitle text-primeorange">{{ schedule.price | currencyIDR }}</span>/Psg
                  </div>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-5 lg:col-span-4">
                <div class="flex items-center w-full space-x-2 text-center">
                  <div class="flex-shrink-0">
                    <div class="font-medium" style="font-size: 1.25rem;">
                      {{ schedule.origin.at | moment('hh:mm') }}
                    </div>
                    <div class="text-gray-500">
                      {{ schedule.origin.name }}
                    </div>
                  </div>
                  <div class="w-full text-gray-500">
                    <div>
                      1h
                    </div>
                    <div class="flex items-center w-full">
                      <div class="h-2 w-2 rounded-full bg-gray-800" />
                      <div class="w-full bg-gray-800" style="height: 2px;" />
                      <div class="h-2 w-2 rounded-full bg-gray-800" />
                    </div>
                    <div>
                      {{ schedule.transit.length <= 0 ? 'Direct' : `${schedule.transit.length} transit points` }}
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="font-medium" style="font-size: 1.25rem;">
                      {{ schedule.destination.at | moment('hh:mm') }}
                    </div>
                    <div class="text-gray-500">
                      {{ schedule.destination.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="schedule.showDetail" class="grid grid-cols-12 gap-4">
              <div class="hidden col-span-2 sm:block" />
              <div class="col-span-12 sm:col-span-9">
                <div class="flex flex-col w-full pt-8">
                  <div v-for="(stop, indexStop) in schedule.stopPoint" :key="indexStop" class="flex w-full pl-2">
                    <div class="flex flex-col justify-end h-4 w-2 rounded-full bg-white" style="z-index: 1;">
                      <div v-if="indexStop > 0" class="h-full ml-0.5 bg-gray-800" style="width: 2px;" />
                      <div class="flex-shrink-0 h-2 w-2 rounded-full bg-gray-800" />
                    </div>
                    <div class="w-full space-y-4 pl-2 -ml-1.5" :class="{ 'pb-4 border-gray-800': indexStop < schedule.stopPoint.length - 1 }" style="border-left-width: 2px;">
                      <div class="flex space-x-2 w-full">
                        <div class="w-24 sm:col-span-2" style="font-size: 1.25rem;">
                          {{ stop.at | moment('hh:mm') }}
                        </div>
                        <div class="w-full">
                          <div>
                            {{ stop.location.city }}
                          </div>
                          <div class="text-gray-500">
                            {{ stop.location.airport }}
                          </div>
                        </div>
                      </div>
                      <div v-if="indexStop < schedule.stopPoint.length - 1" class="flex space-x-2 w-full">
                        <div class="w-24 sm:col-span-2 text-gray-500">
                          {{ stop.duration }}
                        </div>
                        <div class="w-full">
                          <div>
                            {{ stop.plane.code }}
                          </div>
                          <div class="text-gray-500">
                            {{ stop.plane.type }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end w-full pt-4">
              <SpButton color="primeorange">
                Choose
              </SpButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SkeletonBlock from '~/components/partial/SkeletonBlock'
import EmptyData from '~/components/partial/EmptyData'
import SpSelect from '~/components/partial/SpSelect'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'SearchPage',

  components: {
    SkeletonBlock,
    EmptyData,
    SpSelect,
    SpButton
  },

  layout: 'landing',

  data () {
    return {
      showSkeleton: true,
      filter: {
        sort: [
          { value: 'priceAsc', text: 'Lowest to highest' },
          { value: 'priceDesc', text: 'Highest to lowest' }
        ],
        airline: [
          { value: 'airasia', text: 'Air Asia' },
          { value: 'garuda', text: 'Garuda Indonesia' }
        ],
        transit: [
          { value: 'direct', text: 'Direct' },
          { value: 'transit', text: 'Transit' }
        ],
        baggage: [
          { value: 'baggage', text: 'Baggage' },
          { value: 'nonBaggage', text: 'Non-Baggage' }
        ],
        class: [
          { value: 'economy', text: 'Economy' },
          { value: 'business', text: 'Business' },
          { value: 'first', text: 'First class' }
        ]
      },
      inputFilter: {
        sort: null,
        airline: null,
        transit: null,
        baggage: null,
        class: null
      },
      allRoute: [],
      allScheduleData: []
    }
  },

  async fetch () {
    this.getAllRoute()
    await this.getAllSchedule().then(() => {
      this.allScheduleData = this.allSchedule.map(schedule => ({ ...schedule, showDetail: false }))
      this.showSkeleton = false
    })
  },

  head: { title: 'Flight schedules |' },

  computed: {
    ...mapGetters({ allSchedule: 'flight/allSchedule' })
  },

  methods: {
    ...mapActions({ getAllSchedule: 'flight/getAllSchedule' }),

    getAllRoute () {
      this.allRoute = [
        {
          origin: 'Batam (BTH)',
          destination: 'Bali (DPS)',
          at: '2023-09-03T21:38:55+00:00',
          passanger: 1,
          class: 'Economy'
        }
      ]
    },

    selectPriceSort (selection) { this.inputFilter.sort = selection },

    selectAirline (selection) { this.inputFilter.airline = selection },

    selectTransit (selection) { this.inputFilter.transit = selection },

    selectBaggage (selection) { this.inputFilter.baggage = selection },

    selectClass (selection) { this.inputFilter.class = selection }
  }
}
</script>
