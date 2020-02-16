<template>
  <div class="layout">
    <header class="header z-50">
      <nav
        class="flex items-center justify-between flex-wrap bg-teal-700 py-3 px-6"
      >
        <div
          class="font-nav text-xl flex items-center flex-shrink-0 text-white mr-6"
        >
          <span class="font-bold tracking-tight">Aaron</span>
          <span class="font-thin tracking-tight">CQL</span>
        </div>
        <div class="block md:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            @click="toggleNavbar"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          :class="isNavExpanded ? 'block' : 'hidden'"
          class="w-full flex-grow md:flex md:text-right md:items-center md:w-auto"
        >
          <div class="md:flex-grow">
            <a
              v-for="link in navLinks"
              :key="link.label"
              :href="link.to"
              class="block text-md font-semibold font-nav text-teal-100 mt-4 md:inline-block md:mt-0 hover:text-white ml-0 md:ml-6"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div class="max-w-4xl mx-auto">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data: function() {
    return {
      isNavExpanded: false,
      navLinks: [
        {
          label: "About",
          to: "#"
        },
        {
          label: "Projects",
          to: "#"
        },
        {
          label: "Blog",
          to: "#"
        },
        {
          label: "Contact",
          to: "#"
        }
      ]
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavExpanded = !this.isNavExpanded;
    }
  }
};
</script>

<style>
body {
  @apply bg-gray-300;
}
</style>
