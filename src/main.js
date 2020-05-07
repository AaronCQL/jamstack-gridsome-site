/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("typeface-raleway");
require("typeface-josefin-sans");
require("typeface-gloria-hallelujah");

import "~/styles/global.css";
import VueScrollTo from "vue-scrollto";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueScrollTo, {
    offset: -60,
  });

  const globalData = {
    // only access the localStorage on client side
    isDarkMode: process.isClient
      ? localStorage.darkMode === "true"
        ? true
        : false
      : false,
  };
  Vue.mixin({
    data: function() {
      return {
        globalData: globalData,
      };
    },
  });
}
