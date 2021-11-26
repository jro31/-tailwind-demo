module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};

// To enable 'active' to work for the background color, we must set it here
// See 'https://tailwindcss.com/docs/configuring-variants' for a list of variants (for example, 'active'), that we can set
// See 'https://tailwindcss.com/docs/configuration#variant-order' for a list of core plugins (for example, 'backgroundColor')
