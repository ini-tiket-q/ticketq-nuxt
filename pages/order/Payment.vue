<template>
  <div>
    <div class="bg-primeorange text-white text-center">
      <div class="container py-1">
        Complete this payment within 1 hour or this order will be automatically canceled
      </div>
    </div>
    <div class="max-w-screen-sm mx-auto">
      <div class="section bg-white">
        <div class="container">
          <div v-if="!paid" class="grid grid-cols-12 gap-4">
            <div class="col-span-12 section-subtitle">
              Bank transfer
            </div>
            <div class="col-span-12 sm:col-span-6">
              <div class="font-semibold pb-2 border-b border-gray-400">
                Order #001
              </div>
              <div class="pt-2">
                <div class="text-gray-500">
                  Flight
                </div>
                <div>
                  {{ schedule.stopPoint[0].location.city }} - {{ schedule.stopPoint[schedule.stopPoint.length - 1].location.city }}
                </div>
                <div>
                  {{ schedule.stopPoint[0].at | moment('LLLL') }}
                </div>
              </div>
              <div class="pt-2">
                <div class="text-gray-500">
                  Passanger
                </div>
                <div>
                  {{ orderData.passanger.firstName.value }} {{ orderData.passanger.lastName.value }}
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <div class="font-semibold pb-2 border-b border-gray-400">
                Bank options
              </div>
              <div class="space-y-2 pt-2">
                <div v-for="(account, index) in bankAccount" :key="index" class="p-2 border border-primeblue rounded-lg">
                  <SpInputRadio v-model="inputBankAccount" name="radioBankAccount" :value="account">
                    <div class="flex items-center w-full space-x-2">
                      <div class="h-8 w-24 bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: `url(${require('~/assets/img/icon/payment/' + account.bank.logo)})` }" />
                      <span>{{ account.bank.name }}</span>
                    </div>
                  </SpInputRadio>
                </div>
                <div v-if="inputBankAccount" class="border border-primeblue rounded-lg">
                  <div class="space-y-2 p-2">
                    <div class="flex items-center w-full space-x-2">
                      <div class="h-8 w-24 bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: `url(${require('~/assets/img/icon/payment/' + inputBankAccount.bank.logo)})` }" />
                      <span>{{ inputBankAccount.bank.name }}</span>
                    </div>
                    <div>
                      <div class="text-gray-500">
                        Account number
                      </div>
                      <div>
                        {{ inputBankAccount.number }}&nbsp;<span v-wave class="text-primeblue cursor-pointer click-effect" @click="copy(inputBankAccount.number)">Copy</span>
                      </div>
                    </div>
                    <div>
                      <div class="text-gray-500">
                        In name
                      </div>
                      <div>
                        {{ inputBankAccount.receiver }}
                      </div>
                    </div>
                  </div>
                  <div class="p-2 border-t border-primeblue">
                    <div class="text-gray-500">
                      Transfer amount
                    </div>
                    <div>
                      {{ schedule.price | currencyIDR }}&nbsp;<span v-wave class="text-primeblue cursor-pointer click-effect" @click="copy(schedule.price)">Copy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 text-primeblue">
                Once you have paid, upload the receipt and click the verification button
              </div>
              <input type="file" name="paymentProof" accept="image/*" class="mt-1">
              <SpButton color="primeblue" class="mt-4" @click.native="verifyPayment">
                Verify payment
              </SpButton>
            </div>
          </div>
          <div v-if="paid" class="text-center space-y-2 pt-12">
            <div class="section-subtitle text-primeblue">
              Pembayaran diterima<br>Terimakasih atas pembelian anda
            </div>
            <div>
              Your eTicket has sent to email
            </div>
            <SpButton color="primeblue" class="mx-auto" @click.native="$router.push('/')">
              Back to home
            </SpButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpInputRadio from '~/components/partial/SpInputRadio'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'OrderPaymentPage',

  components: {
    SpInputRadio,
    SpButton
  },

  layout: 'order',

  data () {
    return {
      orderData: null,
      schedule: null,
      bankAccount: [
        {
          bank: {
            name: 'Bank Central Asia',
            logo: 'bca.png'
          },
          number: '8944553',
          receiver: 'PT.Quetiket'
        },
        {
          bank: {
            name: 'Bank Negara Indonesia',
            logo: 'bni.png'
          },
          number: '8944553',
          receiver: 'PT.Quetiket'
        },
        {
          bank: {
            name: 'Bank Mandiri',
            logo: 'mandiri.png'
          },
          number: '8944553',
          receiver: 'PT.Quetiket'
        }
      ],
      inputBankAccount: null,
      inputReceipt: null,
      paid: false
    }
  },

  fetch () {
    this.orderData = JSON.parse(window.localStorage.getItem('orderData'))
    this.schedule = JSON.parse(window.localStorage.getItem('schedule'))
    if (!this.orderData) { this.$router.replace('/order/data') }
    if (!this.schedule) { this.$router.replace('/') }
  },

  head: { title: 'Order - Payment |' },

  methods: {
    copy (item) { navigator.clipboard.writeText(item) },

    verifyPayment () {
      if (this.inputReceipt) { this.paid = true }
    }
  }
}
</script>
