// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lumen-blue': '#3B82F6', // Calm Blue
        'lumen-dark-blue': '#1E3A8A', // For the logo text/dark elements
        'lumen-gray': '#F3F4F6', // Soft Gray
        'lumen-yellow': '#FBBF24', // Yellow ear icon
      },
      fontFamily: {
        // Use a modern, clean sans-serif stack
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'gradient-bg': 'gradient-move 10s ease infinite',
      },
    },
  },
  plugins: [],
}
