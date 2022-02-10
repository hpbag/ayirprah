module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 8px 4px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        cyan: {
          500: '#06b6d4',
        },
      },
    },
  },
};
