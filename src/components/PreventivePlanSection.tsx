import { Cloud, Sun, Umbrella, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAccessibility } from './AccessibilityContext';

export const PreventivePlanSection = () => {
  const { speakText } = useAccessibility();

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || '');
  };

  const operations = [
    {
      icon: Cloud,
      title: 'Operação Verão',
      period: 'Dezembro a Março',
      description: 'Monitoramento intensivo durante o período chuvoso, com equipes em alerta 24h para atender ocorrências de alagamentos, deslizamentos e tempestades.',
      color: 'bg-blue-500',
      actions: [
        'Monitoramento meteorológico constante',
        'Equipes de plantão 24 horas',
        'Inspeções preventivas em áreas de risco',
        'Alertas antecipados à população'
      ]
    },
    {
      icon: Sun,
      title: 'Operação Estiagem',
      period: 'Maio a Setembro',
      description: 'Ações preventivas durante o período seco, focando no combate a queimadas, controle de qualidade do ar e gestão de recursos hídricos.',
      color: 'bg-orange-500',
      actions: [
        'Monitoramento de focos de calor',
        'Campanhas educativas sobre queimadas',
        'Fiscalização de áreas críticas',
        'Coordenação com Corpo de Bombeiros'
      ]
    }
  ];

  return (
    <section id="plan" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Plano Preventivo de Defesa Civil (PPDC)
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              onFocus={handleFocus}
              tabIndex={0}
            >
              O PPDC estabelece os procedimentos e ações de resposta emergencial durante períodos 
              críticos. O objetivo é minimizar danos e proteger vidas através de ações coordenadas 
              e preventivas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {operations.map((operation, index) => (
              <Card 
                key={index} 
                className={`animate-fade-in-up shadow-medium hover:shadow-strong transition-all duration-300 ${
                  index === 1 ? 'animate-slide-in-right' : ''
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`h-16 w-16 ${operation.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <operation.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle 
                    className="font-heading text-xl text-foreground"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    {operation.title}
                  </CardTitle>
                  <p 
                    className="text-sm text-muted-foreground font-medium"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    {operation.period}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p 
                    className="text-muted-foreground leading-relaxed"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    {operation.description}
                  </p>
                  
                  <div>
                    <h4 
                      className="font-semibold text-foreground mb-3"
                      onFocus={handleFocus}
                      tabIndex={0}
                    >
                      Principais Ações:
                    </h4>
                    <ul className="space-y-2">
                      {operation.actions.map((action, actionIndex) => (
                        <li 
                          key={actionIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          onFocus={handleFocus}
                          tabIndex={0}
                        >
                          <div className="h-1.5 w-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="animate-fade-in-up">
            <Card className="bg-accent/30 border-accent">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Umbrella className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="font-heading text-xl font-semibold text-foreground mb-4"
                      onFocus={handleFocus}
                      tabIndex={0}
                    >
                      Coordenação Integrada
                    </h3>
                    <p 
                      className="text-muted-foreground leading-relaxed mb-4"
                      onFocus={handleFocus}
                      tabIndex={0}
                    >
                      O PPDC é executado em coordenação com diversos órgãos municipais, estaduais 
                      e federais, incluindo Corpo de Bombeiros, Polícia Militar, SAAE, CPFL, e 
                      outros parceiros essenciais.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div 
                        className="bg-card rounded-lg p-4"
                        onFocus={handleFocus}
                        tabIndex={0}
                      >
                        <h4 className="font-semibold text-foreground mb-2">Parcerias Estratégicas</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Corpo de Bombeiros</li>
                          <li>• Polícia Militar</li>
                          <li>• SAAE São Carlos</li>
                          <li>• CPFL Energia</li>
                        </ul>
                      </div>
                      <div 
                        className="bg-card rounded-lg p-4"
                        onFocus={handleFocus}
                        tabIndex={0}
                      >
                        <h4 className="font-semibold text-foreground mb-2">Recursos Disponíveis</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Central de operações 24h</li>
                          <li>• Veículos especializados</li>
                          <li>• Equipamentos de socorro</li>
                          <li>• Equipe técnica qualificada</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};