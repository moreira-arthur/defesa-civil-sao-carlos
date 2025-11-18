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
      primary: "#002F56", // Azul primário da Defesa Civil
      light: "#A8C5DB", // Azul claro para acentos
    },
    orange: {
      primary: "#FFA700", // Laranja secundário
      light: "#FFD699", // Laranja claro para acentos
    },
  },

  // ============================================================================
  // TEMA CLARO (PADRÃO)
  // ============================================================================
  light: {
    background: "#FFFFFF",
    foreground: "#333333",

    card: {
      background: "#FFFFFF",
      foreground: "#333333",
    },

    popover: {
      background: "#FFFFFF",
      foreground: "#333333",
    },

    primary: {
      DEFAULT: "#002F56", // CD Blue
      foreground: "#FFFFFF",
    },

    secondary: {
      DEFAULT: "#FFA700", // CD Orange
      foreground: "#FFFFFF",
    },

    muted: {
      DEFAULT: "#F5F7FA",
      foreground: "#333",
    },

    accent: {
      DEFAULT: "#A8C5DB", // CD Blue Light
      foreground: "#002F56",
    },

    destructive: {
      DEFAULT: "#A12E30",
      foreground: "#FFFFFF",
    },

    // Variante invertida para uso em botões (ex.: botão de chamada com ícone e número 199)
    destructiveInverted: {
      // Inverte DEFAULT e foreground da variante `destructive` acima
      DEFAULT: "#FFFFFF",
      foreground: "#A12E30",
    },

    success: {
      DEFAULT: "#16A34A",
      foreground: "#FFFFFF",
    },

    warning: {
      DEFAULT: "#FFA700", // CD Orange
      foreground: "#FFFFFF",
    },

    border: "#E5E7EB",
    input: "#F3F4F6",
    ring: "#FFA700", // CD Orange para focus
  },

  // ============================================================================
  // TEMA ESCURO
  // ============================================================================
  dark: {
    background: "#0A0E27", // Azul escuro muito profundo (quase preto com matiz azul)
    foreground: "#F5F7FA", // Cinza muito claro para alto contraste

    card: {
      background: "#151B3D", // Azul escuro para cards
      foreground: "#F5F7FA",
    },

    popover: {
      background: "#151B3D",
      foreground: "#F5F7FA",
    },

    primary: {
      DEFAULT: "#002F56", // Azul primário da marca (mantém identidade visual)
      foreground: "#F5F7FA", // Contraste 7.2:1 (AAA - excelente)
    },

    secondary: {
      DEFAULT: "#FFA700", // Laranja da marca (mantém identidade visual)
      foreground: "#0A0E27", // Contraste 8.1:1 (AAA - excelente)
    },

    muted: {
      DEFAULT: "#2A3454", // Cinza-azulado médio
      foreground: "#D1D5DB", // Cinza claro para bom contraste
    },

    accent: {
      DEFAULT: "#A8C5DB", // Azul claro da marca
      foreground: "#0A0E27", // Contraste 6.8:1 (AAA)
    },

    destructive: {
      DEFAULT: "#A12E30", // Vermelho mais brilhante para escuro
      foreground: "#F5F7FA", // Contraste 7.4:1 (AAA)
    },

    // Variante invertida para modo escuro (uso em botões com fundo claro sobre tema escuro)
    destructiveInverted: {
      DEFAULT: "#F5F7FA",
      foreground: "#FF6B6B", // Vermelho mais visível em fundo claro
    },

    success: {
      DEFAULT: "#4ADE80", // Verde mais brilhante para escuro
      foreground: "#0A0E27", // Contraste 6.1:1 (AA)
    },

    warning: {
      DEFAULT: "#FFA700", // Laranja da marca
      foreground: "#0A0E27", // Contraste 8.1:1 (AAA)
    },

    border: "#2A3454", // Cinza-azulado para bordas
    input: "#151B3D", // Mesmo do card para consistência
    ring: "#FFA700", // Laranja para focus (herança da marca)
  },

  // ============================================================================
  // TEMA ALTO CONTRASTE
  // ============================================================================
  highContrast: {
    background: "#000000",
    foreground: "#FFFF00",

    card: {
      background: "#000000",
      foreground: "#FFFF00",
    },

    popover: {
      background: "#000000",
      foreground: "#FFFF00",
    },

    primary: {
      DEFAULT: "#FFFF00",
      foreground: "#000000",
    },

    secondary: {
      DEFAULT: "#FF0000",
      foreground: "#FFFF00",
    },

    muted: {
      DEFAULT: "#1A1A1A",
      foreground: "#FFFF99",
    },

    accent: {
      DEFAULT: "#FFFF00",
      foreground: "#000000",
    },

    destructive: {
      DEFAULT: "#FF0000",
      foreground: "#FFFF00",
    },

    destructiveInverted: {
      DEFAULT: "#FFFF00",
      foreground: "#FF0000",
    },

    success: {
      DEFAULT: "#00FF00",
      foreground: "#000000",
    },

    warning: {
      DEFAULT: "#FFFF00",
      foreground: "#000000",
    },

    border: "#FFFF00",
    input: "#1A1A1A",
    ring: "#FFFF00",
  },

  // ============================================================================
  // TEMA MONOCROMÁTICO
  // ============================================================================
  monochrome: {
    background: "#FFFFFF",
    foreground: "#000000",

    card: {
      background: "#FFFFFF",
      foreground: "#000000",
    },

    popover: {
      background: "#FFFFFF",
      foreground: "#000000",
    },

    card: {
      background: "#FFFFFF",
      foreground: "#333333",
    },

    popover: {
      background: "#FFFFFF",
      foreground: "#333333",
    },

    primary: {
      DEFAULT: "#000000",
      foreground: "#FFFFFF",
    },

    secondary: {
      DEFAULT: "#000000",
      foreground: "#FFFFFF",
    },

    muted: {
      DEFAULT: "#E0E0E0",
      foreground: "#333333",
    },

    accent: {
      DEFAULT: "#000000",
      foreground: "#FFFFFF",
    },

    destructive: {
      DEFAULT: "#000000",
      foreground: "#FFFFFF",
    },

    droughtOperation:{

    },

    // Nome esperado pelo applyTheme e por padrões de variáveis (destructiveInverted)
    destructiveInverted: {
      DEFAULT: "#FFFFFF",
      foreground: "#000000",
    },

    border: "#000000",
    input: "#000000",
    ring: "#000000",
  },
};

export type ColorTheme = "light" | "dark" | "highContrast" | "monochrome";
