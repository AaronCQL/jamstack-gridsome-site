<template>
  <div :class="isDarkMode ? 'text-header-dark' : 'text-header-light'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    href: String,
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
};
</script>
