<template>
  <div class="layout">
    <header class="header">
      <nav
        :class="isDarkMode ? 'bg-gray-900' : 'bg-gray-100'"
        class="fixed top-0 w-full flex items-center justify-between flex-wrap py-1 px-6 lg:px-32 md:px-12 border-b border-secondary"
      >
        <a
          href="#"
          v-scroll-to="'#landing'"
          @click="isNavExpanded = false"
          :class="isDarkMode ? 'text-indigo-200' : 'text-black'"
          class="font-nav text-3xl flex items-center flex-shrink-0 mr-6"
        >
          <span class="font-bold">Aaron</span>
          <span class="font-thin">CQL</span>
        </a>
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
              v-scroll-to="link.to"
              @click="isNavExpanded = false"
              :class="isDarkMode ? 'text-indigo-200' : 'text-black'"
              class="block text-md font-semibold font-nav md:inline-block my-4 md:my-0 ml-0 md:ml-6"
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
    <footer
      :class="
        isDarkMode
          ? 'bg-gray-900 text-gray-500 border-gray-700'
          : 'bg-gray-100 text-gray-700'
      "
      class="font-nav text-sm border-t py-3 text-center"
    >
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
          to: "#about",
        },
        {
          label: "Projects",
          to: "#projects",
        },
        {
          label: "Contact",
          to: "#contact",
        },
        {
          label: "Blog",
          to: "#",
        },
      ],
    };
  },
  computed: {
    isDarkMode() {
      return this.globalData.isDarkMode;
    },
  },
  methods: {
    toggleNavbar() {
      this.isNavExpanded = !this.isNavExpanded;
    },
  },
};
</script>
