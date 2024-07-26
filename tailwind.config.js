/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bold: "Space Grotesk Bold",
        regular: "Space Grotesk Regular",
        light: "Space Grotesk Light",
        medium: "Space Grotesk Medium",
        semiBold: "Space Grotesk SemiBold",
      },
      colors: {
        "p-green": "#B9FF66",
        "p-black": "#191A23",
        "p-grey": "#F3F3F3",
      },
      boxShadow: {
        bottom: '0px 4px rgb(0, 0, 0)',
        single: '0 0 0 1px rgba(0, 0, 0)',
      },
      screens: {
        mobile: '430px',
        tablet: '768px',
        tabletLarge: '840px',
        desktop: '1280px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-2': 'infinite-scroll-2 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-2': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}

