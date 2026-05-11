// Configuração do Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            colors: {
                'bg-main': '#121212',      
                'bg-card': '#1a1a1a',      
                'text-main': '#f8f8f8',    
                'text-muted': '#9ca3af',   
                'brand-neon': '#9ced8e',   
                'brand-matcha': '#729c78', 
                'brand-neon-hover': '#83db74', 
                'brand-matcha-hover': '#5e8764',
            },
            backgroundImage: {
                'gradient-glow': 'radial-gradient(circle at center, rgba(114, 156, 120, 0.15) 0%, transparent 70%)',
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
};

// Inicializa os ícones após o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});
