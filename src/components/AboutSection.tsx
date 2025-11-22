import { Shield, Users, AlertTriangle, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useAccessibility } from './AccessibilityContext';

export const AboutSection = () => {
  const { speakText } = useAccessibility();

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || '');
  };

  const principles = [
    {
      icon: Shield,
      title: 'Prevenção',
      description: 'Identificar e minimizar riscos antes que se tornem emergências.'
    },
    {
      icon: AlertTriangle,
      title: 'Mitigação',
      description: 'Reduzir o impacto de desastres através de ações preventivas.'
    },
    {
      icon: Users,
      title: 'Preparação',
      description: 'Capacitar a população e treinar equipes para situações de emergência.'
    },
    {
      icon: Heart,
      title: 'Resposta',
      description: 'Atuar rapidamente durante emergências para proteger vidas e bens.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
              onFocus={handleFocus}
              tabIndex={0}
            >
              O que é a Proteção e Defesa Civil?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <p
                className="text-lg text-foreground leading-relaxed mb-6"
                onFocus={handleFocus}
                tabIndex={0}
              >
                A Proteção e Defesa Civil é um conjunto de ações preventivas, de socorro, assistenciais e
                recuperativas destinadas a evitar ou minimizar desastres, preservar o moral da
                população e restabelecer a normalidade social.
              </p>
              <p
                className="text-lg text-foreground leading-relaxed"
                onFocus={handleFocus}
                tabIndex={0}
              >
                Operamos baseados nos princípios de <strong>prevenção, mitigação, preparação,
                  resposta e recuperação</strong>, garantindo a segurança de todos os cidadãos de
                São Carlos.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-card rounded-xl p-8 shadow-medium">
                <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3
                  className="font-heading text-xl font-semibold text-center text-foreground mb-4"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  Nossa Missão
                </h3>
                <p
                  className="text-muted-foreground text-center leading-relaxed"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  Proteger vidas, bens e o meio ambiente através de ações coordenadas de
                  prevenção, preparação e resposta a situações de risco e desastres.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <h3
              className="font-heading text-2xl font-semibold text-center text-foreground mb-8"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Nossos Princípios de Atuação
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 bg-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <principle.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h4
                      className="font-heading text-lg font-semibold text-foreground mb-3"
                      onFocus={handleFocus}
                      tabIndex={0}
                    >
                      {principle.title}
                    </h4>
                    <p
                      className="text-muted-foreground text-sm leading-relaxed"
                      onFocus={handleFocus}
                      tabIndex={0}
                    >
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};