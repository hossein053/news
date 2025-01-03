import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: {
          'DEFAULT': '24px',
          'sm': '2rem',
          'lg': '4rem',
          'xl': '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
