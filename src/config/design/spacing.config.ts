/**
 * Design System - Spacing Configuration
 * 
 * Configurações de espaçamentos, raios de borda e tamanhos de container.
 * Modifique este arquivo para alterar os espaçamentos da aplicação.
 */

export const spacing = {
  // ============================================================================
  // BORDER RADIUS
  // ============================================================================
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    DEFAULT: '0.5rem', // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',
  },

  // ============================================================================
  // CONTAINER
  // ============================================================================
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
  },

  // ============================================================================
  // TAMANHOS MÍNIMOS DE TOQUE (WCAG)
  // ============================================================================
  touch: {
    minimum: '44px',  // WCAG AA requirement
    recommended: '48px',
  },
};
