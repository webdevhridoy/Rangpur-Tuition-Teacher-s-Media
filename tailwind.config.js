/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        rttmThemes: {
          primary: '#552664',
          secondary: '#EF3D4A',
          imgBg: '#0A0F26',
          accent: "#552664",
          texts: "#1c1c1c",
          "btn-bg": '#552664',
          neutral: "#F7F8FC",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
