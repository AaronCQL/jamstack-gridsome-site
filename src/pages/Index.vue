<template>
  <Layout :class="isDarkMode ? 'theme-dark' : 'theme-light'">
    <landing-section id="landing" class="min-h-screen py-24" />
    <div class="max-w-4xl mx-auto px-2 md:px-12">
      <about-section id="about" class="pb-12" />
      <experience-section id="experience" class="pb-12" />
      <project-section id="projects" class="pb-12" />
      <contact-section id="contact" class="pb-12" />
    </div>
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
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
};
</script>
