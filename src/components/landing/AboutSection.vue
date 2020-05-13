<template>
  <div class="text-lg">
    <section-header>
      About Me
    </section-header>

    <div>
      <p>
        Hello! I am Aaron Choo, a computer science student at the
        <styled-link href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
          National University of Singapore (NUS)</styled-link
        >
        graduating in May 2022. I currently work part-time as a Software
        Engineer Intern at
        <styled-link href="https://qashier.co/">Qashier</styled-link>.
      </p>
      <p class="mt-4">
        Scroll down to see some projects I have made since starting university.
        Otherwise, you can just enjoy my lovely stacks.
      </p>
    </div>
  </div>
</template>

<script>
import StyledLink from "./../shared/StyledLink";
import SectionHeader from "./../shared/SectionHeader";

export default {
  name: "AboutSection",
  components: {
    StyledLink,
    SectionHeader,
  },
};
</script>

<style></style>
