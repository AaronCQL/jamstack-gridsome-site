<template>
  <Layout>
    <about-section class="px-2 md:px-6 py-10 bg-white m-1" />
    <project-section class="px-2 md:px-6 py-10 bg-teal-900 text-white m-1" />
  </Layout>
</template>

<script>
import AboutSection from "~/components/landing/AboutSection.vue";
import ProjectSection from "~/components/landing/ProjectSection.vue";

export default {
  components: {
    AboutSection,
    ProjectSection
  },
  metaInfo: {
    title: "Aaron Choo | Student"
  }
};
</script>
