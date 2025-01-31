/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        taskminwidth: "80%",
      },
      maxWidth: {
        taskMaxWidth: "600px",
        taskContainerMaxWidth: "700px",
      },
      boxshadow: {
        text: "1px 1px 2xp black",
      },
    },
  },
  plugins: [],
};
