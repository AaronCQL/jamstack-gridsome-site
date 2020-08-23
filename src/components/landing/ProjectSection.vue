<template>
  <div>
    <section-header>
      Personal Projects
    </section-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <project-section-entry
        title="PixiesPixel"
        :stack="['Godot', 'GDScript']"
        sourceCodeUrl="https://github.com/AaronCQL/PixiesPixel"
        demoUrl="https://github.com/AaronCQL/PixiesPixel/releases"
        repoApiUrl="https://api.github.com/repos/AaronCQL/PixiesPixel"
      >
        <p>
          A cross-platform online multiplayer free-for-all 2D pixel art
          platformer. Voted
          <styled-link
            href="https://credentials.nus.edu.sg/e472844a-d467-46b0-a6d8-7f5e399559df"
          >
            runner up
          </styled-link>
          (out of 243 teams) at NUS Orbital 2019.
        </p>
      </project-section-entry>

      <project-section-entry
        title="Serious Collection"
        :stack="['LaTeX', 'Markdown']"
        sourceCodeUrl="https://github.com/AaronCQL/serious-collection"
        repoApiUrl="https://api.github.com/repos/AaronCQL/serious-collection"
      >
        <p>
          Personal collection of notes and cheatsheets made during my Computer
          Science course at NUS.
        </p>
      </project-section-entry>

      <project-section-entry
        title="Doconuxt"
        :stack="['Vue', 'Nuxt.js', 'Tailwindcss']"
        sourceCodeUrl="https://github.com/AaronCQL/doconuxt"
        demoUrl="https://doconuxt.vercel.app/"
      >
        <p>
          A
          <styled-link href="https://content.nuxtjs.org/">
            Nuxt Content
          </styled-link>
          powered static site generator for Markdown content. It is minimal,
          opinionated, and comes with a default theme.
        </p>
      </project-section-entry>

      <project-section-entry
        title="Tree Secure"
        :stack="['Flutter', 'Dart', 'Firebase']"
        sourceCodeUrl="https://github.com/AaronCQL/tree-secure"
        demoUrl="https://github.com/AaronCQL/tree-secure/releases"
      >
        <p>
          A not-so-serious cross-platform mobile app to spread the awareness of
          the heritage trees in Singapore. Developed in 24 hours at NUS
          Hack&amp;Roll 2020.
        </p>
      </project-section-entry>

      <project-section-entry
        title="Computer Organisation Tool"
        :stack="['HTML', 'CSS', 'JavaScript']"
        sourceCodeUrl="https://github.com/AaronCQL/CS2100-tools"
        demoUrl="https://aaroncql.github.io/CS2100-tools/"
      >
        <p>
          A web-based learning tool for CS2100. Tools include number base
          converter, IEEE 754 single-precision format converter, truth table
          generator, MIPS Architecture instruction encoder.
        </p>
      </project-section-entry>

      <project-section-entry
        title="Telegram Bot Tutorial"
        :stack="['Firebase', 'Node.js']"
        demoUrl="https://medium.com/@aaroncql/build-a-serverless-telegram-bot-with-firebase-functions-267d251e4e46?source=friends_link&sk=ffc4b1b3093e31811dc4544cbd4960d2"
      >
        <p>
          A step-by-step guide on building a free serverless Telegram bot with
          Firebase Functions.
        </p>
      </project-section-entry>
    </div>
  </div>
</template>

<script>
import ProjectSectionEntry from "./ProjectSectionEntry";
import SectionHeader from "./../shared/SectionHeader";
import StyledLink from "./../shared/StyledLink";

export default {
  name: "ProjectSection",
  components: {
    ProjectSectionEntry,
    SectionHeader,
    StyledLink,
  },
};
</script>

<style></style>
