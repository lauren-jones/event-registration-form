/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#141414",
        bgSecondary: "#FDE3FF",
        textPrimary: "#F9F8E9",
        focus: "#FFB57C",
        action: "#F8B1FE",
        accent: "#BCB5FF",
      },
    },
  },
  plugins: [],
};
