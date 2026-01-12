 tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        sans: ['"Lato"', 'sans-serif'],
                    },
                    colors: {
                        'bg-main': '#202023',      
                        'bg-card': '#2a2a2e',      
                        'text-main': '#f4f4f5',    
                        'text-muted': '#a1a1aa',   
                        'brand-neon': '#bef264',   
                        'brand-lilac': '#a78bfa',  
                        'brand-neon-hover': '#a3e635', 
                        'brand-lilac-hover': '#8b5cf6',
                    },
                    backgroundImage: {
                        'gradient-glow': 'radial-gradient(circle at center, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }