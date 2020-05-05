<template>
  <Layout class="bg-white">
    <landing-section
      id="landing"
      class="min-h-screen max-w-3xl mx-auto py-24"
    />
    <about-section id="about" class="px-2 md:px-6 pb-12 max-w-3xl mx-auto" />
    <experience-section
      id="experience"
      class="px-2 md:px-6 pb-12 max-w-3xl mx-auto"
    />
    <project-section
      id="projects"
      class="px-2 md:px-6 pb-12 max-w-3xl mx-auto"
    />
    <contact-section
      id="contact"
      class="px-2 md:px-6 pb-12 max-w-3xl mx-auto"
    />
  </Layout>
</template>

<script>
import LandingSection from "~/components/landing/LandingSection.vue";
import AboutSection from "~/components/landing/AboutSection.vue";
import ExperienceSection from "~/components/landing/ExperienceSection.vue";
import ProjectSection from "~/components/landing/ProjectSection.vue";
import ContactSection from "~/components/landing/ContactSection.vue";

export default {
  components: {
    LandingSection,
    AboutSection,
    ExperienceSection,
    ProjectSection,
    ContactSection,
  },
  metaInfo: {
    title: "Aaron Choo | Student",
  },
};
</script>
