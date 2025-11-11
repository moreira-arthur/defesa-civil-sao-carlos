/**
 * Design System - Central Export
 * 
 * Ponto único de importação para todas as configurações de design.
 * Use: import { colors, typography, spacing, effects } from '@/config/design';
 */

export { colors } from './colors.config';
export { typography } from './typography.config';
export { spacing } from './spacing.config';
export { effects } from './effects.config';

// Re-exportar tipos
export type { ColorTheme } from './colors.config';
