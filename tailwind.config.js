module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'global-section-bg': "url('/globalSectionBg.png')",
      },
      colors: {
        'white-rgba': 'rgba(255, 255, 255, 0.8)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}

/*
screens: {
  'sm': '640px',
  // => @media (min-width: 640px) { ... }

  'md': '960px',
  // => @media (min-width: 768px) { ... }

  'lg': '1224px',
  // => @media (min-width: 1024px) { ... }

  'xl': '1280px',
  // => @media (min-width: 1280px) { ... }

  '2xl': '1536px',
},*/