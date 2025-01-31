import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-heading':'#1A1A1A' , 
        'custom-text':'#4A4A4A' ,  
        'custom-subheading':'#2C2C2C' , 
        'custom-bg':'#FAFAFA' ,
        'custom-hover':'#EFEDEC'
      },
    },
  },
  plugins: [],
} satisfies Config;
