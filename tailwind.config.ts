import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-brown": "var(--primary-brown)",
        "secondary-brown": "var(--secondary-brown)",
        "accent-yellow": "var(--accent-yellow)",
        "secondary-accent-yellow": "var(--secondary-accent-yellow)",
        black: "var(--black)",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
