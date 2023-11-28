/** @type {import('tailwindcss').Config} */
const { raitonTailwindConfigWrapper } = require('@axazara/raiton-utils');

module.exports = raitonTailwindConfigWrapper({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
});
