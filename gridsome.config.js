// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// eslint-disable-next-line no-undef
module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      shouldPurge: false,
    },
  ],
};
