/**
 * Theme Utilities
 * 
 * Funções auxiliares para conversão e aplicação de temas.
 * Seguindo princípios SOLID: Single Responsibility Principle
 */

import { colors, type ColorTheme } from '@/config/design';

/**
 * Converte cor hexadecimal para HSL
 * @param hex - Cor em formato hexadecimal (#RRGGBB)
 * @returns String HSL no formato "H S% L%"
 */
export function hexToHSL(hex: string): string {
  // Remove o # se presente
  hex = hex.replace('#', '');

  // Converte para RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  const lValue = Math.round(l * 100);

  return `${h} ${s}% ${lValue}%`;
}

/**
 * Aplica tema ao documento
 * @param theme - Nome do tema a ser aplicado
 */
export function applyTheme(theme: ColorTheme): void {
  const root = document.documentElement;
  const body = document.body;
  
  // Remove classes de tema existentes
  body.classList.remove('high-contrast', 'monochrome');
  root.classList.remove('dark');
  
  // Aplica classe do tema
  if (theme === 'dark') {
    root.classList.add('dark');
  } else if (theme === 'highContrast') {
    body.classList.add('high-contrast');
  } else if (theme === 'monochrome') {
    body.classList.add('monochrome');
  }
  
  // Aplica variáveis CSS do tema (apenas para light e dark)
  if (theme === 'light' || theme === 'dark') {
    const themeColors = colors[theme];
    
    root.style.setProperty('--background', hexToHSL(themeColors.background));
    root.style.setProperty('--foreground', hexToHSL(themeColors.foreground));
    root.style.setProperty('--card', hexToHSL(themeColors.card.background));
    root.style.setProperty('--card-foreground', hexToHSL(themeColors.card.foreground));
    root.style.setProperty('--primary', hexToHSL(themeColors.primary.DEFAULT));
    root.style.setProperty('--primary-foreground', hexToHSL(themeColors.primary.foreground));
    root.style.setProperty('--secondary', hexToHSL(themeColors.secondary.DEFAULT));
    root.style.setProperty('--secondary-foreground', hexToHSL(themeColors.secondary.foreground));
    root.style.setProperty('--muted', hexToHSL(themeColors.muted.DEFAULT));
    root.style.setProperty('--muted-foreground', hexToHSL(themeColors.muted.foreground));
    root.style.setProperty('--accent', hexToHSL(themeColors.accent.DEFAULT));
    root.style.setProperty('--accent-foreground', hexToHSL(themeColors.accent.foreground));
    root.style.setProperty('--border', hexToHSL(themeColors.border));
    root.style.setProperty('--input', hexToHSL(themeColors.input));
    root.style.setProperty('--ring', hexToHSL(themeColors.ring));
    root.style.setProperty('--destructive', hexToHSL(themeColors.destructive.DEFAULT));
    root.style.setProperty('--destructive-foreground', hexToHSL(themeColors.destructive.foreground));
    // Variáveis para destructive-inverted (se estiver definido no tema)
    if (themeColors.destructiveInverted) {
      root.style.setProperty('--destructive-inverted', hexToHSL(themeColors.destructiveInverted.DEFAULT));
      root.style.setProperty('--destructive-inverted-foreground', hexToHSL(themeColors.destructiveInverted.foreground));
    }
    root.style.setProperty('--success', hexToHSL(themeColors.success.DEFAULT));
    root.style.setProperty('--success-foreground', hexToHSL(themeColors.success.foreground));
    root.style.setProperty('--warning', hexToHSL(themeColors.warning.DEFAULT));
    root.style.setProperty('--warning-foreground', hexToHSL(themeColors.warning.foreground));
  }
  // Para highContrast e monochrome, as cores são aplicadas via CSS (index.css)
}

/**
 * Aplica multiplicador de tamanho de fonte
 * @param multiplier - Valor do multiplicador
 */
export function applyFontSizeMultiplier(multiplier: number): void {
  document.documentElement.style.setProperty('--font-size-multiplier', multiplier.toString());
}

/**
 * Aplica altura de linha
 * @param lineHeight - Valor da altura de linha
 */
export function applyLineHeight(lineHeight: number): void {
  document.documentElement.style.setProperty('--line-height-multiplier', lineHeight.toString());
}
