/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,jsx}",
      "./src/components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
        },
        animation: {
          marquee: "marquee 12s linear infinite",
        },
      },
    },
    plugins: [],
  };
  