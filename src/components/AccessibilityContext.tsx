import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { typography } from '@/config/design';
import { applyTheme, applyFontSizeMultiplier, applyLineHeight } from '@/utils/theme.utils';
import type { ColorTheme } from '@/config/design';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'xl' | '2xl';
  lineHeight: 'tight' | 'normal' | 'relaxed' | 'loose';
  theme: ColorTheme;
  dyslexiaFriendly: boolean;
  ttsEnabled: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
  speakText: (text: string) => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'medium',
  lineHeight: 'normal',
  theme: 'light',
  dyslexiaFriendly: false,
  ttsEnabled: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const speakText = (text: string) => {
    if (settings.ttsEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Apply accessibility settings
  useEffect(() => {
    const body = document.body;
    
    // Apply theme
    applyTheme(settings.theme);
    
    // Apply font size multiplier
    const fontSizeMultiplier = typography.fontSizeMultipliers[settings.fontSize];
    applyFontSizeMultiplier(fontSizeMultiplier);
    
    // Apply line height
    const lineHeightValue = typography.lineHeight[settings.lineHeight];
    applyLineHeight(lineHeightValue);
    
    // Apply dyslexia-friendly font
    if (settings.dyslexiaFriendly) {
      body.classList.add('dyslexia-friendly');
    } else {
      body.classList.remove('dyslexia-friendly');
    }
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings, resetSettings, speakText }}>
      {children}
    </AccessibilityContext.Provider>
  );
};