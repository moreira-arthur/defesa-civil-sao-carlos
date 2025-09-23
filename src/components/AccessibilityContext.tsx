import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'xl' | '2xl';
  lineHeight: 'tight' | 'normal' | 'relaxed' | 'loose';
  theme: 'default' | 'high-contrast' | 'monochrome';
  dyslexiaFriendly: boolean;
  ttsEnabled: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  speakText: (text: string) => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'medium',
  lineHeight: 'normal',
  theme: 'default',
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

  const speakText = (text: string) => {
    if (settings.ttsEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Apply theme class to document body
  useEffect(() => {
    const body = document.body;
    body.classList.remove('high-contrast', 'monochrome');
    
    if (settings.theme !== 'default') {
      body.classList.add(settings.theme);
    }
    
    // Apply font size
    body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xl', 'font-size-2xl');
    body.classList.add(`font-size-${settings.fontSize}`);
    
    // Apply line height
    body.classList.remove('line-height-tight', 'line-height-normal', 'line-height-relaxed', 'line-height-loose');
    body.classList.add(`line-height-${settings.lineHeight}`);
    
    // Apply dyslexia-friendly font
    if (settings.dyslexiaFriendly) {
      body.classList.add('dyslexia-friendly');
    } else {
      body.classList.remove('dyslexia-friendly');
    }
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings, speakText }}>
      {children}
    </AccessibilityContext.Provider>
  );
};