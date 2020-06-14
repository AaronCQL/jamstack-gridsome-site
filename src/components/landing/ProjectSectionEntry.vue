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
    <div class="mt-2 text-right">
      <button-link
        v-if="sourceCodeUrl"
        class="mr-3"
        label="Code"
        :url="sourceCodeUrl"
      />
      <button-link v-if="demoUrl" label="Demo" :url="demoUrl" />
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
  },
  components: {
    ButtonLink,
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
    formattedStack() {
      return this.stack ? this.stack.join("/") : "";
    },
  },
};
</script>
