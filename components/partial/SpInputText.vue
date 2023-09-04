<template>
  <div class="w-full" :class="{ 'relative': icon }">
    <label v-if="label" :for="`inputText${id}`">{{ label }}</label>
    <template v-if="type === 'text' || type === 'email' || type === 'password'">
      <div
        v-if="icon && iconPlacement === 'inside'"
        class="flex items-center absolute h-10 px-4"
        :class="{
          'mt-1': label,
          '-mt-1': !label,
          'right-0': icon === 'right',
          'left-0': icon === 'left'
        }"
      >
        <slot name="icon" />
      </div>
      <div :class="{ 'flex items-center w-full space-x-2': icon && iconPlacement === 'outside' }">
        <slot v-if="icon === 'left' && iconPlacement === 'outside'" name="icon" />
        <input
          v-if="!imitation"
          :id="`inputText${id}`"
          :ref="`inputText${id}`"
          :value="value"
          :name="`inputText${id}`"
          :type="type"
          :inputmode="inputmode"
          :disabled="disabled"
          :placeholder="placeholder"
          :maxlength="maxlength > 0 ? maxlength : 50"
          class="duration-300"
          :class="[inputTextKindClass, inputClass]"
          style="outline: none !important;"
          :style="[padding]"
          @focus="$emit('focus')"
          @input="$emit('input', $event.target.value)"
          @blur="$emit('blur')"
        >
        <div
          v-if="imitation"
          class="select-none"
          :class="[
            inputTextKindClass, inputClass,
            {
              'text-gray-400': imitation && emptyText && isEmpty,
              'cursor-text': !disabled
            }
          ]"
          style="height: calc((.75rem * 2) + 1.5rem + .2rem);"
        >
          <div class="whitespace-nowrap overflow-hidden">
            {{ emptyText }}
          </div>
        </div>
        <slot v-if="icon === 'right' && iconPlacement === 'outside'" name="icon" />
      </div>
    </template>
    <textarea
      v-if="type === 'textarea'"
      :id="`inputText${id}`"
      :ref="`inputText${id}`"
      :value="value"
      :name="`inputText${id}`"
      :disabled="disabled"
      :rows="rows"
      :placeholder="placeholder"
      class="duration-300"
      :class="[inputTextKindClass, inputClass]"
      style="outline: none !important;"
      :style="[padding]"
      @focus="$emit('focus')"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
    />
    <ClientOnly v-if="type === 'date' || type === 'year'">
      <DatePicker
        v-model="valueDatePicker"
        :type="type"
        value-type="format"
        :format="formatDate"
        :range="range"
        range-separator=" - "
        :clearable="clearable"
        :disabled-date="disabledDate"
        :input-class="[inputTextKindClass, inputDateClass]"
        :input-attr="{ style: `padding: ${padding.paddingTop} ${padding.paddingRight} ${padding.paddingBottom} ${padding.paddingLeft}` }"
        :placeholder="placeholder"
        @input="$emit('input', valueDatePicker)"
      />
    </ClientOnly>
    <SpErrorText v-if="error" :text="error" />
  </div>
</template>

<script>
import SpErrorText from '~/components/partial/SpErrorText'

export default {
  name: 'SpInputText',

  components: { SpErrorText },

  props: {
    imitation: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: [String, Array],
      default: null
    },
    emptyText: {
      type: String,
      default: null
    },
    isEmpty: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text' // text, email, password, textarea, date, year
    },
    inputmode: {
      type: String,
      default: 'text' // text, email, tel
    },
    placeholder: {
      type: String,
      default: null
    },
    maxlength: {
      type: Number,
      default: 0
    },
    error: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: String,
      default: '3'
    },
    round: {
      type: Boolean,
      default: false
    },
    inputClass: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null // right, left
    },
    iconPlacement: {
      type: String,
      default: 'inside' // inside, outside
    },
    inputDateClass: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: true
    },
    disabledDateType: {
      type: String,
      default: null // beforeToday, afterToday
    },
    formatDate: {
      type: String,
      default: 'DD MMMM YYYY'
    },
    range: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      id: null,
      fragmentedRem: '(1rem / 4)',
      valueDatePicker: null
    }
  },

  fetch () {
    this.id = this._uid
    this.valueDatePicker = this.value
  },

  computed: {
    inputTextKindClass () {
      return {
        'mt-1': this.label,
        'w-full border border-gray-300 rounded-lg placeholder-gray-400': this.type === 'text' || this.type === 'email' || this.type === 'password' || this.type === 'textarea' || this.type === 'date' || this.type === 'year',
        'bg-white': ((this.type === 'text' || this.type === 'email' || this.type === 'password' || this.type === 'textarea' || this.type === 'date' || this.type === 'year') && !this.disabled),
        'focus:ring focus:ring-opacity-90 focus:ring-offset-2 focus:ring-offset-white focus:ring-primeblue': (this.type === 'text' || this.type === 'email' || this.type === 'password' || this.type === 'textarea' || this.type === 'date' || this.type === 'year') && !this.disabled && !this.error,
        'border-red-500 ring ring-offset-2 ring-offset-white ring-red-500': !this.disabled && this.error,
        'bg-gray-300 cursor-not-allowed select-none': this.disabled,
        'rounded-full': this.round
      }
    },

    padding () {
      const py = `calc((${this.fragmentedRem} * 2) - 2px)`
      const px = `calc((${this.fragmentedRem} * 4) - 1px)`
      return {
        paddingTop: py,
        paddingBottom: py,
        paddingRight: this.icon === 'right' && this.iconPlacement === 'inside' ? `calc((${this.fragmentedRem} * 14) - 1px)` : this.type === 'date' || this.type === 'year' ? `calc((${this.fragmentedRem} * 8) - 1px)` : px,
        paddingLeft: this.icon === 'left' && this.iconPlacement === 'inside' ? `calc((${this.fragmentedRem} * 14) - 1px)` : px
      }
    }
  },

  methods: {
    disabledDate (date) {
      if (this.disabledDateType === 'beforeToday') {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date < today
      }
      if (this.disabledDateType === 'afterToday') {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date > today
      }
    }
  }
}
</script>

<style lang="less">
  .mx-datepicker {
    width: 100% !important;
    input {
      @apply duration-300;
      outline: none !important;
    }
  }
  .mx-datepicker-popup {
    @apply rounded-md;
    .mx-calendar-content .mx-table .cell {
      @apply rounded-md duration-300;
      &:not(.active):not(.disabled):hover {
        background-color: rgba(0, 83, 248, 0.3);
        color: inherit !important;
      }
      &.today:not(.active) {
        @apply border border-primeblue;
        color: #002d89 !important;
      }
      &.active {
        background-color: #002d89;
        color: #fff;
      }
      &.not-current-month:not(.disabled) { color: rgba(31, 41, 55, 0.5) !important; }
      &.disabled { background: none; }
    }
  }
</style>
