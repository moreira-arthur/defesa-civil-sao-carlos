import type { Config } from "tailwindcss";
import { colors, typography, spacing, effects } from "./src/config/design";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: spacing.container,
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        'destructive-inverted': {
          DEFAULT: "hsl(var(--destructive-inverted))",
          foreground: "hsl(var(--destructive-inverted-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'cd-blue': {
          primary: "hsl(var(--cd-blue-primary))",
          light: "hsl(var(--cd-blue-light))",
        },
        'cd-orange': {
          secondary: "hsl(var(--cd-orange-secondary))",
          light: "hsl(var(--cd-orange-light))",
        },
      },
      fontFamily: {
        sans: typography.fontFamily.sans,
        heading: typography.fontFamily.heading,
        dyslexic: typography.fontFamily.dyslexic,
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      boxShadow: effects.boxShadow,
      borderRadius: spacing.borderRadius,
      keyframes: effects.keyframes,
      animation: effects.animation,
      transitionTimingFunction: effects.easing,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
