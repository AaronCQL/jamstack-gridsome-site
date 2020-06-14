<template>
  <div class="px-4 py-2">
    <div class="flex font-title justify-between">
      <span class="text-xl font-semibold">
        {{ company }}
      </span>
      <span>
        {{ date }}
      </span>
    </div>
    <div class="text-lg font-title italic">
      {{ title }}
    </div>
    <div :class="isDarkMode ? 'text-subsection-dark' : 'text-subsection-light'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: String,
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
