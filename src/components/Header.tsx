import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo-defesa-civil.png';
import { Button } from '@/components/ui/button';
import { useAccessibility } from './AccessibilityContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { speakText, settings } = useAccessibility();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, text: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    speakText(`Navegando para ${text}`);
  };

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || '');
  };

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#alerts', label: 'Alertas' },
    { href: '#plan', label: 'Plano Preventivo' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-medium' : 'bg-card/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 md:py-4 min-h-max">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0 min-w-0">
            <div className="w-10 h-10 rounded flex items-center justify-center" aria-hidden="true">
              <img src={logo} alt="Defesa Civil" className="h-10 w-10` object-contain" />
            </div>
            <span 
              className="font-heading font-semibold text-foreground cursor-pointer" 
              onClick={() => speakText('Defesa Civil São Carlos')}
              tabIndex={settings.ttsEnabled ? 0 : -1}
              role="heading"
              aria-level={1}
            >
              Defesa Civil São Carlos
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-2 lg:space-x-6 col-span-1" aria-label="Navegação principal">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href, item.label)}
                onFocus={handleFocus}
                className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-secondary rounded px-1 lg:px-2 py-1 text-accessible whitespace-nowrap"
                aria-label={`Navegar para ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Emergency Button */}
          <div className="flex items-center justify-end space-x-3 flex-shrink-0">
            <Button
              variant="destructive"
              className="emergency-pulse hidden sm:flex items-center gap-2"
              onFocus={handleFocus}
              onClick={() => {
                speakText('Discando emergência 199');
                window.open('tel:199', '_self');
              }}
              aria-label="Ligar para emergência 199"
            >
              <Phone className="h-icon w-icon" />
              <span className="font-semibold text-accessible">199</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onFocus={handleFocus}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <aside className="md:hidden border-t border-border animate-fade-in-up" aria-label="Menu mobile">
            <nav className="py-4 space-y-2" role="navigation" aria-label="Navegação mobile">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.label)}
                  onFocus={handleFocus}
                  className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded transition-colors font-medium text-accessible"
                  aria-label={`Navegar para ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="destructiveInverted"
                className="w-full mt-4 emergency-pulse"
                onFocus={handleFocus}
                onClick={() => {
                  speakText('Discando emergência 199');
                  window.open('tel:199', '_self');
                }}
                aria-label="Ligar para emergência 199"
              >
                <Phone className="h-icon w-icon mr-2" />
                Emergência 199
              </Button>
            </nav>
          </aside>
        )}
      </div>
    </header>
  );
};