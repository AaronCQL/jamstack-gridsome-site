<template>
  <div>
    <h1 class="text-4xl text-secondary font-title font-semibold">
      Personal Projects
    </h1>

    <project-entry title="Tree Secure (Mobile App)">
      <p>
        A not-so-serious cross-platform mobile app to spread the awareness of
        the heritage trees in Singapore. Made with Flutter and developed in 24
        hours at NUS Hack&Roll 2020.
      </p>
    </project-entry>

    <project-entry class="mt-4" title="PixiesPixel (Game)">
      <p>
        A cross-platform realtime online multiplayer free-for-all 2D platformer
        built using Godot and GDScript. Achieved Honourable Mention (top 4/243
        teams) at NUS Orbital 2019.
      </p>
    </project-entry>

    <project-entry class="mt-4" title="Computer Organisation Tool (Website)">
      <p>
        A learning tool for CS2100 made for the web browser. Tools include
        number base converter, IEEE 754 single-precision format converter, truth
        table generator, MIPS Architecture instruction encoder.
      </p>
    </project-entry>

    <project-entry class="mt-4" title="Telegram Weather Bot">
      <p>
        A simple telegram bot that tells the current and forecast weather at 16
        specific locations in Singapore. Built using Python in a day-long
        hackathon at HackNTU 2019.
      </p>
    </project-entry>

    <project-entry class="mt-4" title="Telegram Bot Tutorial">
      <p>
        A step-by-step guide on building a free serverless Telegram bot with
        Firebase Functions.
      </p>
    </project-entry>
  </div>
</template>

<script>
import ProjectEntry from "~/components/landing/ProjectEntry.vue";

export default {
  name: "ProjectSection",
  components: {
    ProjectEntry,
  },
};
</script>

<style></style>
