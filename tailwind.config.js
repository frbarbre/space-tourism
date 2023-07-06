/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('/backgrounds/background-home-mobile.jpg')",
        "home-tablet": "url('/backgrounds/background-home-tablet.jpg')",
        "home-desktop": "url('/backgrounds/background-home-desktop.jpg')",

        "crew-mobile": "url('/backgrounds/background-crew-mobile.jpg')",
        "crew-tablet": "url('/backgrounds/background-crew-tablet.jpg')",
        "crew-desktop": "url('/backgrounds/background-crew-desktop.jpg')",

        "destination-mobile": "url('/backgrounds/background-destination-mobile.jpg')",
        "destination-tablet": "url('/backgrounds/background-destination-tablet.jpg')",
        "destination-desktop": "url('/backgrounds/background-destination-desktop.jpg')",

        "technology-mobile": "url('/backgrounds/background-technology-mobile.jpg')",
        "technology-tablet": "url('/backgrounds/background-technology-tablet.jpg')",
        "technology-desktop": "url('/backgrounds/background-technology-desktop.jpg')",
      },
      fontFamily: {
        bellefair: 'var(--font-bellefair)',
        "barlow-condensed": 'var(--font-barlow-condensed)',
        barlow: 'var(--font-barlow)'
      },
      colors: {
        "dark-blue": "#0B0D17",
        "light-blue": "#D0D6F9",
        "opaque": "rgba(255, 255, 255, .04)",
        "opaque-strong": "rgba(255, 255, 255, 0.4)"
      },
      minHeight: {
        "screen-header": "calc(100vh - 136px)",
        "screen-heading": "calc(100vh - 255px)",
        "screen-heading-tablet": "calc(100vh - 156px)"
      }
    },
  },
  plugins: [],
}
