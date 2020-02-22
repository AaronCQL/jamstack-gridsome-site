<template>
  <a
    class="transition duration-150 ease-in-out font-semibold text-primary hover:text-secondary"
    :href="href"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "MyLink",
  props: {
    href: String,
  },
};
</script>
