/**
 * Design System - Colors Configuration
 * 
 * Todas as cores em hexadecimal para facilitar cópia do Figma.
 * Modifique este arquivo para alterar a paleta de cores da aplicação.
 */

export const colors = {
  // ============================================================================
  // PALETA PRINCIPAL - DEFESA CIVIL SÃO CARLOS
  // ============================================================================
  brand: {
    blue: {
      primary: '#002F56',     // Azul primário da Defesa Civil
      light: '#A8C5DB',       // Azul claro para acentos
    },
    orange: {
      primary: '#FFA700',     // Laranja secundário
      light: '#FFD699',       // Laranja claro para acentos
    },
  },

  // ============================================================================
  // TEMA CLARO (PADRÃO)
  // ============================================================================
  light: {
    background: '#FFFFFF',
    foreground: '#333333',
    
    card: {
      background: '#FFFFFF',
      foreground: '#333333',
    },
    
    popover: {
      background: '#FFFFFF',
      foreground: '#333333',
    },
    
    primary: {
      DEFAULT: '#002F56',     // CD Blue
      foreground: '#FFFFFF',
    },
    
    secondary: {
      DEFAULT: '#FFA700',     // CD Orange
      foreground: '#FFFFFF',
    },
    
    muted: {
      DEFAULT: '#F5F7FA',
      foreground: '#737373',
    },
    
    accent: {
      DEFAULT: '#A8C5DB',     // CD Blue Light
      foreground: '#002F56',
    },
    
    destructive: {
      DEFAULT: '#DC2626',
      foreground: '#FFFFFF',
    },
    
    success: {
      DEFAULT: '#16A34A',
      foreground: '#FFFFFF',
    },
    
    warning: {
      DEFAULT: '#FFA700',     // CD Orange
      foreground: '#FFFFFF',
    },
    
    border: '#E5E7EB',
    input: '#F3F4F6',
    ring: '#FFA700',          // CD Orange para focus
  },

  // ============================================================================
  // TEMA ESCURO
  // ============================================================================
  dark: {
    background: '#121212',    // Cinza-escuro suave (evita preto puro)
    foreground: '#E5E7EB',
    
    card: {
      background: '#1F1F1F',
      foreground: '#E5E7EB',
    },
    
    popover: {
      background: '#1F1F1F',
      foreground: '#E5E7EB',
    },
    
    primary: {
      DEFAULT: '#4A9FDB',     // Azul mais claro para modo escuro
      foreground: '#121212',
    },
    
    secondary: {
      DEFAULT: '#2D3748',
      foreground: '#E5E7EB',
    },
    
    muted: {
      DEFAULT: '#2D3748',
      foreground: '#9CA3AF',
    },
    
    accent: {
      DEFAULT: '#2D3748',
      foreground: '#E5E7EB',
    },
    
    destructive: {
      DEFAULT: '#7F1D1D',
      foreground: '#E5E7EB',
    },
    
    success: {
      DEFAULT: '#166534',
      foreground: '#E5E7EB',
    },
    
    warning: {
      DEFAULT: '#FFA700',
      foreground: '#121212',
    },
    
    border: '#2D3748',
    input: '#2D3748',
    ring: '#94A3B8',
  },

  // ============================================================================
  // TEMA ALTO CONTRASTE
  // ============================================================================
  highContrast: {
    background: '#000000',
    foreground: '#FFFF00',
    
    card: {
      background: '#000000',
      foreground: '#FFFF00',
    },
    
    primary: {
      DEFAULT: '#FFFF00',
      foreground: '#000000',
    },
    
    secondary: {
      DEFAULT: '#FFFF00',
      foreground: '#000000',
    },
    
    muted: {
      DEFAULT: '#1A1A1A',
      foreground: '#FFFF99',
    },
    
    accent: {
      DEFAULT: '#FFFF00',
      foreground: '#000000',
    },
    
    border: '#FFFF00',
    input: '#1A1A1A',
    ring: '#FFFF00',
  },

  // ============================================================================
  // TEMA MONOCROMÁTICO
  // ============================================================================
  monochrome: {
    background: '#FFFFFF',
    foreground: '#333333',
    
    primary: {
      DEFAULT: '#333333',
      foreground: '#FFFFFF',
    },
    
    secondary: {
      DEFAULT: '#999999',
      foreground: '#FFFFFF',
    },
    
    accent: {
      DEFAULT: '#CCCCCC',
      foreground: '#333333',
    },
    
    border: '#CCCCCC',
    ring: '#999999',
  },
};

export type ColorTheme = 'light' | 'dark' | 'highContrast' | 'monochrome';
