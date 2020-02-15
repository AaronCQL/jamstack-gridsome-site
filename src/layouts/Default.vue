<template>
  <div class="layout">
    <header class="header">
      <nav
        class="flex items-center justify-between flex-wrap bg-indigo-700 py-4 px-6"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-bold text-xl tracking-tight">Aaron</span>
          <span class="font-thin text-xl tracking-tight">CQL</span>
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
          <div class="text-md font-semibold md:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div class="max-w-4xl md:px-8 px-2 pt-6 pb-4 mx-auto">
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
      isNavExpanded: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavExpanded = !this.isNavExpanded;
    }
  }
};
</script>
