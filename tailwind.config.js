module.exports = {
  mode: "jit",
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  prefix: '',
  important: false,
  separator: ':',
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        background: {
          100: '#fff'
        },
        primary: {
          100: '#D8FBED',
          200: '#B3F7E1',
          300: '#88E7D2',
          400: '#65D0C1',
          500: '#38B2AC',
          600: '#289499',
          700: '#1C7380',
          800: '#115467',
          900: '#0A3E55'
        },
        secondary: {
          100: '#D8E5FB',
          200: '#B3CBF7',
          300: '#88A7E7',
          400: '#6585D0',
          500: '#3859B2',
          600: '#284499',
          700: '#1C3180',
          800: '#112167',
          900: '#0A1655'
        },
        success: {
          100: '#E9FEE1',
          200: '#CEFDC3',
          300: '#ADFAA4',
          400: '#8DF58C',
          500: '#67EF72',
          600: '#4BCD61',
          700: '#33AC53',
          800: '#208A46',
          900: '#13723D'
        },
        warning: {
          100: '#FEF2D0',
          200: '#FDE2A1',
          300: '#FBCD72',
          400: '#F8B84E',
          500: '#F49716',
          600: '#D17810',
          700: '#AF5C0B',
          800: '#8D4407',
          900: '#753204'
        },
        danger: {
          100: '#FCE7DE',
          200: '#FACBBF',
          300: '#F1A59B',
          400: '#E3817F',
          500: '#D2565E',
          600: '#B43E51',
          700: '#972B45',
          800: '#791B3A',
          900: '#641034'
        },
        silver: {
          100: '#EFF8FC',
          200: '#DFEFF9',
          300: '#C9DFEE',
          400: '#637993',
          500: '#2B384B',
          600: '#1F2B40',
          700: '#152036',
          800: '#0D162B',
          900: '#080E24'
        }
      }
    }
  },
  corePlugins: {},
  plugins: [require('@tailwindcss/custom-forms')]
}
