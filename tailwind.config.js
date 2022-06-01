module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'biru-tosca': '#00D1CC'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}