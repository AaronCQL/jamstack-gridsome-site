<template>
  <div class="flex flex-col justify-center">
    <h1
      class="text-5xl text-secondary font-title text-center pb-10 hidden md:block"
    >
      Hello.
    </h1>

    <div
      class="md:shadow-lg md:hover:shadow-xl font-title p-5 max-w-lg rounded-lg mx-auto md:bg-white"
    >
      <div class="md:flex">
        <g-image
          src="~/assets/self-portrait.png"
          class="md:align-right h-40 w-40 rounded-full mx-auto md:mx-0"
        />
        <div class="md:ml-6 text-center md:text-left">
          <p class="text-3xl font-semibold">Aaron Choo</p>
          <div class="text-xl text-gray-700 font-light">
            <p>Computer Science Student</p>
            <p>Software Engineer Intern</p>
            <p>Ex-Teaching Assistant</p>
            <p>Private Tutor</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center md:mt-24 text-3xl">
      <font-awesome :icon="['fab', 'github']" class="mx-2" />
      <font-awesome :icon="['fab', 'linkedin']" class="mx-2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style></style>
