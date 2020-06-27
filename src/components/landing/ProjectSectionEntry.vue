<template>
  <div
    class="rounded-md p-3 border flex flex-col justify-between"
    :class="isDarkMode ? 'bg-black border-gray-700' : 'bg-white'"
  >
    <div>
      <div class="text-xl font-title font-semibold">
        {{ title }}
      </div>
      <div class="font-title">
        {{ formattedStack }}
      </div>
      <div
        class="mt-2"
        :class="isDarkMode ? 'text-subsection-dark' : 'text-subsection-light'"
      >
        <slot></slot>
      </div>
    </div>
    <div class="mt-6 flex justify-between items-center">
      <div
        :class="{
          'text-subsection-dark': isDarkMode,
          'text-subsection-light': !isDarkMode,
          invisible: starCount < 1,
        }"
      >
        <font-awesome-icon :icon="['far', 'star']" />
        {{ starCount }}
      </div>
      <div class="space-x-3">
        <button-link v-if="sourceCodeUrl" label="Code" :url="sourceCodeUrl" />
        <button-link v-if="demoUrl" label="Demo" :url="demoUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "./../shared/ButtonLink";

export default {
  props: {
    title: String,
    stack: Array,
    sourceCodeUrl: String,
    demoUrl: String,
    repoApiUrl: String,
  },
  components: {
    ButtonLink,
  },
  data: function() {
    return {
      starCount: 0,
    };
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
    formattedStack() {
      return this.stack ? this.stack.join("/") : "";
    },
  },
  methods: {
    async getStarCount() {
      if (!this.repoApiUrl) {
        return;
      }
      const response = await fetch(this.repoApiUrl);
      const data = await response.json();
      this.starCount = data.stargazers_count;
    },
  },
  async mounted() {
    this.getStarCount();
  },
};
</script>
