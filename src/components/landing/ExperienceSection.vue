<template>
  <div>
    <section-header>
      Experience
    </section-header>

    <div class="mb-6 text-lg">
      These are some of the companies I have had the priviledge of working with.
      Refer to my resume for more information about what I had worked on.
    </div>

    <experience-section-entry
      company="Visa Inc."
      date="May 2020 - Present"
      title="Systems Engineer Intern"
    >
    </experience-section-entry>

    <div
      :class="isDarkMode ? 'border-gray-800' : ''"
      class="border mx-24 my-4"
    ></div>

    <experience-section-entry
      company="Qashier"
      date="Jun 2019 - May 2020"
      title="Software Engineer Intern"
    >
      Developed and maintained a full stack
      <styled-link href="https://hq.qashier.co/#/">web application</styled-link>
      built using Vue.js and Quasar for the frontend, and Firebase, GCP and
      Node.js for the backend.
    </experience-section-entry>

    <div
      :class="isDarkMode ? 'border-gray-800' : ''"
      class="border mx-24 my-2"
    ></div>

    <experience-section-entry
      company="National University of Singapore"
      date="Aug 2019 - Dec 2019"
      title="Teaching Assistant"
    >
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
