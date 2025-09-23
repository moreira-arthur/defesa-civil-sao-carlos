import { useState } from 'react';
import { Settings, Type, Eye, Volume2, Minus, Plus, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAccessibility } from './AccessibilityContext';

export const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings } = useAccessibility();

  const fontSizes = ['small', 'medium', 'large', 'xl', '2xl'] as const;
  const lineHeights = ['tight', 'normal', 'relaxed', 'loose'] as const;
  const themes = [
    { key: 'default', label: 'Padrão' },
    { key: 'high-contrast', label: 'Alto Contraste' },
    { key: 'monochrome', label: 'Monocromático' },
  ] as const;

  const increaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(settings.fontSize);
    if (currentIndex < fontSizes.length - 1) {
      updateSettings({ fontSize: fontSizes[currentIndex + 1] });
    }
  };

  const decreaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(settings.fontSize);
    if (currentIndex > 0) {
      updateSettings({ fontSize: fontSizes[currentIndex - 1] });
    }
  };

  const increaseLineHeight = () => {
    const currentIndex = lineHeights.indexOf(settings.lineHeight);
    if (currentIndex < lineHeights.length - 1) {
      updateSettings({ lineHeight: lineHeights[currentIndex + 1] });
    }
  };

  const decreaseLineHeight = () => {
    const currentIndex = lineHeights.indexOf(settings.lineHeight);
    if (currentIndex > 0) {
      updateSettings({ lineHeight: lineHeights[currentIndex - 1] });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-strong"
        size="icon"
        aria-label="Abrir ferramentas de acessibilidade"
      >
        <Settings className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card className="accessibility-toolbar p-4 w-80 animate-fade-in-up">
          <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">
            Acessibilidade
          </h3>
          
          {/* Font Size Controls */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-foreground">
              Tamanho da Fonte
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseFontSize}
                disabled={settings.fontSize === 'small'}
                aria-label="Diminuir fonte"
              >
                <Minus className="h-4 w-4" />
                A
              </Button>
              <span className="text-sm text-muted-foreground min-w-16 text-center">
                {settings.fontSize}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                disabled={settings.fontSize === '2xl'}
                aria-label="Aumentar fonte"
              >
                <Plus className="h-4 w-4" />
                A
              </Button>
            </div>
          </div>

          {/* Line Height Controls */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-foreground">
              Espaçamento entre Linhas
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseLineHeight}
                disabled={settings.lineHeight === 'tight'}
                aria-label="Diminuir espaçamento"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground min-w-20 text-center">
                {settings.lineHeight}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseLineHeight}
                disabled={settings.lineHeight === 'loose'}
                aria-label="Aumentar espaçamento"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Theme Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-foreground">
              <Palette className="inline h-4 w-4 mr-1" />
              Tema
            </label>
            <div className="space-y-1">
              {themes.map(theme => (
                <Button
                  key={theme.key}
                  variant={settings.theme === theme.key ? "default" : "outline"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => updateSettings({ theme: theme.key })}
                >
                  {theme.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Dyslexia-Friendly Font */}
          <div className="mb-4">
            <Button
              variant={settings.dyslexiaFriendly ? "default" : "outline"}
              size="sm"
              className="w-full justify-start"
              onClick={() => updateSettings({ dyslexiaFriendly: !settings.dyslexiaFriendly })}
            >
              <Type className="h-4 w-4 mr-2" />
              Fonte para Dislexia
            </Button>
          </div>

          {/* Text-to-Speech Toggle */}
          <div className="mb-4">
            <Button
              variant={settings.ttsEnabled ? "default" : "outline"}
              size="sm"
              className="w-full justify-start"
              onClick={() => updateSettings({ ttsEnabled: !settings.ttsEnabled })}
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Leitura em Voz Alta
            </Button>
          </div>

          {settings.ttsEnabled && (
            <p className="text-xs text-muted-foreground mt-2">
              Selecione qualquer texto para ouvir ou navegue com Tab para escutar o conteúdo focado.
            </p>
          )}
        </Card>
      )}
    </div>
  );
};