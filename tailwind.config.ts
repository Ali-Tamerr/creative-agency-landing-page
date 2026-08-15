import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          black: '#080808',
          charcoal: '#141414',
          dark: '#1C1C1C',
          lightdark: '#242424',
          paper: '#F2F2EC',
          paperdark: '#E5E5DE',
          white: '#FFFFFF',
          lime: '#CCFF00',
          orange: '#FF4D00',
          blue: '#0047FF',
          pink: '#FF2E93',
          yellow: '#FFDE00',
          green: '#00E575',
          border: '#000000',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-md': '6px 6px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-xl': '12px 12px 0px 0px #000000',
        'brutal-2xl': '16px 16px 0px 0px #000000',
        'brutal-white-sm': '2px 2px 0px 0px #FFFFFF',
        'brutal-white': '4px 4px 0px 0px #FFFFFF',
        'brutal-white-lg': '8px 8px 0px 0px #FFFFFF',
        'brutal-white-xl': '12px 12px 0px 0px #FFFFFF',
        'brutal-lime': '6px 6px 0px 0px #CCFF00',
        'brutal-orange': '6px 6px 0px 0px #FF4D00',
        'brutal-blue': '6px 6px 0px 0px #0047FF',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'ticker-fast': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 22s linear infinite',
        'marquee-reverse-slow': 'marquee-reverse 35s linear infinite',
        'ticker-fast': 'ticker-fast 12s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
