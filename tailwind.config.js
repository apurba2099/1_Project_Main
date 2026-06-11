/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'site-bg':    'rgb(4,4,10)',
        'card-bg':    'rgb(14,14,28)',
        'card-hover': 'rgb(19,19,42)',
        'card-alt':   'rgb(10,10,20)',
        'accent':     '#00b4ff',
        'muted':      'rgb(192,191,197)',
        'dim':        '#5a6a7a',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at 50% 30%, rgba(66,58,207,0.55) 0%, rgba(37,0,180,0.3) 35%, transparent 70%)',
        'page-glow': 'radial-gradient(ellipse at 50% 30%, rgba(66,58,207,0.45) 0%, rgba(37,0,180,0.2) 40%, transparent 70%)',
        'cta-grad':  'linear-gradient(180deg,#0d0d1f 0%,#070714 100%)',
      },
      boxShadow: {
        'hero-img':       '0 0 60px rgba(66,58,207,0.25),0 0 0 1px rgba(255,255,255,0.05),0 28px 80px rgba(0,0,0,0.7)',
        'hero-img-hover': '0 0 90px rgba(66,58,207,0.45),0 0 0 1px rgba(0,180,255,0.2),0 32px 100px rgba(0,0,0,0.7)',
        'accent-glow':    '0 0 20px rgba(0,180,255,0.4)',
        'card-hover':     '0 8px 24px rgba(0,180,255,0.1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      maxWidth: {
        'site': '1200px',
      },
    },
  },
  plugins: [],
};
