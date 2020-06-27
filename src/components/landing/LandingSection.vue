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
            :class="
              isDarkMode ? 'text-subsection-dark' : 'text-subsection-light'
            "
            class="text-2xl md:text-xl font-light"
          >
            <p>Computer Science Student</p>
            <p>Systems Engineer Intern</p>
            <p>Teaching Assistant</p>
            <p>Private Tutor</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center md:pt-6 text-4xl space-x-6">
      <a
        :class="isDarkMode ? 'icon-dark' : 'icon-light'"
        href="https://github.com/AaronCQL"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        :class="isDarkMode ? 'icon-dark' : 'icon-light'"
        href="https://www.linkedin.com/in/aaroncql/"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a
        :class="isDarkMode ? 'icon-dark' : 'icon-light'"
        href="https://dev.to/aaroncql"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'dev']" />
      </a>
      <a
        :class="isDarkMode ? 'icon-dark' : 'icon-light'"
        href="mailto:choozy.aaron@gmail.com"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingSection",
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
};
</script>

<style></style>
