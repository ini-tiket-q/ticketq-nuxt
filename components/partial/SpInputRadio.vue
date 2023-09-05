<template>
  <div class="flex items-center">
    <input
      :id="`inputRadio${id}`"
      type="radio"
      :name="name"
      :value="value"
      :checked="isChecked"
      class="hidden w-0 h-0 fixed"
      style="top: -21px;"
      :disabled="disabled"
      @change="$emit('change', value)"
    >
    <label
      :for="`inputRadio${id}`"
      class="flex items-center btn-effect duration-300"
      :class="[
        labelClass,
        {
          'text-gray-300 cursor-not-allowed': disabled,
          'w-full hover:bg-gray-400 hover:bg-opacity-20': markPosition === 'right'
        }
      ]"
    >
      <div
        class="duration-300"
        :class="{
          'mr-2': markPosition === 'left',
          'order-2 mr-0 ml-auto': markPosition === 'right'
        }"
      >
        <div
          class="flex items-center justify-center h-6 w-6 border rounded-full duration-300"
          :class="{
            'border-gray-800 dark:border-gray-200': !isChecked,
            'border-primeblue': isChecked
          }"
          style="padding: 0.135rem;"
        >
          <div
            class="w-3/4 h-3/4 rounded-full bg-primeblue duration-300"
            :class="{
              'opacity-0': !isChecked,
              'opacity-100': isChecked
            }"
          />
        </div>
      </div>
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'SpInputRadio',

  model: {
    prop: 'valueModel',
    event: 'change'
  },

  props: {
    markPosition: {
      type: String,
      default: 'left' // left, right
    },
    name: {
      type: String,
      default: null,
      required: true
    },
    value: {
      type: [String, Object, Boolean],
      default: null
    },
    labelClass: {
      type: String,
      default: null
    },
    valueModel: {
      type: [String, Object, Boolean],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return { id: null }
  },

  fetch () { this.id = this._uid },

  computed: {
    isChecked () { return this.valueModel === this.value }
  }
}
</script>
