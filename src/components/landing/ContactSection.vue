<template>
  <div class="text-lg">
    <h1 class="text-4xl text-secondary font-title font-semibold">
      Contact Me
    </h1>

    <p>
      If you'd like to buy me a coffee (Kopi-O Kosong please), chat about our
      shared love for JavaScript, or even hire me, feel free to contact me via
      my <my-link href="mailto:choozy.aaron@gmail.com">email</my-link> or send a
      connection over to my
      <my-link href="https://www.linkedin.com/in/aaroncql/">LinkedIn</my-link>.
    </p>
  </div>
</template>

<script>
import MyLink from "~/components/MyLink.vue";

export default {
  name: "ContactSection",
  components: {
    MyLink,
  },
};
</script>

<style></style>
