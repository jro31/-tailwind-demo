module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover'],
    },
  },
  plugins: [],
};

// State variants (hover, focus, active etc) are only enabled by default for the most common use cases (such as changing a background colour when hovering)
// For less common use cases (such as changing the font-size on hover), you need to enable them here
