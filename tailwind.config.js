/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-black': '#1A1A1A',
        'custom-green': '#ADFF11',
        'custom-darkgreen': '#2B4235',
        'custom-blue': '#287DFF',
        'custom-red': '#FF2828',
      },
    },
  },
  plugins: [],
};
