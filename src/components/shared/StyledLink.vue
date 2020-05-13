<template>
  <a :class="isDarkMode ? 'a-dark' : 'a-light'" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "StyledLink",
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
