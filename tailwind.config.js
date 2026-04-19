/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // in which all places tailwind css can be used/we can find. (inside src folder -> any sub folder present if any (*) -> the above file with the above given extensions)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

