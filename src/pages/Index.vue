<template>
  <Layout>
    <about-section
      class="px-2 md:px-6 py-10 bg-white md:m-2 md:rounded md:shadow-md"
    />
    <project-section
      class="px-2 md:px-6 py-10 bg-teal-900 text-white md:m-2 md:rounded md:shadow-md"
    />
    <contact-section
      class="px-2 md:px-6 py-10 bg-white md:m-2 md:rounded md:shadow-md"
    />
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
