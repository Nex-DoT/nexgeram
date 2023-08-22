/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orient": "#005e7c",
        "blackpearl": "#040f16",
        "pacificblue": "#0094c6",
        "stratos": "#001242",
        "blackrussian": "#000022",
      }
    },
  },
  plugins: [],
}