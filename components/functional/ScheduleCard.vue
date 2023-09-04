<template>
  <div v-wave class="p-2 rounded-xl border border-gray-400 bg-white cursor-pointer click-effect" @click="showDetail = !showDetail">
    <div class="grid grid-cols-12 gap-8 sm:gap-y-1">
      <div class="col-span-3 sm:col-span-2">
        <div class="h-24 w-24 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/airline/' + icon(schedule.airline.code) + '.png')})`}" />
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
    <div v-if="showDetail" class="grid grid-cols-12 gap-4">
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
    <div v-if="hasChooseBtn" class="flex justify-end w-full pt-4">
      <SpButton color="primeorange" @click.native.stop="chooseSchedule(schedule)">
        Choose
      </SpButton>
    </div>
  </div>
</template>

<script>
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'ScheduleCard',

  components: { SpButton },

  props: {
    schedule: {
      type: Object,
      default: () => {}
    },
    hasChooseBtn: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return { showDetail: false }
  },

  methods: {
    icon (code) {
      let icon = null
      if (code === 'SUPERAIRJET') { icon = 'superjet' }
      if (code === 'LIONAIR') { icon = 'lionair' }
      return icon
    },

    chooseSchedule (schedule) {
      window.localStorage.setItem('schedule', JSON.stringify(schedule))
      this.$router.push('/order/data')
    }
  }
}
</script>
