<template>
  <div class="text-lg">
    <section-header>
      About Me
    </section-header>

    <div>
      <p>
        Hello! I am Aaron Choo, a third year student at the
        <styled-link href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
          National University of Singapore (NUS)</styled-link
        >
        majoring in Computer Science and graduating in May 2022. I am currently
        undergoing an internship as a Systems Engineer at
        <styled-link href="https://www.visa.com.sg/">Visa Inc.</styled-link>
        under the Operations & Infrastructure team.
      </p>
      <p class="mt-4">
        I am deeply passionate about all things tech related, especially in
        areas like Cloud Computing and Full Stack Web Development. Scroll down
        to see some projects I have made since starting university!
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
