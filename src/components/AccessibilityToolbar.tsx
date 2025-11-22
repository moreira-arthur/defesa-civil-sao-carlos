import { useState } from "react";
import {
  Accessibility,
  Type,
  Volume2,
  Minus,
  Plus,
  Palette,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAccessibility } from "./AccessibilityContext";

export const AccessibilityToolbar = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings, resetSettings, speakText } = useAccessibility();

  const fontSizes = ["small", "medium", "large", "xl", "2xl"] as const;
  const lineHeights = ["tight", "normal", "relaxed", "loose"] as const;
  const themes = [
    { key: "light" as const, label: "Padrão" },
    { key: "dark" as const, label: "Escuro" },
    { key: "highContrast" as const, label: "Alto Contraste" },
    { key: "monochrome" as const, label: "Monocromático" },
  ];

  const increaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(settings.fontSize);
    if (currentIndex < fontSizes.length - 1) {
      updateSettings({ fontSize: fontSizes[currentIndex + 1] });
      speakText("Fonte aumentada");
    }
  };

  const decreaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(settings.fontSize);
    if (currentIndex > 0) {
      updateSettings({ fontSize: fontSizes[currentIndex - 1] });
      speakText("Fonte diminuída");
    }
  };

  const increaseLineHeight = () => {
    const currentIndex = lineHeights.indexOf(settings.lineHeight);
    if (currentIndex < lineHeights.length - 1) {
      updateSettings({ lineHeight: lineHeights[currentIndex + 1] });
      speakText("Espaçamento aumentado");
    }
  };

  const decreaseLineHeight = () => {
    const currentIndex = lineHeights.indexOf(settings.lineHeight);
    if (currentIndex > 0) {
      updateSettings({ lineHeight: lineHeights[currentIndex - 1] });
      speakText("Espaçamento diminuído");
    }
  };

  return (
    <div className={`relative z-50 ${className}`}>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
          speakText(isOpen ? "Menu de acessibilidade fechado" : "Menu de acessibilidade aberto");
        }}
        onFocus={() => speakText("Botão de acessibilidade. Pressione Enter para abrir o menu de opções.")}
        className="h-10 w-10 rounded-full bg-secondary hover:bg-secondary/90 shadow-sm flex items-center justify-center"
        size="icon"
        aria-label="Abrir ferramentas de acessibilidade"
        aria-expanded={isOpen}
      >
        <Accessibility className="h-5 w-5 text-secondary-foreground" />
      </Button>

      {isOpen && (
        <Card className="absolute top-full right-0 mt-2 p-4 w-80 max-w-[calc(100vw-2rem)] animate-fade-in-down shadow-xl border-border bg-card z-50">
          <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
            <h3
              className="font-heading text-lg font-semibold text-foreground"
              tabIndex={0}
              onFocus={() => speakText("Menu de Acessibilidade")}
            >
              Acessibilidade
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                resetSettings();
                speakText("Configurações restauradas para o padrão");
              }}
              onFocus={() => speakText("Restaurar configurações padrão")}
              className="text-muted-foreground hover:text-foreground flex-shrink-0 whitespace-nowrap"
              aria-label="Restaurar configurações padrão"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Restaurar
            </Button>
          </div>

          {/* Font Size Controls */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-foreground"
              tabIndex={0}
              onFocus={() => speakText("Controles de Tamanho da Fonte")}
            >
              Tamanho da Fonte
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseFontSize}
                onFocus={() => speakText("Diminuir tamanho da fonte")}
                disabled={settings.fontSize === "small"}
                aria-label="Diminuir tamanho da fonte"
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Diminuir</span>
              </Button>
              <span
                className="text-sm text-muted-foreground min-w-16 text-center"
                tabIndex={0}
                onFocus={() => speakText(`Tamanho atual: ${settings.fontSize}`)}
              >
                {settings.fontSize}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                onFocus={() => speakText("Aumentar tamanho da fonte")}
                disabled={settings.fontSize === "2xl"}
                aria-label="Aumentar tamanho da fonte"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Aumentar</span>
              </Button>
            </div>
          </div>

          {/* Line Height Controls */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-foreground"
              tabIndex={0}
              onFocus={() => speakText("Controles de Espaçamento entre Linhas")}
            >
              Espaçamento entre Linhas
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseLineHeight}
                onFocus={() => speakText("Diminuir espaçamento entre linhas")}
                disabled={settings.lineHeight === "tight"}
                aria-label="Diminuir espaçamento"
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Diminuir</span>
              </Button>
              <span
                className="text-sm text-muted-foreground min-w-20 text-center"
                tabIndex={0}
                onFocus={() => speakText(`Espaçamento atual: ${settings.lineHeight}`)}
              >
                {settings.lineHeight}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseLineHeight}
                onFocus={() => speakText("Aumentar espaçamento entre linhas")}
                disabled={settings.lineHeight === "loose"}
                aria-label="Aumentar espaçamento"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Aumentar</span>
              </Button>
            </div>
          </div>

          {/* Theme Selection */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-foreground"
              tabIndex={0}
              onFocus={() => speakText("Seleção de Temas")}
            >
              <Palette className="inline h-4 w-4 mr-1" />
              Temas
            </label>
            <div className="space-y-1">
              {themes.map((theme) => (
                <Button
                  key={theme.key}
                  variant={settings.theme === theme.key ? "default" : "outline"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    updateSettings({ theme: theme.key });
                    speakText(`Tema ${theme.label} ativado`);
                  }}
                  onFocus={() => speakText(`Mudar para tema ${theme.label}`)}
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
              onClick={() => {
                const newValue = !settings.dyslexiaFriendly;
                updateSettings({ dyslexiaFriendly: newValue });
                speakText(newValue ? "Fonte para dislexia ativada" : "Fonte para dislexia desativada");
              }}
              onFocus={() => speakText("Alternar fonte amigável para dislexia")}
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
              onClick={() => {
                const newValue = !settings.ttsEnabled;
                updateSettings({ ttsEnabled: newValue });
                speakText(newValue ? "Leitura em voz alta ativada" : "Leitura em voz alta desativada");
              }}
              onFocus={() => speakText("Alternar leitura em voz alta")}
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Leitura em Voz Alta
            </Button>
          </div>

          {settings.ttsEnabled && (
            <p
              className="text-xs text-muted-foreground mt-2"
              tabIndex={0}
              onFocus={() => speakText("Dica: Selecione qualquer texto para ouvir ou navegue com Tab para escutar o conteúdo focado.")}
            >
              Selecione qualquer texto para ouvir ou navegue com Tab para
              escutar o conteúdo focado.
            </p>
          )}
        </Card>
      )}
    </div>
  );
};
