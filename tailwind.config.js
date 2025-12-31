/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': {
          DEFAULT: 'hsl(var(--color-primary-background))',
          foreground: 'hsl(var(--color-primary-background-foreground))',
        },
        'secondary-bg': {
          DEFAULT: 'hsl(var(--color-secondary-background))',
          foreground: 'hsl(var(--color-secondary-background-foreground))',
        },
        'accent-primary': {
          DEFAULT: 'hsl(var(--color-accent-primary))',
          foreground: 'hsl(var(--color-accent-primary-foreground))',
          hover: 'hsl(var(--color-accent-primary-hover))',
        },
        'text-dark': 'hsl(var(--color-text-dark))',
        'text-light': 'hsl(var(--color-text-light))',
        'natural-tan': 'hsl(var(--color-natural-tan))',
        'natural-stone': 'hsl(var(--color-natural-stone))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}



