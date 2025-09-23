import { Button } from '@/components/ui/button';
import { Phone, Shield, MessageSquare } from 'lucide-react';
import { useAccessibility } from './AccessibilityContext';
import heroImage from '@/assets/hero-sao-carlos.jpg';

export const HeroSection = () => {
  const { speakText } = useAccessibility();

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || '');
  };

  const handleEmergencyCall = () => {
    speakText('Discando emergência 199');
    window.open('tel:199', '_self');
  };

  const handleSMSAlert = () => {
    speakText('Redirecionando para cadastro de alertas SMS');
    document.querySelector('#alerts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 47, 86, 0.85), rgba(0, 47, 86, 0.75)), url('${heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-secondary rounded-full flex items-center justify-center animate-pulse">
              <Shield className="h-10 w-10 text-secondary-foreground" aria-hidden="true" />
            </div>
          </div>
          
          <h1 
            className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight"
            onFocus={handleFocus}
            tabIndex={0}
          >
            São Carlos Civil Defense:
            <br />
            <span className="text-secondary">Prevenção e Cuidado</span> ao seu lado
          </h1>
          
          <p 
            className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
            onFocus={handleFocus}
            tabIndex={0}
          >
            Monitoramento, alertas e ações preventivas para uma cidade mais segura e resiliente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="destructive"
              className="emergency-pulse text-lg px-8 py-4 min-h-[56px] font-semibold"
              onClick={handleEmergencyCall}
              onFocus={handleFocus}
              aria-label="Ligar para emergência 199"
            >
              <Phone className="h-5 w-5 mr-2" />
              Emergência 199
            </Button>
            
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 min-h-[56px] font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={handleSMSAlert}
              onFocus={handleFocus}
              aria-label="Cadastrar para receber alertas SMS"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Receber Alertas SMS
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div 
              className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
              onFocus={handleFocus}
              tabIndex={0}
            >
              <h3 className="font-heading text-lg font-semibold mb-2">Monitoramento 24h</h3>
              <p className="text-primary-foreground/80">
                Equipes especializadas acompanham as condições climáticas e riscos em tempo real.
              </p>
            </div>
            
            <div 
              className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
              onFocus={handleFocus}
              tabIndex={0}
            >
              <h3 className="font-heading text-lg font-semibold mb-2">Alertas Gratuitos</h3>
              <p className="text-primary-foreground/80">
                Receba notificações SMS gratuitas sobre situações de risco em sua região.
              </p>
            </div>
            
            <div 
              className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
              onFocus={handleFocus}
              tabIndex={0}
            >
              <h3 className="font-heading text-lg font-semibold mb-2">Ação Preventiva</h3>
              <p className="text-primary-foreground/80">
                Planos e operações especiais para minimizar danos e proteger vidas.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-8 w-px bg-primary-foreground/50"></div>
      </div>
    </section>
  );
};