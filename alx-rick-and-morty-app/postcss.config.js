module.exports = {
  plugins: {
    // Tailwind's PostCSS plugin was moved to a separate package. Use
    // '@tailwindcss/postcss' here to be compatible with the installed Tailwind
    // package.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
