import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import logo from "@/assets/logo-defesa-civil.png";
import { useAccessibility } from "./AccessibilityContext";
import heroImage from "@/assets/hero-sao-carlos.jpg";

export const HeroSection = () => {
  const { speakText } = useAccessibility();

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || "");
  };

  const handleEmergencyCall = () => {
    speakText("Discando emergência 199");
    window.open("tel:199", "_self");
  };

  const handleSMSAlert = () => {
    speakText("Redirecionando para cadastro de alertas SMS");
    document.querySelector("#alerts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 47, 86, 0.85), rgba(0, 47, 86, 0.75)), url('${heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      role="region"
      aria-label="Seção principal"
    >
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <article className="animate-fade-in-up">
          <div className="flex justify-center mb-6" aria-hidden="true">
            <img
              src={logo}
              alt="Defesa Civil"
              className="h-24 w-24 object-contain"
            />
          </div>

          <h1
            className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight"
            onFocus={handleFocus}
            tabIndex={0}
          >
            Defesa Civil de São Carlos
            <br />
            <span className="text-secondary">Prevenção e Cuidado</span> ao seu
            lado
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
            onFocus={handleFocus}
            tabIndex={0}
          >
            Monitoramento, alertas e ações preventivas para uma cidade mais
            segura e resiliente.
          </p>

          <nav
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            aria-label="Ações rápidas"
          >
            <Button
              size="lg"
              variant="destructiveInverted"
              className="emergency-pulse text-lg px-8 py-4 min-h-[56px] font-semibold"
              onClick={handleEmergencyCall}
              onFocus={handleFocus}
              aria-label="Ligar para emergência 199"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
              Emergência 199
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 min-h-[56px] font-semibold bg-secondary hover:bg-secondary/90 text-black"
              onClick={handleSMSAlert}
              onFocus={handleFocus}
              aria-label="Cadastrar para receber alertas SMS"
            >
              <MessageSquare className="h-5 w-5 mr-2" aria-hidden="true" />
              Receber Alertas SMS
            </Button>
          </nav>

          <div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6"
            role="list"
          >
            <article
              className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
              onFocus={handleFocus}
              tabIndex={0}
              role="listitem"
            >
              <h3 className="font-heading text-lg font-semibold mb-2">
                Monitoramento 24h
              </h3>
              <p className="text-primary-foreground/80">
                Equipes especializadas acompanham as condições climáticas e
                riscos em tempo real.
              </p>
            </article>

            <article
              className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
              onFocus={handleFocus}
              tabIndex={0}
              role="listitem"
            >
              <h3 className="font-heading text-lg font-semibold mb-2">
                Alertas Gratuitos
              </h3>
              <p className="text-primary-foreground/80">
                Receba notificações SMS gratuitas sobre situações de risco em
                sua região.
              </p>
            </article>

            <article
              className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
              onFocus={handleFocus}
              tabIndex={0}
              role="listitem"
            >
              <h3 className="font-heading text-lg font-semibold mb-2">
                Ação Preventiva
              </h3>
              <p className="text-primary-foreground/80">
                Planos e operações especiais para minimizar danos e proteger
                vidas.
              </p>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
};
