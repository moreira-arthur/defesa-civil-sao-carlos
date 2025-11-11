/**
 * Utilitários para trabalhar com o tema
 * 
 * Funções auxiliares para converter e aplicar valores do theme.config.ts
 */

import theme from '@/config/theme.config';

/**
 * Converte um valor HSL do tema para uso em Tailwind
 * Exemplo: getThemeColor('cdBlue.primary') retorna a cor CD Blue Primary
 */
export function getThemeColor(path: string): string {
  const parts = path.split('.');
  let value: any = theme.colors;
  
  for (const part of parts) {
    value = value[part];
    if (!value) return '';
  }
  
  return typeof value === 'string' ? value : '';
}

/**
 * Gera variáveis CSS a partir do objeto de cores
 * Útil para debug ou geração dinâmica
 */
export function generateCSSVariables(themeMode: 'light' | 'dark' | 'highContrast' | 'monochrome' = 'light'): Record<string, string> {
  const colorSet = theme.colors[themeMode];
  const variables: Record<string, string> = {};
  
  Object.entries(colorSet).forEach(([key, value]) => {
    const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    variables[cssVarName] = value;
  });
  
  return variables;
}

/**
 * Retorna o tema completo para fácil acesso
 */
export function getTheme() {
  return theme;
}

/**
 * Retorna as cores do tema em formato estruturado
 */
export function getThemeColors() {
  return theme.colors;
}

/**
 * Retorna as configurações de tipografia
 */
export function getTypography() {
  return theme.typography;
}

/**
 * Retorna as configurações de sombras
 */
export function getShadows() {
  return theme.shadows;
}

export default {
  getThemeColor,
  generateCSSVariables,
  getTheme,
  getThemeColors,
  getTypography,
  getShadows,
};
