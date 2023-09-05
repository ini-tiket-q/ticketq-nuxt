<template>
  <div>
    <div class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 section-title">
            Profile
          </div>
          <div class="col-span-12 section-subtitle">
            Personal data
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText v-model="input.fullName.value" label="Full name" placeholder="Enter your full name" :error="input.fullName.error" />
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText
              v-model="input.birthDate.value"
              type="date"
              format-date="MMMM DD, YYYY"
              label="Birth date"
              placeholder="Enter your birth date"
              :error="input.birthDate.error"
            />
          </div>
          <div class="col-span-12 sm:col-span-6">
            <label>Gender</label>
            <div class="flex items-center w-full space-x-4 mt-1">
              <SpInputRadio v-for="(gender, index) in [{ value: 'M', text: 'Male' }, { value: 'F', text: 'Female' }]" :key="index" v-model="input.gender.value" name="radioGender" :value="gender.value">
                {{ gender.text }}
              </SpInputRadio>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText v-model="input.address.value" label="Address" placeholder="Enter your domicile address" :error="input.address.error" />
          </div>
        </div>
      </div>
    </div>
    <SeparatorLine class="max-w-screen-lg my-8 mx-auto" />
    <div class="section bg-white">
      <div class="container pb-8">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 section-subtitle">
            Contact
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText
              v-model="input.email.value"
              type="email"
              inputmode="email"
              label="Email"
              placeholder="Enter your email"
              :error="input.email.error"
            />
          </div>
          <div class="col-span-12 sm:col-span-6">
            <SpInputText v-model="input.phone.value" inputmode="tel" label="Phone number" placeholder="Example: Doe" :error="input.phone.error" />
          </div>
          <div class="col-span-12">
            <div class="flex justify-end w-full space-x-2">
              <SpButton color="white" @click.native="$router.go(-1)">
                Cancel
              </SpButton>
              <SpButton color="primeblue" @click.native="validateForm">
                Edit profile
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
import SpInputRadio from '~/components/partial/SpInputRadio'
import SeparatorLine from '~/components/partial/SeparatorLine'
import SpButton from '~/components/partial/SpButton'

export default {
  name: 'ProfilePage',

  components: {
    SpInputText,
    SpInputRadio,
    SeparatorLine,
    SpButton
  },

  layout: 'landing',

  data () {
    return {
      input: {
        fullName: { value: null, error: null },
        birthDate: { value: null, error: null },
        gender: { value: null, error: null },
        address: { value: null, error: null },
        email: { value: null, error: null },
        phone: { value: null, error: null }
      }
    }
  },

  fetch () {
    this.input.fullName.value = 'John Edward Doe'
    this.input.birthDate.value = '2023-09-05T08:40:27+00:00'
    this.input.gender.value = 'M'
    this.input.address.value = 'Jamaica'
    this.input.phone.value = '081234567890'
    this.input.email.value = 'john@mail.com'
  },

  head: { title: 'Profile |' },

  methods: {
    validateForm () {
      // if (this.input.fullName.value && this.input.birthDate.value && this.input.gender.value && this.input.address.value && this.input.phone.value && this.input.email.value) {}
      if (this.input.fullName.value) { this.input.fullName.error = null }
      if (this.input.birthDate.value) { this.input.birthDate.error = null }
      if (this.input.gender.value) { this.input.gender.error = null }
      if (this.input.address.value) { this.input.address.error = null }
      if (this.input.phone.value) { this.input.phone.error = null }
      if (this.input.email.value) { this.input.email.error = null }
      if (!this.input.fullName.value) { this.input.fullName.error = 'Full name is required' }
      if (!this.input.birthDate.value) { this.input.birthDate.error = 'Birth date is required' }
      if (!this.input.address.value) { this.input.address.error = 'Address is required' }
      if (!this.input.gender.value) { this.input.gender.error = 'Gender is required' }
      if (!this.input.phone.value) { this.input.phone.error = 'Phone number is required' }
      if (!this.input.email.value) { this.input.email.error = 'Email is required' }
    }
  }
}
</script>
