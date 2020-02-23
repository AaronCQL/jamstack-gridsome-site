<template>
  <div class="flex flex-col justify-center">
    <h1 class="text-5xl font-handwriting text-center pb-10 hidden md:block">
      Hey there!
    </h1>

    <div
      class="transition-shadow md:border duration-150 ease-in-out md:shadow-md md:hover:shadow-lg font-title p-5 max-w-lg rounded-lg mx-auto md:bg-white"
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
          <div class="text-2xl md:text-xl text-gray-700 font-light">
            <p>Computer Science Student</p>
            <p>Software Engineer Intern</p>
            <p>Ex-Teaching Assistant</p>
            <p>Private Tutor</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-center md:mt-24 text-4xl text-secondary">
      <a
        class="transition duration-150 ease-in-out mx-4 hover:text-primary"
        href="https://github.com/AaronCQL"
      >
        <font-awesome :icon="['fab', 'github']" />
      </a>
      <a
        class="transition duration-150 ease-in-out mx-4 hover:text-primary"
        href="https://www.linkedin.com/in/aaroncql/"
      >
        <font-awesome :icon="['fab', 'linkedin']" />
      </a>
      <a
        class="transition duration-150 ease-in-out mx-4 hover:text-primary"
        href="#"
      >
        <font-awesome :icon="['fas', 'file-alt']" />
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "LandingSection",
};
</script>

<style></style>
