/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primaryLight: '#35a1ea',
        primaryDark: '#475569',
        softDark: "#94a3b8"
      }
    },
  },
  plugins: [
    daisyui,
    addDynamicIconSelectors(),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#35a1ea",
          secondary: "#7dd3fc",
          neutral: 'white',
          // accent: ''
        },
        // #a6adbb
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#2a323c",
          secondary: "#334155",
          neutral: '#1d232a',
          // accent: ''
        }
      }
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  // themes: ["light", "dark", "cupcake"],

}
