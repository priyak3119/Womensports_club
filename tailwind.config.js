module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ai-colorsai-brand-color": "var(--ai-colorsai-brand-color)",
        "ai-colorsai-system-msg": "var(--ai-colorsai-system-msg)",
        "m-3syslightprimary": "var(--m-3syslightprimary)",
        "m3state-layerslightonsurfacevariantopacity-010":
          "var(--m3state-layerslightonsurfacevariantopacity-010)",
        "m3syslighton-primary": "var(--m3syslighton-primary)",
        "m3syslighton-primary-container":
          "var(--m3syslighton-primary-container)",
        "m3syslighton-surface": "var(--m3syslighton-surface)",
        "m3syslighton-surface-variant": "var(--m3syslighton-surface-variant)",
        "m3syslightsecondary-container": "var(--m3syslightsecondary-container)",
        "m3syslightsurface-container-high":
          "var(--m3syslightsurface-container-high)",
        "m3syslightsurface-container-highest":
          "var(--m3syslightsurface-container-highest)",
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
      },
      fontFamily: {
        "m3-body-large": "var(--m3-body-large-font-family)",
        "m3-body-small": "var(--m3-body-small-font-family)",
        "m3-label-large": "var(--m3-label-large-font-family)",
        "single-line-body-base": "var(--single-line-body-base-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
