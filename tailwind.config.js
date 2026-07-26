/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate'

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#4E2FD2',
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#f1f5f9',
  				foreground: '#1e293b'
  			},
  			accent: {
  				DEFAULT: '#f1f5f9',
  				foreground: '#1e293b'
  			},
  			destructive: {
  				DEFAULT: '#f87171',
  				foreground: '#ffffff'
  			},
  			muted: {
  				DEFAULT: '#f1f5f9',
  				foreground: '#1e293b'
  			},
  			popover: {
  				DEFAULT: '#ffffff',
  				foreground: '#1e293b'
  			},
  			card: {
  				DEFAULT: '#ffffff',
  				foreground: '#1e293b'
  			},
  			border: '#e2e8f0',
  			input: '#e2e8f0',
  			ring: '#4E2FD2',
  			background: '#ffffff',
  			foreground: '#1e293b'
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
  plugins: [animate],
}