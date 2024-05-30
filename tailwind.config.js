/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xsm: "100%",
          xm: "100%",
          xlg: "100%",
          sm: "100%",
          md: "100%",
          tab: "100%",
          lg: "1024px",
          xl: "1232px",
        },
      }, 
      colors:{
        grayLight: '#F5F7FA',
      },

      screens: {
        xsm: "320px",
        xm: "390px",
        xlg: "425px",
        sm: "640px",
        md: "768px",
        tab: "992px",
        lg: "1024px",
        xl: "1232px",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
      },
    },
  },
  plugins: [],
}