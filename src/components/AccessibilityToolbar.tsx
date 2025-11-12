import { useState } from "react";
import {
  Accessibility,
  Type,
  Volume2,
  Minus,
  Plus,
  Palette,
  RotateCcw,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAccessibility } from "./AccessibilityContext";

export const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings, resetSettings } = useAccessibility();

  const fontSizes = ["small", "medium", "large", "xl", "2xl"] as const;
  const lineHeights = ["tight", "normal", "relaxed", "loose"] as const;
  const themes = [
    { key: "light" as const, label: "Padrão" },
    { key: "highContrast" as const, label: "Alto Contraste" },
    { key: "monochrome" as const, label: "Monocromático" },
  ];

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
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-2 h-12 w-12 rounded-full bg-secondary hover:bg-primary/90 shadow-strong"
          size="icon"
          aria-label="Abrir ferramentas de acessibilidade"
        >
          <Accessibility className="h-6 w-6 text-black" />
        </Button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Opções de Acessibilidade
        </div>
      </div>

      {isOpen && (
        <Card className="accessibility-toolbar p-4 w-80 max-w-[calc(100vw-2rem)] animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Acessibilidade
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetSettings}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Restaurar configurações padrão"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Restaurar
            </Button>
          </div>

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
                disabled={settings.fontSize === "small"}
                aria-label="Diminuir fonte"
              >
                <Minus className="h-4 w-4" />A
              </Button>
              <span className="text-sm text-muted-foreground min-w-16 text-center">
                {settings.fontSize}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                disabled={settings.fontSize === "2xl"}
                aria-label="Aumentar fonte"
              >
                <Plus className="h-4 w-4" />A
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
                disabled={settings.lineHeight === "tight"}
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
                disabled={settings.lineHeight === "loose"}
                aria-label="Aumentar espaçamento"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="mb-4">
            <Button
              variant={settings.theme === "dark" ? "default" : "outline"}
              size="sm"
              className="w-full justify-start"
              onClick={() =>
                updateSettings({
                  theme: settings.theme === "dark" ? "light" : "dark",
                })
              }
            >
              <Moon className="h-4 w-4 mr-2" />
              Tema Escuro
            </Button>
          </div>

          {/* Theme Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-foreground">
              <Palette className="inline h-4 w-4 mr-1" />
              Outros Temas
            </label>
            <div className="space-y-1">
              {themes.map((theme) => (
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
              onClick={() =>
                updateSettings({ dyslexiaFriendly: !settings.dyslexiaFriendly })
              }
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
              onClick={() =>
                updateSettings({ ttsEnabled: !settings.ttsEnabled })
              }
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Leitura em Voz Alta
            </Button>
          </div>

          {settings.ttsEnabled && (
            <p className="text-xs text-muted-foreground mt-2">
              Selecione qualquer texto para ouvir ou navegue com Tab para
              escutar o conteúdo focado.
            </p>
          )}
        </Card>
      )}
    </div>
  );
};
