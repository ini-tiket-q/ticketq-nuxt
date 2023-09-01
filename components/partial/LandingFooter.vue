<template>
  <div class="section footer bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/illu/footer.jpg')})` }">
    <div class="bg-primeblue-900 bg-opacity-75 text-white">
      <div class="container pt-12 pb-8 lg:pt-24 xl:px-24">
        <div class="space-y-12 lg:flex lg:space-y-0 lg:space-x-8 lg:w-full">
          <!-- <div class="md:w-full lg:w-1/4">
            <div class="h-12 w-full mb-8 bg-contain bg-left bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/logoLong.png')})` }" />
            {{ $t('footerDesc') }}
          </div> -->
          <div class="space-y-12 sm:flex sm:space-y-0 sm:space-x-24 sm:w-full lg:w-2/3">
            <div class="sm:w-1/2">
              <div class="font-semibold text-yellow-400">
                Contact Us
              </div>
              <div class="flex flex-col space-y-4 mt-8">
                <div class="flex items-start space-x-4 w-full">
                  <div class="1/12">
                    <solid-home-icon class="w-6 h-6" />
                  </div>
                  <div class="w-11/12">
                    {{ $contact.address.text }}
                  </div>
                </div>
                <a v-wave :href="`mailto:${$contact.email.value}`" target="_blank">
                  <div class="flex items-start space-x-4 w-full">
                    <div class="1/12">
                      <solid-mail-icon class="w-6 h-6" />
                    </div>
                    <div class="w-11/12">
                      {{ $contact.email.text }}
                    </div>
                  </div>
                </a>
                <a v-wave :href="`tel:${$contact.phone.value}`" target="_blank">
                  <div class="flex items-start space-x-4 w-full">
                    <div class="1/12">
                      <solid-phone-icon class="w-6 h-6" />
                    </div>
                    <div class="w-11/12">
                      {{ $contact.phone.text }}
                    </div>
                  </div>
                </a>
                <div class="flex items-start space-x-4 w-full">
                  <div class="1/12">
                    <solid-clock-icon class="w-6 h-6" />
                  </div>
                  <div class="w-11/12">
                    Monday to Friday<br>08.00 - 15.00
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:w-1/2">
              <div class="font-semibold text-yellow-400">
                Other Links
              </div>
              <div class="flex flex-col space-y-4 mt-8">
                <div>
                  <a href="https://bpbatam.go.id" target="_blank">
                    About BP Batam
                  </a>
                </div>
                <div>
                  <a href="https://www.kemenkumham.go.id" target="_blank">
                    Official Portal of the Indonesian Ministry of Law and Human Rights
                  </a>
                </div>
                <div>
                  <a href="https://bphn.jdihn.go.id" target="_blank">
                    The Official Portal of the National Legal Development Agency
                  </a>
                </div>
                <div>
                  <a href="https://ditjenpp.kemenkumham.go.id" target="_blank">
                    Directorate General of Legislation
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-full lg:w-1/3">
            <div class="font-semibold text-yellow-400">
              Location
            </div>
            <div class="rounded-lg mt-8 overflow-hidden">
              <iframe
                :src="$contact.map.value"
                class="h-80 w-full lg:h-40"
                style="border: 0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-4 w-full pt-6 border-t border-white mt-12">
          <a v-wave :href="$contact.twitter.value" target="_blank">
            <div class="w-6 h-6 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/twitter.png')})` }" />
          </a>
          <a v-wave :href="$contact.ig.value" target="_blank">
            <div class="w-6 h-6 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/ig.png')})` }" />
          </a>
          <a v-wave :href="$contact.fb.value" target="_blank">
            <div class="w-6 h-6 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/fb.png')})` }" />
          </a>
          <a v-wave :href="$contact.yt.value" target="_blank">
            <div class="w-6 h-6 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${require('~/assets/img/icon/yt.png')})` }" />
          </a>
        </div>
        <div class="mt-6 text-center">
          &copy; 2023. Legal Documents and Information Network of BP Batam
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingFooter'
}
</script>
