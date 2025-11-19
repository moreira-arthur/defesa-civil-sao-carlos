/**
 * Script para gerar variáveis CSS a partir de colors.config.ts
 * Converte cores hexadecimais em HSL e gera o arquivo index.css
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { colors } from '../src/config/design/colors.config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Converte hexadecimal para HSL
 */
function hexToHSL(hex: string): string {
  const h = hex.replace(/#/, '');
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue = 0;
  let saturation = 0;
  const lightness = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / d + 2;
        break;
      case b:
        hue = (r - g) / d + 4;
        break;
    }
    hue /= 6;
  }

  return `${Math.round(hue * 360)} ${Math.round(saturation * 100)}% ${Math.round(lightness * 100)}%`;
}

/**
 * Gera as variáveis CSS para um tema
 */
function generateThemeVariables(themeName: string, themeColors: Record<string, unknown>): string {
  const classSelector = themeName === 'light' ? ':root' : `.${themeName.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
  
  let css = `  ${classSelector} {\n`;

  const processColor = (key: string, value: Record<string, unknown>) => {
    if (typeof value === 'string') {
      // Cor simples (ex: background, border)
      const hsl = hexToHSL(value);
      css += `    --${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${hsl};\n`;
    } else if (typeof value === 'object' && (value as Record<string, unknown>).DEFAULT) {
      // Cor com variantes (ex: primary, secondary)
      const defaultHsl = hexToHSL(value.DEFAULT as string);
      css += `    --${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${defaultHsl};\n`;
      
      if ((value as Record<string, unknown>).foreground) {
        const foregroundHsl = hexToHSL((value as Record<string, unknown>).foreground as string);
        css += `    --${key.replace(/([A-Z])/g, '-$1').toLowerCase()}-foreground: ${foregroundHsl};\n`;
      }
    } else if (typeof value === 'object') {
      // Objeto aninhado (ex: card, popover)
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof subValue === 'string') {
          const hsl = hexToHSL(subValue);
          // Mapeamento especial: "background" vira apenas o prefixo, "foreground" vira sufixo
          if (subKey === 'background') {
            const simpleKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            css += `    --${simpleKey}: ${hsl};\n`;
          } else if (subKey === 'foreground') {
            const simpleKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            css += `    --${simpleKey}-foreground: ${hsl};\n`;
          } else {
            const fullKey = `${key}-${subKey}`.replace(/([A-Z])/g, '-$1').toLowerCase();
            css += `    --${fullKey}: ${hsl};\n`;
          }
        }
      });
    }
  };

  Object.entries(themeColors).forEach(([key, value]) => {
    processColor(key, value);
  });

  css += `  }\n\n`;
  return css;
}

/**
 * Gera o arquivo CSS completo
 */
function generateCSSFile() {
  let cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

/**
 * Civil Defense São Carlos - Design System
 * 
 * IMPORTANTE: Este arquivo é gerado automaticamente a partir de:
 * src/config/design/colors.config.ts
 * 
 * Para modificar cores, edite colors.config.ts e execute:
 * npm run generate:colors
 * 
 * As variáveis CSS abaixo permitem a troca dinâmica de temas
 * (claro, escuro, alto contraste, monocromático) via JavaScript.
 */

@layer base {
`;

  // Gerar :root (tema light)
  cssContent += generateThemeVariables('light', colors.light);

  // Gerar temas adicionais
  cssContent += generateThemeVariables('dark', colors.dark);
  cssContent += generateThemeVariables('highContrast', colors.highContrast);
  cssContent += generateThemeVariables('monochrome', colors.monochrome);

  // Adicionar variáveis base e utilidades
  cssContent += `  /* Multiplicadores de Acessibilidade */
  :root {
    --font-size-multiplier: 1;
    --line-height-multiplier: 1.6;
    --radius: 0.5rem;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: calc(1rem * var(--font-size-multiplier));
    line-height: var(--line-height-multiplier);
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 600;
    line-height: 1.2;
  }

  /* Dyslexia-friendly font option */
  .dyslexia-friendly {
    font-family: 'OpenDyslexic', 'Comic Sans MS', cursive !important;
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
    border-radius: 0.25rem;
  }

  /* Skip to main content link */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    padding: 8px;
    border-radius: 4px;
    text-decoration: none;
    z-index: 1000;
    transition: top 0.3s;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Animation classes */
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(30px);
  }

  .animate-slide-in-right {
    animation: slideInRight 0.5s ease-out forwards;
    opacity: 0;
    transform: translateX(30px);
  }

  /* Custom utility classes */
  .emergency-pulse {
    --emergency-bg: var(--destructive);
    animation: emergencyPulse 2s infinite;
  }

  @keyframes emergencyPulse {
    0%, 100% {
      background-color: hsl(var(--emergency-bg));
      transform: scale(1);
    }
    50% {
      background-color: hsl(var(--emergency-bg) / 0.8);
      transform: scale(1.05);
    }
  }

  .bg-destructive-inverted.emergency-pulse {
    --emergency-bg: var(--destructive-inverted);
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Accessibility toolbar styles */
  .accessibility-toolbar {
    background: hsl(var(--card));
    border: 1px solid hsl(var(--border));
    box-shadow: var(--shadow-medium);
    border-radius: var(--radius);
  }

  /* Utility classes para acessibilidade */
  .text-accessible {
    font-size: calc(1rem * var(--font-size-multiplier));
    line-height: var(--line-height-multiplier);
  }
  
  h1, h2, h3, h4, h5, h6, p, li, a, button, label, span {
    font-size: calc(1em * var(--font-size-multiplier));
    line-height: var(--line-height-multiplier);
  }
}
`;

  return cssContent;
}

// Executar geração
try {
  const cssContent = generateCSSFile();
  const outputPath = `${__dirname}/../src/index.css`;
  fs.writeFileSync(outputPath, cssContent, 'utf-8');
  console.log('✅ Variáveis CSS geradas com sucesso em src/index.css');
} catch (error) {
  console.error('❌ Erro ao gerar variáveis CSS:', error);
  process.exit(1);
}
