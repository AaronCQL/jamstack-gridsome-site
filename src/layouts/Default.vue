<template>
  <div class="layout">
    <header class="header">
      <nav
        class="fixed top-0 w-full flex items-center justify-between flex-wrap bg-gray-100 py-1 px-6 lg:px-32 md:px-12 border-b border-secondary"
      >
        <div class="font-nav text-3xl flex items-center flex-shrink-0 mr-6">
          <span class="font-bold">Aaron</span>
          <span class="font-thin">CQL</span>
        </div>
        <div class="block md:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-secondary border-secondary"
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
              class="block text-md font-semibold font-nav md:inline-block my-4 md:my-0 hover:text-primary ml-0 md:ml-6"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div>
      <slot />
    </div>
    <footer class="text-sm text-gray-700 border-t py-3 text-center bg-gray-100">
      Copyright &copy; 2020 Aaron Choo
    </footer>
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
          to: "#",
        },
        {
          label: "Projects",
          to: "#",
        },
        {
          label: "Contact",
          to: "#",
        },
        {
          label: "Blog",
          to: "#",
        },
      ],
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavExpanded = !this.isNavExpanded;
    },
  },
};
</script>

<style src="~/styles/global.css" />
