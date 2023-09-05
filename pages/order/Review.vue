<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 section-subtitle">
            Customer
          </div>
          <div class="col-span-10 sm:col-span-10">
            {{ orderData.order.firstName.value }} {{ orderData.order.lastName.value }}
          </div>
          <div class="col-span-2 text-right sm:col-span-2">
            <span v-wave class="ml-auto text-primeblue cursor-pointer click-effect" @click="$router.go(-1)">Edit</span>
          </div>
          <div class="col-span-12 sm:col-span-6">
            <div class="text-gray-500">
              Phone
            </div>
            {{ orderData.order.phoneCode.value.text }} {{ orderData.order.phone.value }}
          </div>
          <div class="col-span-12 sm:col-span-6">
            <div class="text-gray-500">
              Email
            </div>
            {{ orderData.order.email.value }}
          </div>
        </div>
      </div>
    </div>
    <SeparatorLine class="max-w-screen-lg my-8 mx-auto" />
    <div class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 section-subtitle">
            Passanger
          </div>
          <div class="col-span-10 sm:col-span-10">
            {{ orderData.passanger.firstName.value }} {{ orderData.passanger.lastName.value }}
          </div>
          <div class="col-span-2 text-right sm:col-span-2">
            <span v-wave class="ml-auto text-primeblue cursor-pointer click-effect" @click="$router.go(-1)">Edit</span>
          </div>
          <div class="col-span-12">
            <div class="text-gray-500">
              Birth date
            </div>
            {{ orderData.passanger.birthDate.value }}
          </div>
        </div>
      </div>
    </div>
    <SeparatorLine class="max-w-screen-lg my-8 mx-auto" />
    <div class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 section-subtitle">
            Price detail
          </div>
          <div class="col-span-12">
            <div class="divide-y divide-gray-400">
              <div class="flex items-start w-full py-2">
                <div class="w-1/2">
                  Plane ticket &times;1 + travel insurance
                </div>
                <div class="w-1/2 text-right">
                  {{ schedule.price | currencyIDR }}
                </div>
              </div>
              <div class="flex items-start w-full py-2">
                <div class="w-1/2" style="font-size: 1.25rem;">
                  Total
                </div>
                <div class="w-1/2 text-right font-medium text-primeorange" style="font-size: 1.25rem;">
                  {{ schedule.price | currencyIDR }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12">
            <div class="flex justify-end w-full">
              <SpButton color="primeblue" @click.native="$router.push('/order/payment')">
                Proceed to payment
              </SpButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeparatorLine from '~/components/partial/SeparatorLine'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'OrderDataReviewPage',

  components: {
    SeparatorLine,
    SpButton
  },

  layout: 'order',

  data () {
    return {
      orderData: null,
      schedule: null
    }
  },

  fetch () {
    this.orderData = JSON.parse(window.localStorage.getItem('orderData'))
    if (!this.orderData) { this.$router.go(-1) }
    this.schedule = JSON.parse(window.localStorage.getItem('schedule'))
  },

  head: { title: 'Order - Data review |' },

  methods: {}
}
</script>
