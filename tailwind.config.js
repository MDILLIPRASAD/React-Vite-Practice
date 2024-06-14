module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-apple': '#c0c0c0', // Define custom color
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Define custom font family
      },
      // Add more customizations as needed
    },
  },
  plugins: [],
};

