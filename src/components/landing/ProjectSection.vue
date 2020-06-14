<template>
  <div>
    <section-header>
      Personal Projects
    </section-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <project-section-entry
        title="Tree Secure (Mobile App)"
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
        title="PixiesPixel (Game)"
        :stack="['Godot', 'GDScript']"
        sourceCodeUrl="https://github.com/AaronCQL/PixiesPixel"
        demoUrl="https://github.com/AaronCQL/PixiesPixel/releases"
      >
        <p>
          A cross-platform online multiplayer free-for-all 2D pixel art
          platformer. Voted runner up (out of 243 teams) at NUS Orbital 2019.
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
        title="Telegram Weather Bot"
        :stack="['Python']"
        sourceCodeUrl="https://github.com/AaronCQL/telegram-weather-man"
        demoUrl="https://telegram.me/SgWeatherManBot"
      >
        <p>
          A simple telegram bot that tells the current and forecast weather at
          16 specific locations in Singapore. Built using Python in a day-long
          hackathon at HackNTU 2019.
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
import ProjectSectionEntry from "~/components/landing/ProjectSectionEntry.vue";
import SectionHeader from "./../shared/SectionHeader";

export default {
  name: "ProjectSection",
  components: {
    ProjectSectionEntry,
    SectionHeader,
  },
};
</script>

<style></style>
