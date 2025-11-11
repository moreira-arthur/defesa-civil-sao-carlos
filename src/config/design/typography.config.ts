/**
 * Design System - Typography Configuration
 * 
 * Configurações de fontes, tamanhos e espaçamentos tipográficos.
 * Modifique este arquivo para alterar a tipografia da aplicação.
 */

export const typography = {
  // ============================================================================
  // FAMÍLIAS DE FONTES
  // ============================================================================
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    heading: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    dyslexic: ['OpenDyslexic', 'Comic Sans MS', 'cursive'],
  },

  // ============================================================================
  // TAMANHOS DE FONTE BASE (em rem)
  // ============================================================================
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },

  // ============================================================================
  // MULTIPLICADORES DE TAMANHO (para controle de acessibilidade)
  // ============================================================================
  fontSizeMultipliers: {
    small: 0.875,    // 87.5%
    medium: 1,       // 100%
    large: 1.125,    // 112.5%
    xl: 1.25,        // 125%
    '2xl': 1.5,      // 150%
  },

  // ============================================================================
  // ALTURA DE LINHA
  // ============================================================================
  lineHeight: {
    tight: 1.25,
    normal: 1.6,
    relaxed: 1.8,
    loose: 2,
  },

  // ============================================================================
  // PESO DAS FONTES
  // ============================================================================
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // ============================================================================
  // ESPAÇAMENTO DE LETRAS
  // ============================================================================
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};
