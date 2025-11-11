# Design System - São Carlos Civil Defense

Este diretório contém todas as configurações de design da aplicação, organizadas em módulos separados para facilitar manutenção e modificação.

## 📁 Estrutura de Arquivos

### `colors.config.ts`
Contém todas as paletas de cores em **hexadecimal** para facilitar cópia do Figma:
- Cores da marca (Defesa Civil)
- Tema claro (padrão)
- Tema escuro
- Tema alto contraste
- Tema monocromático

### `typography.config.ts`
Configurações tipográficas:
- Famílias de fontes (sans, heading, dyslexic)
- Tamanhos de fonte
- Multiplicadores de acessibilidade
- Altura de linha
- Peso das fontes
- Espaçamento de letras

### `spacing.config.ts`
Espaçamentos e dimensões:
- Border radius
- Container settings
- Tamanhos mínimos de toque (WCAG)

### `effects.config.ts`
Efeitos visuais:
- Sombras
- Gradientes
- Transições
- Curvas de animação
- Keyframes
- Animações prontas

### `index.ts`
Exportação centralizada de todas as configurações.

## 🎨 Como Usar

### Importar configurações
```typescript
import { colors, typography, spacing, effects } from '@/config/design';

// Usar cores
const primaryColor = colors.brand.blue.primary; // #002F56

// Usar tipografia
const headingFont = typography.fontFamily.heading;

// Usar espaçamentos
const borderRadius = spacing.borderRadius.DEFAULT;

// Usar efeitos
const shadow = effects.boxShadow.medium;
```

### Modificar cores do Figma
1. Abra `colors.config.ts`
2. Copie a cor do Figma
3. Cole no campo desejado (formato hexadecimal)
4. As cores serão aplicadas automaticamente

## 🎯 Princípios de Design

### Acessibilidade (WCAG 2.1 AA)
- Contraste mínimo de 4.5:1 para texto
- Elementos touch de no mínimo 44x44px
- Suporte a múltiplos temas
- Suporte a fonte para dislexia

### Responsividade
- Mobile-first approach
- Breakpoints bem definidos
- Tamanhos flexíveis

### Performance
- Transições suaves
- Animações otimizadas
- CSS eficiente

## 🔧 Manutenção

Ao modificar o design system:
1. Edite apenas os arquivos de configuração neste diretório
2. Não edite valores diretamente nos componentes
3. Use sempre as variáveis do design system
4. Mantenha a consistência entre temas
5. Teste em todos os temas de acessibilidade
