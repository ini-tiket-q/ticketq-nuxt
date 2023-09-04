<template>
  <div>
    <div v-if="showOption" class="fixed top-0 left-0 h-screen w-screen" @click="cancel" />
    <SpInputText
      v-model="inputSearch"
      :label="label"
      :placeholder="placeholder"
      icon="right"
      :disabled="disabled"
      :error="error"
      class="relative"
      @click.native="clickInput"
      @focus="showOption = true"
      @input="searchMode = true"
      @keydown.native.esc="cancel"
      @keydown.native.tab="cancel"
    >
      <template #icon>
        <solid-chevron-down-icon class="h-6 w-6 transform duration-300" :class="{ '-rotate-180': showOption }" @click.native="showOption = !showOption" />
      </template>
    </SpInputText>
    <div v-if="!disabled" class="relative">
      <div class="flex flex-col w-full border-gray-300 rounded-lg bg-white overflow-x-hidden duration-300" :class="{ 'py-1 border overflow-y-auto': showOption, 'border-0 overflow-y-hidden': !showOption, 'absolute top-0 left-0 z-10': absoluteOptionPosition }" :style="{ maxHeight: showOption ? '210px' : 0 }">
        <template v-if="filteredList.length > 0">
          <div v-for="(option, index) in filteredList" :key="index" class="w-full py-1 px-4 duration-300 cursor-default hover:bg-gray-200" @click="select(option)">
            <div>
              {{ option.text }}
            </div>
          </div>
        </template>
        <span v-else class="py-1 px-4">Ups, data tidak ditemukan</span>
      </div>
    </div>
  </div>
</template>

<script>
import SpInputText from '~/components/partial/SpInputText'

export default {
  name: 'SpSelect',

  components: { SpInputText },

  props: {
    list: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    error: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    absoluteOptionPosition: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      searchMode: false,
      inputSearch: null,
      selection: null,
      showOption: false
    }
  },

  computed: {
    filteredList () {
      let tempList = this.list
      if (this.searchMode) {
        tempList = tempList.filter((item) => {
          return item.text
            .toString()
            .toUpperCase()
            .includes(this.inputSearch.toUpperCase())
        })
      }
      return tempList
    }
  },

  methods: {
    clickInput () {
      if (!this.disabled) { this.showOption = true }
    },

    select (option) {
      this.selection = option
      this.inputSearch = this.selection.text
      this.showOption = false
      this.searchMode = false
      this.$emit('change', this.selection)
    },

    cancel () {
      this.showOption = false
      this.searchMode = false
      this.inputSearch = this.selection ? this.selection.text : null
    },

    clear () { this.inputSearch = null }
  }
}
</script>
