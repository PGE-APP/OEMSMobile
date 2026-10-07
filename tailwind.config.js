/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        oems: {
          navy: '#06284c',
          primary: '#1769e0',
          'primary-pressed': '#1258bc',
          'primary-subtle': '#eff6ff',
          'primary-border': '#cfe0f7',
          layout: '#f4f7fb',
          surface: '#ffffff',
          border: '#e5ebf3',
          text: '#17283d',
          muted: '#66788f',
          placeholder: '#91a0b4',
          danger: '#d14343',
          'danger-border': '#ffccc7',
          'danger-surface': '#fff2f0',
          success: '#14865e',
          'brand-on': '#ffffff',
          'brand-secondary': 'rgba(255, 255, 255, 0.64)',
          'brand-subdued': 'rgba(255, 255, 255, 0.56)',
          'brand-surface': 'rgba(255, 255, 255, 0.08)',
          'brand-border': 'rgba(255, 255, 255, 0.25)',
          'brand-ring': 'rgba(255, 255, 255, 0.18)',
          'brand-ring-faint': 'rgba(255, 255, 255, 0.05)',
          'brand-ring-fainter': 'rgba(255, 255, 255, 0.03)',
          'login-accent': '#7fb3ff',
        },
      },
      borderRadius: {
        'oems-md': '8px',
        'oems-lg': '12px',
      },
    },
  },
  plugins: [],
};
