<template>
  <div>
    <h1 class="text-4xl text-secondary font-title font-semibold">
      Experience
    </h1>

    <div class="mb-6 text-lg">
      These are some of the companies I have had the priviledge of working with.
      Refer to my resume for more information about what I had worked on.
    </div>

    <experience-entry
      company="Visa Inc."
      date="May 2020 - Present"
      title="Systems Engineer Intern"
    >
    </experience-entry>

    <div
      :class="isDarkMode ? 'border-gray-800' : ''"
      class="border mx-24 my-4"
    ></div>

    <experience-entry
      company="Qashier"
      date="Jun 2019 - May 2020"
      title="Software Engineer Intern"
    >
      Developed and maintained a full stack
      <a href="https://hq.qashier.co/#/">web application</a> built using Vue.js
      and Quasar for the frontend, and Firebase, GCP and Node.js for the
      backend.
    </experience-entry>

    <div
      :class="isDarkMode ? 'border-gray-800' : ''"
      class="border mx-24 my-2"
    ></div>

    <experience-entry
      company="National University of Singapore"
      date="Aug 2019 - Dec 2019"
      title="Teaching Assistant"
    >
      Taught weekly tutorial sessions for CS1101S Programming Methodology I
    </experience-entry>
  </div>
</template>

<script>
import ExperienceEntry from "~/components/landing/ExperienceEntry.vue";

export default {
  name: "ExperienceSection",
  components: {
    ExperienceEntry,
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
};
</script>

<style></style>
