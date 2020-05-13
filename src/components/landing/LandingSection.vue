<template>
  <div class="flex flex-col justify-center">
    <h1 class="text-5xl font-handwriting text-center pb-10 hidden md:block">
      Hey there!
    </h1>

    <div
      :class="isDarkMode ? 'md:bg-gray-900 border-gray-700' : ''"
      class="transition-shadow md:border duration-150 ease-in-out md:shadow-md md:hover:shadow-lg font-title p-5 max-w-lg rounded-lg mx-auto"
    >
      <div class="md:flex">
        <g-image
          src="~/assets/self-portrait.png"
          class="md:align-right h-40 w-40 rounded-full mx-auto md:mx-0"
        />
        <div class="md:ml-6 text-center md:text-left">
          <p
            class="text-4xl md:text-3xl md:font-semibold font-handwriting md:font-title"
          >
            Aaron Choo
          </p>
          <div
            :class="isDarkMode ? 'text-gray-500' : 'text-gray-700'"
            class="text-2xl md:text-xl font-light"
          >
            <p>Computer Science Student</p>
            <p>Software Engineer Intern</p>
            <p>Ex-Teaching Assistant</p>
            <p>Private Tutor</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center md:pt-12">
      <a href="https://github.com/AaronCQL">
        <github />
      </a>
      <a class="mx-3" href="https://www.linkedin.com/in/aaroncql/">
        <linkedin />
      </a>
      <a href="mailto:choozy.aaron@gmail.com">
        <gmail />
      </a>
    </div>
    <div class="text-center mt-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="toggleDarkMode"
      >
        Dark Mode
      </button>
    </div>
  </div>
</template>

<script>
import Github from "~/assets/logos/Github.svg";
import Linkedin from "~/assets/logos/Linkedin.svg";
import Gmail from "~/assets/logos/Gmail.svg";

export default {
  name: "LandingSection",
  components: {
    Github,
    Linkedin,
    Gmail,
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      const nextState = !this.isDarkMode;
      localStorage.isDarkMode = nextState;
      this.globalData.isDarkMode = nextState;
    },
  },
};
</script>

<style></style>
