/**
 * Design System - Effects Configuration
 * 
 * Configurações de sombras, gradientes, transições e animações.
 * Modifique este arquivo para alterar os efeitos visuais da aplicação.
 */

export const effects = {
  // ============================================================================
  // SOMBRAS
  // ============================================================================
  boxShadow: {
    soft: '0 2px 10px rgba(0, 47, 86, 0.1)',
    medium: '0 4px 20px rgba(0, 47, 86, 0.15)',
    strong: '0 8px 30px rgba(0, 47, 86, 0.2)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },

  // ============================================================================
  // GRADIENTES
  // ============================================================================
  gradients: {
    hero: 'linear-gradient(135deg, #002F56, rgba(0, 47, 86, 0.8))',
    section: 'linear-gradient(180deg, #FFFFFF, #F5F7FA)',
    overlay: 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
  },

  // ============================================================================
  // TRANSIÇÕES
  // ============================================================================
  transition: {
    fast: 'all 0.15s ease-out',
    base: 'all 0.2s ease-out',
    smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s ease-out',
  },

  // ============================================================================
  // CURVAS DE ANIMAÇÃO (EASING)
  // ============================================================================
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // ============================================================================
  // KEYFRAMES DE ANIMAÇÃO
  // ============================================================================
  keyframes: {
    'fade-in-up': {
      '0%': {
        opacity: '0',
        transform: 'translateY(30px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    'slide-in-right': {
      '0%': {
        opacity: '0',
        transform: 'translateX(30px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateX(0)',
      },
    },
    'emergency-pulse': {
      '0%, 100%': {
        transform: 'scale(1)',
        opacity: '1',
      },
      '50%': {
        transform: 'scale(1.05)',
        opacity: '0.9',
      },
    },
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' },
    },
  },

  // ============================================================================
  // ANIMAÇÕES PRONTAS
  // ============================================================================
  animation: {
    'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
    'fade-in': 'fade-in 0.3s ease-out',
    'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
    'emergency-pulse': 'emergency-pulse 2s infinite',
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
  },
};
