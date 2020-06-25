<template>
  <div>
    <section-header>
      Experience
    </section-header>

    <div class="mb-6 text-lg">
      These are some of the companies I have had the privilege of working with.
      Refer to my
      <styled-link href="/aaron_choo_resume.pdf">resume</styled-link>
      for more information about what I had worked on.
    </div>

    <experience-section-entry
      date="May 2020 - Present"
      title="Systems Engineer Intern"
    >
      <template v-slot:logo>
        <g-image
          alt="Visa Logo"
          title="Visa Inc."
          src="~/assets/visa-logo.svg"
          class="w-20 object-contain"
        />
      </template>
    </experience-section-entry>

    <experience-section-entry
      date="Jun 2019 - May 2020"
      title="Software Engineer Intern"
    >
      <template v-slot:logo>
        <g-image
          alt="Qashier Logo"
          title="Qashier"
          src="~/assets/qashier-logo.png"
          class="w-40 object-contain"
        />
      </template>
      Developed and maintained a full stack
      <styled-link href="https://hq.qashier.co/#/">web application</styled-link>
      built using Vue.js and Quasar for the frontend, and Firebase, GCP and
      Node.js for the backend.
    </experience-section-entry>

    <experience-section-entry
      date="Aug 2019 - Dec 2019"
      title="Teaching Assistant"
    >
      <template v-slot:logo>
        <g-image
          alt="NUS Logo"
          title="National University of Singapore"
          src="~/assets/nus-logo.png"
          class="w-48 object-contain"
        />
      </template>
      Taught weekly tutorial sessions for CS1101S Programming Methodology I
    </experience-section-entry>
  </div>
</template>

<script>
import ExperienceSectionEntry from "./ExperienceSectionEntry.vue";
import StyledLink from "./../shared/StyledLink";
import SectionHeader from "./../shared/SectionHeader";

export default {
  name: "ExperienceSection",
  components: {
    ExperienceSectionEntry,
    StyledLink,
    SectionHeader,
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
};
</script>

<style></style>
