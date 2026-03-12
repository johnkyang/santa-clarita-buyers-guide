import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["selector", "[data-theme='dark']"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// New design system palette — CSS variable backed
  			navy: {
  				950: 'var(--color-navy-950)',
  				900: 'var(--color-navy-900)',
  				800: 'var(--color-navy-800)',
  				700: 'var(--color-navy-700)',
  				600: 'var(--color-navy-600)',
  				500: 'var(--color-navy-500)',
  			},
  			gold: {
  				900: 'var(--color-gold-900)',
  				800: 'var(--color-gold-800)',
  				700: 'var(--color-gold-700)',
  				600: 'var(--color-gold-600)',
  				500: 'var(--color-gold-500)',
  				400: 'var(--color-gold-400)',
  				100: 'var(--color-gold-100)',
  			},
  			warm: {
  				950: 'var(--color-warm-950)',
  				900: 'var(--color-warm-900)',
  				800: 'var(--color-warm-800)',
  				700: 'var(--color-warm-700)',
  				600: 'var(--color-warm-600)',
  				400: 'var(--color-warm-400)',
  				300: 'var(--color-warm-300)',
  				200: 'var(--color-warm-200)',
  				100: 'var(--color-warm-100)',
  				50:  'var(--color-warm-50)',
  			},
  		},
  		fontFamily: {
  			sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  			display: ['var(--font-playfair)', 'Georgia', 'serif'],
  		},
  		backgroundImage: {
  			'gradient-radial':       'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-hero':         'var(--gradient-hero)',
  			'gradient-gold':         'var(--gradient-gold)',
  			'gradient-section':      'var(--gradient-section)',
  			'gradient-dark-overlay': 'var(--gradient-overlay)',
  		},
  		boxShadow: {
  			'card':       'var(--card-shadow)',
  			'card-hover': 'var(--card-shadow-hover)',
  			'gold':       'var(--shadow-gold)',
  			'premium':    '0 20px 60px -15px rgba(0,0,0,0.3)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
