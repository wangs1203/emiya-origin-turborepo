import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--em-primary-color)',
        'secondary-color': 'var(--em-secondary-color)',
        'disabled-bg-color': 'var(--em-disabled-bg-color)',
        'primary-black-color': 'var(--em-primary-black-color)',
        'disabled-font-color': 'var(--em-disabled-font-color)',
      },
      backgroundImage: {
        'glow-conic':
          'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
    },
    fontSize: {
      xs: ['12px', { lineHeight: '14px' }],
      sm: ['14px', { lineHeight: '16px' }],
      base: ['16px', { lineHeight: '18px' }],
      lg: ['18px', { lineHeight: '20px' }],
      xl: ['20px', { lineHeight: '1' }],
      '2xl': ['24px', { lineHeight: '1' }],
      '3xl': ['26px', { lineHeight: '1' }],
      '4xl': ['2.25rem' /* 36px */, { lineHeight: '2.5rem' /* 40px */ }],
      '5xl': ['3rem' /* 48px */, 1],
      '6xl': ['3.75rem' /* 60px */, 1],
      '7xl': ['4.5rem' /* 72px */, 1],
      '8xl': ['6rem', 1],
      '9xl': ['8rem', 1],
    },
  },
  plugins: [],
};

export default config;
