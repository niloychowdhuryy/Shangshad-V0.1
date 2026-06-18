/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // hover: styles only apply on devices that actually support hover, so a tap on
  // a phone never leaves a button "stuck" highlighted into the next question.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        // Metric brand colors mirror src/game/constants.js
        finance: '#f5c542',
        global: '#38bdf8',
        military: '#ff5470',
        resource: '#ffa726',
        environ: '#34d399',
        family: '#b06bff',
        // Console chrome
        ink: '#06100b',
        panel: '#0a1611',
        steel: '#10211a',
        line: '#213a30',
        parchment: '#e3ece6',
        accent: '#16c79a', // primary accent — Bangladesh jade-green
        // Bangladesh flag palette
        bdgreen: '#006a4e',
        bdjade: '#16c79a',
        bdred: '#f42a41',
      },
      fontFamily: {
        tech: ['Rajdhani', 'system-ui', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'ui-monospace', 'monospace'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      keyframes: {
        'metric-pulse': {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.18)', filter: 'brightness(1.9)' },
        },
        'ring-pulse': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'card-in': {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        dash: {
          to: { strokeDashoffset: '-24' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '94%': { opacity: '0.6' },
          '96%': { opacity: '1' },
        },
      },
      animation: {
        'metric-pulse': 'metric-pulse 0.9s ease-in-out infinite',
        'ring-pulse': 'ring-pulse 2.4s ease-in-out infinite',
        'card-in': 'card-in 0.28s ease-out',
        dash: 'dash 1.1s linear infinite',
        sweep: 'sweep 2.6s ease-in-out infinite',
        flicker: 'flicker 6s linear infinite',
      },
    },
  },
  plugins: [],
};
