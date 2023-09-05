<template>
  <div>
    <div class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 section-subtitle">
            Customer data (to receive eTicket)
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText v-model="input.order.firstName.value" label="First name (& middle name if have)" placeholder="Example: John Edward" :error="input.order.firstName.error" />
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText v-model="input.order.lastName.value" label="Last name" placeholder="Example: Doe" :error="input.order.lastName.error" />
          </div>
          <div class="col-span-12 sm:col-span-6">
            <div>
              Phone number
              <div class="flex w-full mt-1">
                <SpSelect placeholder="Phone code" :list="phoneCode" :error="input.order.phoneCode.error" @change="selectPhoneCode" />
                <SpInputText v-if="input.order.phoneCode.value" v-model="input.order.phone.value" placeholder="81234567890" :error="input.order.phone.error" />
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText v-model="input.order.email.value" label="email" placeholder="Example: johndoe@mail.com" :error="input.order.email.error" />
          </div>
        </div>
      </div>
    </div>
    <SeparatorLine class="max-w-screen-lg my-8 mx-auto" />
    <div class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 section-subtitle">
            Passanger data
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText v-model="input.passanger.firstName.value" label="First name (& middle name if has)" placeholder="Example: John Edward" :error="input.passanger.firstName.error" />
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText v-model="input.passanger.lastName.value" label="Last name" placeholder="Example: Doe" :error="input.passanger.lastName.error" />
          </div>
          <div class="col-span-12">
            <SpInputText
              v-model="input.passanger.birthDate.value"
              type="date"
              format-date="MMMM DD, YYYY"
              label="Birth date"
              placeholder="Pick birth date"
              :error="input.passanger.birthDate.error"
            />
          </div>
          <div class="col-span-12">
            <div class="flex justify-end w-full">
              <SpButton color="primeblue" @click.native="validateForm">
                Next
              </SpButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpInputText from '~/components/partial/SpInputText'
import SpSelect from '~/components/partial/SpSelect'
import SeparatorLine from '~/components/partial/SeparatorLine'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'OrderDataPage',

  components: {
    SpInputText,
    SpSelect,
    SeparatorLine,
    SpButton
  },

  layout: 'order',

  data () {
    return {
      phoneCode: [],
      input: {
        order: {
          firstName: { value: null, error: null },
          lastName: { value: null, error: null },
          phoneCode: { value: null, error: null },
          phone: { value: null, error: null },
          email: { value: null, error: null }
        },
        passanger: {
          firstName: { value: null, error: null },
          lastName: { value: null, error: null },
          birthDate: { value: null, error: null }
        }
      }
    }
  },

  fetch () {
    this.getAllPhoneCode()
    if (JSON.parse(window.localStorage.getItem('orderData'))) {
      const orderData = JSON.parse(window.localStorage.getItem('orderData'))
      this.input.order.firstName.value = orderData.order.firstName.value
      this.input.order.lastName.value = orderData.order.lastName.value
      this.input.order.phoneCode.value = orderData.order.phoneCode.value
      this.input.order.phone.value = orderData.order.phone.value
      this.input.order.email.value = orderData.order.email.value
      this.input.passanger.firstName.value = orderData.passanger.firstName.value
      this.input.passanger.lastName.value = orderData.passanger.lastName.value
      this.input.passanger.birthDate.value = orderData.passanger.birthDate.value
    }
  },

  head: { title: 'Order - Data completion |' },

  methods: {
    getAllPhoneCode () {
      this.phoneCode = [
        { value: '62', text: '+62' }
      ]
    },

    selectPhoneCode (selection) { this.input.order.phoneCode.value = selection },

    validateForm () {
      if (this.input.order.firstName.value && this.input.order.lastName.value && this.input.order.phoneCode.value && this.input.order.phone.value && this.input.order.email.value && this.input.passanger.firstName.value && this.input.passanger.lastName.value && this.input.passanger.birthDate.value) {
        window.localStorage.setItem('orderData', JSON.stringify(this.input))
        this.$router.push('/order/review')
      }
      if (this.input.order.firstName.value) { this.input.order.firstName.error = null }
      if (this.input.order.lastName.value) { this.input.order.lastName.error = null }
      if (this.input.order.phoneCode.value) { this.input.order.phoneCode.error = null }
      if (this.input.order.phone.value) { this.input.order.phone.error = null }
      if (this.input.order.email.value) { this.input.order.email.error = null }
      if (!this.input.order.firstName.value) { this.input.order.firstName.error = 'First name is required' }
      if (!this.input.order.lastName.value) { this.input.order.lastName.error = 'Last name is required' }
      if (!this.input.order.phoneCode.value) { this.input.order.phoneCode.error = 'Phone code is required' }
      if (!this.input.order.phone.value) { this.input.order.phone.error = 'Phone number is required' }
      if (!this.input.order.email.value) { this.input.order.email.error = 'Email is required' }
      if (this.input.passanger.firstName.value) { this.input.passanger.firstName.error = null }
      if (this.input.passanger.lastName.value) { this.input.passanger.lastName.error = null }
      if (this.input.passanger.birthDate.value) { this.input.passanger.birthDate.error = null }
      if (!this.input.passanger.firstName.value) { this.input.passanger.firstName.error = 'First name is required' }
      if (!this.input.passanger.lastName.value) { this.input.passanger.lastName.error = 'Last name is required' }
      if (!this.input.passanger.birthDate.value) { this.input.passanger.birthDate.error = 'Birth date is required' }
    }
  }
}
</script>
