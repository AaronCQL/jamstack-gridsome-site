<template>
  <Layout>
    <about-section class="min-h-screen" />
    <project-section class="px-2 md:px-6 pb-10" />
    <contact-section class="px-2 md:px-6 pb-10" />
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
