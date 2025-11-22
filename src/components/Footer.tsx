import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-defesa-civil.png";
import logoSanca from "@/assets/logo-sanca.png";
import { useAccessibility } from "./AccessibilityContext";

export const Footer = () => {
  const { speakText } = useAccessibility();
  const currentYear = new Date().getFullYear();

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || "");
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="Defesa Civil"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3
                    className="font-heading text-lg font-bold"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    Proteção e Defesa Civil
                  </h3>
                  <p
                    className="text-sm text-primary-foreground/80"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    São Carlos - SP
                  </p>
                </div>
              </div>
              <p
                className="text-primary-foreground/80 leading-relaxed"
                onFocus={handleFocus}
                tabIndex={0}
              >
                Protegendo vidas, bens e o meio ambiente através de ações
                coordenadas de prevenção, preparação e resposta a situações de
                risco e desastres.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-4">
              <h4
                className="font-heading text-lg font-semibold"
                onFocus={handleFocus}
                tabIndex={0}
              >
                Contato Rápido
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:199"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group min-h-[44px] p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  onFocus={handleFocus}
                  aria-label="Ligar para emergência 199"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>199 - Emergência</span>
                </a>
                <a
                  href="tel:16-3368-1222"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group min-h-[44px] p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  onFocus={handleFocus}
                  aria-label="Ligar para telefone fixo (16) 3368-1222"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>(16) 3368-1222</span>
                </a>
                <a
                  href="mailto:defesacivil@saocarlos.sp.gov.br"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group min-h-[44px] p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  onFocus={handleFocus}
                  aria-label="Enviar email para defesacivil@saocarlos.sp.gov.br"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>defesacivil@saocarlos.sp.gov.br</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h4
                className="font-heading text-lg font-semibold"
                onFocus={handleFocus}
                tabIndex={0}
              >
                Localização
              </h4>
              <a
                href="https://maps.google.com/?q=Rua+São+Joaquim,+958,+Centro,+São+Carlos,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group min-h-[44px] p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                onFocus={handleFocus}
                aria-label="Ver localização no mapa: Rua São Joaquim, 958, Centro, São Carlos - SP"
              >
                <MapPin className="h-4 w-4 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <p>Rua São Joaquim, 958</p>
                  <p>Centro, São Carlos - SP</p>
                </div>
              </a>

              <div
                className="bg-primary-foreground/10 rounded-lg p-3 mt-4"
                onFocus={handleFocus}
                tabIndex={0}
              >
                <h5 className="font-semibold text-sm mb-1">
                  Horário de Atendimento
                </h5>
                <p className="text-sm text-primary-foreground/80">
                  Segunda a sexta: 8h às 17h
                </p>
                <p className="text-sm text-primary-foreground/80">
                  Emergências: 24 horas (199)
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-secondary rounded flex items-center justify-center">
                  <img
                    src={logoSanca}
                    alt="Logo da Prefeitura Municipal de São Carlos"
                    className="h-10 w-10` object-contain"
                  />
                </div>
                <p
                  className="text-sm text-primary-foreground/80"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  Prefeitura Municipal de São Carlos
                </p>
              </div>

              <div className="text-center md:text-right">
                <p
                  className="text-sm text-primary-foreground/80"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  © {currentYear} Proteção e Defesa Civil de São Carlos. Todos os direitos
                  reservados.
                </p>
                <p
                  className="text-xs text-primary-foreground/60 mt-1"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  Sistema desenvolvido com acessibilidade em mente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
