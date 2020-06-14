<template>
  <a :href="url" target="_blank">
    <button
      :class="
        isDarkMode
          ? 'bg-indigo-500 text-indigo-300'
          : 'bg-indigo-300 text-indigo-700'
      "
      class="transition ease-in-out duration-150 rounded sm:px-2 sm:py-0 px-3 py-1 bg-opacity-25 hover:bg-opacity-50 text-lg font-semibold focus:outline-none focus:shadow-outline"
    >
      {{ label }}
    </button>
  </a>
</template>

<script>
export default {
  props: {
    label: String,
    url: String,
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
};
</script>
