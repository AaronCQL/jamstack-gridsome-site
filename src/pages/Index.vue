<template>
  <Layout>
    <about-section class="px-2 md:px-6 py-10 md:m-2" />
    <project-section class="px-2 md:px-6 py-10 md:m-2" />
    <contact-section class="px-2 md:px-6 py-10 md:m-2" />
  </Layout>
</template>

<script>
import AboutSection from "~/components/landing/AboutSection.vue";
import ProjectSection from "~/components/landing/ProjectSection.vue";
import ContactSection from "~/components/landing/ContactSection.vue";

export default {
  components: {
    AboutSection,
    ProjectSection,
    ContactSection,
  },
  metaInfo: {
    title: "Aaron Choo | Student",
  },
};
</script>
