<template>
  <div class="text-lg">
    <section-header>
      Contact Me
    </section-header>

    <p>
      If you'd like to buy me a coffee (Kopi-C Kosong please), chat about all
      things cloud related, or even hire me, feel free to contact me via my
      <styled-link href="mailto:choozy.aaron@gmail.com">email</styled-link> or
      send a connection over to my
      <styled-link href="https://www.linkedin.com/in/aaroncql/"
        >LinkedIn</styled-link
      >.
    </p>
  </div>
</template>

<script>
import StyledLink from "./../shared/StyledLink";
import SectionHeader from "./../shared/SectionHeader";

export default {
  name: "ContactSection",
  components: {
    StyledLink,
    SectionHeader,
  },
};
</script>

<style></style>
