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
      },
      screens: {
        mobile: '430px',
        // => @media (min-width: 430px) { ... }
        tablet: '1024px',
        // => @media (min-width: 1024px) { ... }
        desktop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}

