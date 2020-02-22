<template>
  <div class="text-lg">
    <h1 class="text-4xl text-secondary font-title font-semibold">
      About Me
    </h1>

    <p>
      Hello! I am Aaron Choo, a second year computer science student at the
      <my-link href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
        National University of Singapore (NUS)</my-link
      >. I currently work part-time as a Software Engineer Intern at
      <my-link href="https://qashier.co/">Qashier</my-link>.
    </p>
    <p class="mt-4">
      Scroll down to see some projects I have made since starting university.
      Otherwise, you can just enjoy my lovely stacks.
    </p>
  </div>
</template>

<script>
import MyLink from "~/components/MyLink.vue";

export default {
  name: "AboutSection",
  components: {
    MyLink,
  },
};
</script>

<style></style>
