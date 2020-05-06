<template>
  <div
    class="transition-all duration-150 ease-out px-4 py-2 border-secondary border-l hover:border-l-8 hover:-ml-2"
  >
    <div class="text-xl font-title font-semibold">
      {{ title }}
    </div>
    <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-800'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
};
</script>
