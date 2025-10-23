import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF914D',
          'orange-dark': '#e8772d',
        },
        secondary: {
          'blue-dark': '#007854',
          green: '#007854',
          'green-dark': '#005a3f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
