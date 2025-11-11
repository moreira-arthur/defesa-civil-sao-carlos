# Configuração do Design System

## 📁 Estrutura

Este diretório contém a **configuração centralizada** de todo o design system da aplicação.

### `theme.config.ts`

**Arquivo principal** - Fonte única de verdade para todo o design da aplicação.

#### O que você pode configurar:

1. **Cores** (`colors`)
   - Paleta principal da Defesa Civil (azul e laranja)
   - Temas: claro, escuro, alto contraste, monocromático
   - Cores semânticas (primary, secondary, destructive, etc.)

2. **Tipografia** (`typography`)
   - Famílias de fontes (sans, heading, dyslexic)
   - Tamanhos de fonte
   - Alturas de linha
   - Pesos das fontes

3. **Espaçamentos** (`spacing`)
   - Border radius
   - Container
   - Padding/margin (via Tailwind)

4. **Sombras** (`shadows`)
   - soft, medium, strong

5. **Gradientes** (`gradients`)
   - hero, section

6. **Transições** (`transitions`)
   - smooth, fast

7. **Animações** (`animations`)
   - Configurações de keyframes

## 🎨 Como Alterar as Cores

### Exemplo: Mudar a cor primária

```typescript
// Em theme.config.ts
export const colors = {
  cdBlue: {
    primary: '208 100% 17%',  // ← Altere aqui!
    light: '208 60% 85%',
  },
  // ...
}
```

### Exemplo: Mudar a paleta do tema escuro

```typescript
// Em theme.config.ts
export const colors = {
  // ...
  dark: {
    background: '220 13% 9%',  // ← Mude para outra cor
    foreground: '210 40% 98%',
    // ...
  }
}
```

## 🔧 Como Funciona

1. **`theme.config.ts`** é importado pelo **`tailwind.config.ts`**
2. O Tailwind usa essas configurações para gerar as classes CSS
3. O **`src/index.css`** define as variáveis CSS que permitem troca dinâmica de temas
4. Os componentes usam as classes do Tailwind (ex: `bg-primary`, `text-foreground`)

## 📝 Formato de Cores

**Importante:** Todas as cores DEVEM estar no formato HSL sem o `hsl()`:

```typescript
// ✅ CORRETO
primary: '208 100% 17%'

// ❌ ERRADO
primary: 'hsl(208, 100%, 17%)'
primary: '#002F56'
```

Isso permite que o Tailwind e as variáveis CSS funcionem corretamente com opacidade e temas dinâmicos.

## 🚀 Próximos Passos

Após editar `theme.config.ts`:

1. O Vite/Tailwind detectará automaticamente a mudança
2. A aplicação será recarregada com as novas cores
3. Não é necessário editar mais nenhum arquivo!

## 🛠️ Utilitários

O arquivo **`src/lib/theme-utils.ts`** fornece funções auxiliares para trabalhar com o tema programaticamente.

```typescript
import { getThemeColor, getTheme } from '@/lib/theme-utils';

// Pega uma cor específica
const primaryColor = getThemeColor('cdBlue.primary');

// Pega o tema completo
const theme = getTheme();
```
