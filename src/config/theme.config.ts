/**
 * Design System - Civil Defense São Carlos
 * 
 * FONTE ÚNICA DE VERDADE para todas as cores, fontes, espaçamentos e estilos.
 * Modifique este arquivo para alterar o tema da aplicação.
 */

// ============================================================================
// CORES
// ============================================================================

export const colors = {
  // Paleta Principal da Defesa Civil
  cdBlue: {
    primary: '208 100% 17%',      // #002F56
    light: '208 60% 85%',
  },
  cdOrange: {
    secondary: '38 100% 50%',     // #FFA700
    light: '38 60% 85%',
  },

  // Tema Claro (Light Mode)
  light: {
    background: '0 0% 100%',      // Branco
    foreground: '0 0% 20%',       // Cinza escuro para texto
    card: '0 0% 100%',
    cardForeground: '0 0% 20%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 20%',
    primary: '208 100% 17%',      // CD Blue
    primaryForeground: '0 0% 100%',
    secondary: '38 100% 50%',     // CD Orange
    secondaryForeground: '0 0% 100%',
    muted: '210 20% 96%',
    mutedForeground: '0 0% 45%',
    accent: '208 60% 85%',        // CD Blue Light
    accentForeground: '208 100% 17%',
    destructive: '0 84% 60%',
    destructiveForeground: '0 0% 100%',
    success: '120 60% 50%',
    successForeground: '0 0% 100%',
    warning: '38 100% 50%',       // CD Orange
    warningForeground: '0 0% 100%',
    border: '210 20% 90%',
    input: '210 20% 94%',
    ring: '38 100% 50%',          // CD Orange
  },

  // Tema Escuro (Dark Mode)
  dark: {
    background: '220 13% 9%',
    foreground: '210 40% 98%',
    card: '224 18% 12%',
    cardForeground: '210 40% 98%',
    popover: '224 18% 12%',
    popoverForeground: '210 40% 98%',
    primary: '200 100% 70%',
    primaryForeground: '220 13% 9%',
    secondary: '215 28% 17%',
    secondaryForeground: '210 40% 98%',
    muted: '215 28% 17%',
    mutedForeground: '217.9 10.6% 64.9%',
    accent: '215 28% 17%',
    accentForeground: '210 40% 98%',
    destructive: '0 62.8% 30.6%',
    destructiveForeground: '210 40% 98%',
    border: '215 28% 17%',
    input: '215 28% 17%',
    ring: '216 12.2% 83.9%',
  },

  // Tema Alto Contraste
  highContrast: {
    background: '0 0% 0%',
    foreground: '60 100% 100%',
    card: '0 0% 0%',
    cardForeground: '60 100% 100%',
    primary: '60 100% 100%',
    primaryForeground: '0 0% 0%',
    secondary: '60 100% 50%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 10%',
    mutedForeground: '60 100% 80%',
    accent: '60 100% 50%',
    accentForeground: '0 0% 0%',
    border: '60 100% 100%',
    input: '0 0% 10%',
    ring: '60 100% 50%',
  },

  // Tema Monocromático
  monochrome: {
    cdBluePrimary: '0 0% 20%',
    cdOrangeSecondary: '0 0% 60%',
    cdBlueLight: '0 0% 80%',
    cdOrangeLight: '0 0% 70%',
    primary: '0 0% 20%',
    secondary: '0 0% 60%',
    accent: '0 0% 80%',
    ring: '0 0% 60%',
  },
};

// ============================================================================
// TIPOGRAFIA
// ============================================================================

export const typography = {
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    heading: ['Poppins', 'system-ui', 'sans-serif'],
    dyslexic: ['OpenDyslexic', 'Comic Sans MS', 'cursive'],
  },
  
  // Tamanhos de fonte (rem)
  sizes: {
    small: '0.875rem',    // 14px
    medium: '1rem',       // 16px
    large: '1.125rem',    // 18px
    xl: '1.25rem',        // 20px
    '2xl': '1.5rem',      // 24px
  },

  // Altura de linha
  lineHeights: {
    tight: 1.25,
    normal: 1.6,
    relaxed: 1.8,
    loose: 2,
  },

  // Pesos
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

// ============================================================================
// ESPAÇAMENTOS E TAMANHOS
// ============================================================================

export const spacing = {
  radius: {
    default: '0.5rem',
    sm: 'calc(0.5rem - 4px)',
    md: 'calc(0.5rem - 2px)',
    lg: '0.5rem',
  },
  
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
};

// ============================================================================
// SOMBRAS
// ============================================================================

export const shadows = {
  soft: '0 2px 10px hsl(208 100% 17% / 0.1)',
  medium: '0 4px 20px hsl(208 100% 17% / 0.15)',
  strong: '0 8px 30px hsl(208 100% 17% / 0.2)',
};

// ============================================================================
// GRADIENTES
// ============================================================================

export const gradients = {
  hero: 'linear-gradient(135deg, hsl(208 100% 17%), hsl(208 100% 17% / 0.8))',
  section: 'linear-gradient(180deg, hsl(0 0% 100%), hsl(210 20% 96%))',
};

// ============================================================================
// TRANSIÇÕES E ANIMAÇÕES
// ============================================================================

export const transitions = {
  smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  fast: 'all 0.15s ease-out',
};

export const animations = {
  'accordion-down': {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' },
  },
};

// ============================================================================
// ESTADOS INTERATIVOS
// ============================================================================

export const interactive = {
  focusRing: colors.cdOrange.secondary,
  hoverOverlay: '0 0% 0% / 0.05',
};

// ============================================================================
// SIDEBAR (se necessário)
// ============================================================================

export const sidebar = {
  light: {
    background: '0 0% 98%',
    foreground: '240 5.3% 26.1%',
    primary: '240 5.9% 10%',
    primaryForeground: '0 0% 98%',
    accent: '240 4.8% 95.9%',
    accentForeground: '240 5.9% 10%',
    border: '220 13% 91%',
    ring: '217.2 91.2% 59.8%',
  },
  dark: {
    background: '240 5.9% 10%',
    foreground: '240 4.8% 95.9%',
    primary: '224.3 76.3% 48%',
    primaryForeground: '0 0% 100%',
    accent: '240 3.7% 15.9%',
    accentForeground: '240 4.8% 95.9%',
    border: '240 3.7% 15.9%',
    ring: '217.2 91.2% 59.8%',
  },
};

// ============================================================================
// EXPORTAÇÃO COMPLETA DO TEMA
// ============================================================================

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
  gradients,
  transitions,
  animations,
  interactive,
  sidebar,
};

export default theme;
