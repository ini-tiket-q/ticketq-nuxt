module.exports = {
  darkMode: 'class', // false / 'media' / 'class'
  theme: {
    extend: {
      colors: {
        primeblue: {
          DEFAULT: '#4267b2',
          50: '#f2f7fc',
          100: '#e2ecf7',
          200: '#ccdff1',
          300: '#a8cae8',
          400: '#7faedb',
          500: '#6093d1',
          600: '#4c7ac4',
          700: '#4267b2',
          800: '#3b5592',
          900: '#344874'
        }
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {
    extend: {
      scale: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.vue',
      'nuxt.config.js'
    ]
  }
}
