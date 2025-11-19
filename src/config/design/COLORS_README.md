# 🎨 Sistema de Cores Dinâmico

## Visão Geral

Este projeto usa um **sistema de cores totalmente dinâmico e integrado** que permite trocar temas em tempo de execução sem necessidade de recompilação.

### Arquitetura

```
colors.config.ts (Hexadecimal)
         ↓
   hexToHSL()
         ↓
   CSS Variables (HSL)
         ↓
Tailwind Classes + Componentes
```

## 📁 Arquivos Principais

### 1. **`src/config/design/colors.config.ts`**
Arquivo **master** com todas as definições de cores em hexadecimal.

**Temas Disponíveis:**
- `light` - Tema claro (padrão)
- `dark` - Tema escuro com alto contraste
- `highContrast` - Modo para acessibilidade máxima
- `monochrome` - Modo monocromático

**Como Modificar:**
1. Edite os valores hexadecimais em `colors.config.ts`
2. Execute: `npm run generate:colors`
3. O arquivo `src/index.css` será regenerado automaticamente

### 2. **`src/index.css`** (GERADO AUTOMATICAMENTE)
**NÃO EDITE MANUALMENTE!** Este arquivo é gerado pelo script `generateColorVariables.ts`.

Contém as variáveis CSS em formato HSL:
```css
:root {
  --primary: 207 100% 17%;  /* Convertido de #002F56 */
  --secondary: 39 100% 50%; /* Convertido de #FFA700 */
  ...
}
```

### 3. **`src/utils/theme.utils.ts`**
Funções para aplicar temas dinamicamente:

```typescript
// Aplicar um tema
applyTheme('dark');
applyTheme('highContrast');
applyTheme('light');

// Ajustar acessibilidade
applyFontSizeMultiplier(1.2); // Aumenta tamanho de fonte em 20%
applyLineHeight(1.8);         // Aumenta altura de linha
```

### 4. **`tailwind.config.ts`**
Mapeia as variáveis CSS para classes Tailwind:

```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  ...
}
```

## 🔄 Fluxo de Atualização

### Para Modificar Cores

**Passo 1:** Edite `src/config/design/colors.config.ts`
```typescript
export const colors = {
  light: {
    primary: {
      DEFAULT: "#FF0000", // Seu novo cor
      foreground: "#FFFFFF",
    },
    // ...
  },
  // ...
};
```

**Passo 2:** Gere as variáveis CSS
```bash
npm run generate:colors
```

**Passo 3:** O site recarrega e as cores são atualizadas automaticamente!

## 📊 Estrutura de Cores

### Formato Padrão
Cada tema deve ter:
```typescript
{
  background: "#FFFFFF",
  foreground: "#333333",
  
  // Componentes com variante
  primary: {
    DEFAULT: "#002F56",
    foreground: "#FFFFFF",
  },
  secondary: { /* ... */ },
  destructive: { /* ... */ },
  success: { /* ... */ },
  warning: { /* ... */ },
  muted: { /* ... */ },
  accent: { /* ... */ },
  
  // Valores simples
  border: "#E5E7EB",
  input: "#F3F4F6",
  ring: "#FFA700",
}
```

## 🎯 Usando Cores em Componentes

### React com Tailwind
```tsx
import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <>
      {/* Usa as variáveis CSS automaticamente */}
      <Button variant="default">Botão Primário</Button>
      <Button variant="secondary">Botão Secundário</Button>
      <Button variant="destructive">Botão Destruidor</Button>
      <Button variant="destructiveInverted">Botão 199</Button>
    </>
  );
}
```

### Classes Tailwind Diretas
```tsx
<div className="bg-primary text-primary-foreground">
  Fundo primário com texto em cor de foreground
</div>

<div className="bg-destructive-inverted text-destructive-inverted-foreground">
  Botão de emergência
</div>
```

### CSS Customizado
```css
.custom-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}
```

## 🌙 Alternância de Temas

### No Hook de Acessibilidade (Recomendado)
```typescript
import { applyTheme } from '@/utils/theme.utils';
import { useAccessibility } from '@/hooks/use-accessibility';

export function ThemeSwitcher() {
  const { theme, setTheme } = useAccessibility();

  return (
    <select value={theme} onChange={(e) => {
      const newTheme = e.target.value as 'light' | 'dark' | 'highContrast' | 'monochrome';
      setTheme(newTheme);
      applyTheme(newTheme);
    }}>
      <option value="light">Claro</option>
      <option value="dark">Escuro</option>
      <option value="highContrast">Alto Contraste</option>
      <option value="monochrome">Monocromático</option>
    </select>
  );
}
```

## ✅ Checklist para Novos Temas

Ao adicionar um novo tema:

1. ☐ Adicionar entrada em `colors.config.ts` com TODOS os 16+ campos
2. ☐ Garantir que cada cor tenha contraste WCAG AAA (7:1 mínimo)
3. ☐ Executar `npm run generate:colors`
4. ☐ Testar em navegador (reload completo, Ctrl+Shift+R)
5. ☐ Verificar em DevTools que as variáveis CSS foram aplicadas
6. ☐ Testar em componentes que usam cores dinâmicas

## 🔍 Debugging

### Verificar Variáveis CSS
Abra o DevTools do navegador:
1. Clique direito → Inspecionar
2. Vá para aba "Computed Styles"
3. Procure por `--primary`, `--secondary`, etc.
4. Confirme que os valores HSL aparecem

### Verificar Classe do Tema
```javascript
// No console do navegador
document.body.className // Deve mostrar 'dark', 'high-contrast', ou 'monochrome'
document.documentElement.className // Para 'dark' theme
```

### Revalidar Cores
```bash
npm run generate:colors
```
Se o arquivo gerado não se atualiza, limpe o cache:
```bash
rm -rf node_modules/.vite && npm run dev
```

## 📈 Vantagens do Sistema

✅ **DRY (Don't Repeat Yourself)**: Define cores uma única vez em `colors.config.ts`
✅ **Dinâmico**: Trocar temas sem recompilação
✅ **Acessível**: Suporte nativo para alto contraste
✅ **Type-Safe**: TypeScript garante que temas tenham todas as cores
✅ **Performance**: CSS variables são aplicadas via JavaScript, não impactam build
✅ **Maintenível**: Mudanças em um arquivo afetam toda a aplicação

## 🚀 Próximos Passos

- [ ] Adicionar persistência de tema (localStorage)
- [ ] Criar themes adicionais (sepia, inverted, etc.)
- [ ] Implementar geração automática de código de cores
- [ ] Adicionar modo automático baseado em `prefers-color-scheme`
