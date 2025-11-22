import { Calendar, AlertTriangle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAccessibility } from './AccessibilityContext';

const historicalEvents = [
  {
    date: '12 de Janeiro de 2023',
    title: 'Alagamento na Rotatória do Cristo',
    description: 'Forte chuva de 138mm em 40 minutos causou transbordamento do Córrego do Gregório. Diversos veículos foram arrastados e o comércio local foi afetado.',
    impact: 'Alto',
    measures: 'Obras de contenção e limpeza das galerias foram intensificadas após o evento.'
  },
  {
    date: '28 de Dezembro de 2022',
    title: 'Enchente na Baixada do Mercado',
    description: 'Precipitação intensa provocou alagamentos na região central, atingindo lojas e interrompendo o trânsito na Av. Comendador Alfredo Maffei.',
    impact: 'Médio',
    measures: 'Instalação de novas grades de proteção e sistema de alerta sonoro.'
  },
  {
    date: '04 de Novembro de 2020',
    title: 'Tempestade Severa',
    description: 'Ventos fortes e granizo acompanharam chuva torrencial, causando queda de árvores e destelhamento de casas em diversos bairros.',
    impact: 'Alto',
    measures: 'Reflorestamento planejado e reforço na poda preventiva de árvores.'
  },
  {
    date: '15 de Março de 2018',
    title: 'Inundação no CDHU',
    description: 'Chuvas contínuas por 3 dias saturaram o solo, causando deslizamentos pontuais e alagamentos em áreas residenciais.',
    impact: 'Médio',
    measures: 'Construção de muros de arrimo e melhoria na drenagem pluvial.'
  }
];

export const HistoricalFloods = () => {
  const { speakText } = useAccessibility();

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || '');
  };

  return (
    <section id="history" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Histórico de Ocorrências
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Registro dos principais eventos climáticos e enchentes que marcaram a história recente
              de São Carlos, servindo de base para estudos e melhorias na infraestrutura.
            </p>
          </div>

          <div className="animate-fade-in-up">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {historicalEvents.map((event, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg bg-card px-4"
                >
                  <AccordionTrigger
                    className="hover:no-underline py-4"
                    onClick={() => speakText(`Expandindo detalhes sobre ${event.title}`)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-left w-full">
                      <div className="flex items-center gap-2 text-muted-foreground min-w-[180px]">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <AlertTriangle className={`h-5 w-5 ${event.impact === 'Alto' ? 'text-destructive' : 'text-warning'
                          }`} />
                        <span className="font-semibold text-foreground text-lg">{event.title}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="pl-0 md:pl-[200px] space-y-4">
                      <p
                        className="text-foreground/90 leading-relaxed"
                        onFocus={handleFocus}
                        tabIndex={0}
                      >
                        {event.description}
                      </p>

                      <div className="bg-muted/50 rounded-md p-4 flex gap-3 items-start">
                        <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground block mb-1">Medidas Adotadas:</span>
                          <span className="text-sm text-muted-foreground">{event.measures}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
