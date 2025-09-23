import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { AlertsSection } from '@/components/AlertsSection';
import { PreventivePlanSection } from '@/components/PreventivePlanSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { AccessibilityToolbar } from '@/components/AccessibilityToolbar';
import { useAccessibility } from '@/components/AccessibilityContext';

const Index = () => {
  const { settings, speakText } = useAccessibility();

  useEffect(() => {
    // Handle text selection for TTS
    const handleMouseUp = () => {
      if (settings.ttsEnabled) {
        const selection = window.getSelection();
        if (selection && selection.toString().trim().length > 0) {
          speakText(selection.toString());
        }
      }
    };

    // Handle keyboard navigation TTS
    const handleKeyDown = (e: KeyboardEvent) => {
      if (settings.ttsEnabled && e.key === 'Tab') {
        setTimeout(() => {
          const activeElement = document.activeElement;
          if (activeElement && activeElement.textContent) {
            const text = activeElement.textContent.trim();
            if (text.length > 0) {
              speakText(text);
            }
          }
        }, 100);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [settings.ttsEnabled, speakText]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main" role="main">
        <HeroSection />
        <AboutSection />
        <AlertsSection />
        <PreventivePlanSection />
        <ContactSection />
      </main>
      <Footer />
      <AccessibilityToolbar />
    </div>
  );
};

export default Index;