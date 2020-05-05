<template>
  <div class="px-4 py-2">
    <div class="font-title flex justify-between">
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
    <div class="text-gray-800 text-md">
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
};
</script>
