/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    components: false, // Make sure 'components' is disabled
  },
}

