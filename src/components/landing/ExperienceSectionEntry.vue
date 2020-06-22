<template>
  <div class="border-l-2 border-secondary-light pl-2 mb-6">
    <div>
      <slot name="logo"></slot>
    </div>
    <div class="flex flex-col sm:flex-row font-title justify-between">
      <div class="text-lg italic">
        {{ title }}
      </div>
      <div>
        {{ date }}
      </div>
    </div>
    <div
      class="mt-2"
      :class="isDarkMode ? 'text-subsection-dark' : 'text-subsection-light'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    title: String,
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
};
</script>
