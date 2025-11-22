import { MessageSquare, Map, Phone, AlertCircle, Maximize2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useAccessibility } from './AccessibilityContext';
import riskMapImage from '@/assets/Localizacao-Enchentes-IPT-2015-724x1024.jpeg';

export const AlertsSection = () => {
  const { speakText } = useAccessibility();

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || '');
  };

  const handleSMSRegister = () => {
    speakText('Para se cadastrar, envie um SMS com seu CEP para o número 40199');
    // You could implement actual SMS functionality here
  };

  return (
    <section id="alerts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Mantenha-se Informado e Seguro
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Receba alertas em tempo real e consulte nosso mapa de riscos para se manter
              sempre preparado para situações de emergência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SMS Alerts Card */}
            <Card className="animate-fade-in-up shadow-medium hover:shadow-strong transition-shadow duration-300 flex flex-col">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle
                  className="font-heading text-xl text-foreground"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  Alertas por SMS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow flex flex-col justify-between">
                <div
                  className="bg-accent/30 rounded-lg p-6 text-center"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Como se cadastrar:
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Envie um SMS com o seu <strong>CEP</strong> para o número:
                  </p>
                  <div className="text-3xl font-bold text-secondary mb-4">40199</div>
                  <p className="text-sm text-muted-foreground">
                    Serviço gratuito • Cancelamento a qualquer momento
                  </p>
                </div>

                <Button
                  className="w-full min-h-[48px] text-lg"
                  onClick={handleSMSRegister}
                  onFocus={handleFocus}
                  aria-label="Instruções para cadastro de SMS"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Cadastrar Alertas SMS
                </Button>

                <div
                  className="text-sm text-muted-foreground space-y-2"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  <p><strong>Você receberá alertas sobre:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Chuvas intensas e alagamentos</li>
                    <li>Deslizamentos de terra</li>
                    <li>Ventos fortes</li>
                    <li>Outras situações de risco</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Risk Map Card */}
            <Card className="animate-slide-in-right shadow-medium hover:shadow-strong transition-shadow duration-300 flex flex-col">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle
                  className="font-heading text-xl text-foreground"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  Mapa de Riscos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <p
                  className="text-muted-foreground leading-relaxed"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  Monitoramos continuamente as áreas de risco em São Carlos. Nossas equipes
                  estão preparadas para atuar preventivamente em situações de enchentes,
                  deslizamentos e outros eventos adversos.
                </p>

                {/* Risk Map Image with Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="w-full p-0 border-0 bg-transparent text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-lg overflow-hidden relative group cursor-pointer h-64 block"
                      onFocus={handleFocus}
                      aria-label="Ampliar mapa de riscos"
                    >
                      <img
                        src={riskMapImage}
                        alt="Miniatura do mapa de riscos"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-background/90 text-foreground px-4 py-2 rounded-full flex items-center gap-2 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Maximize2 className="h-4 w-4" />
                          Clique para ampliar
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-white font-medium text-sm truncate">Áreas de Risco (Fonte: IPT 2015)</p>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="font-heading text-xl font-bold" tabIndex={0} onFocus={handleFocus}>
                      Áreas de Risco de Enchentes e Inundações
                    </DialogTitle>
                    <DialogDescription tabIndex={0} onFocus={handleFocus}>
                      Fonte: IPT 2015 - Mapeamento de áreas de risco na malha urbana de São Carlos.
                    </DialogDescription>
                    <div className="mt-4 space-y-4">
                      <img
                        src={riskMapImage}
                        alt="Mapa detalhado de localização de enchentes e inundações em São Carlos (IPT 2015). O mapa destaca pontos críticos na malha urbana, identificando áreas de risco ao longo dos principais córregos da cidade."
                        className="w-full h-auto rounded-md"
                      />
                      <div className="bg-muted p-4 rounded-lg text-sm space-y-2" tabIndex={0} onFocus={handleFocus}>
                        <h4 className="font-bold text-foreground">Detalhamento do Mapa:</h4>
                        <p>O mapa apresenta a malha urbana de São Carlos com destaque para:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li><strong>Hidrografia:</strong> Linhas azuis indicando os córregos (Gregório, Monjolinho, etc.).</li>
                          <li><strong>Áreas de Risco:</strong> Pontos numerados e áreas sombreadas em roxo indicando locais propensos a alagamentos e inundações.</li>
                          <li><strong>Pontos Críticos:</strong> Locais históricos de ocorrências, como a região do Mercado Municipal e a Rotatória do Cristo.</li>
                        </ul>
                        <p className="mt-2 text-xs text-muted-foreground">
                          Para fechar esta visualização, pressione ESC ou clique fora da janela.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div
                  className="bg-accent/30 rounded-lg p-4 border-l-4 border-primary"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Monitoramento Ativo
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Nossas equipes realizam vistorias regulares nas áreas de maior risco,
                        especialmente durante períodos críticos como o verão chuvoso.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contact Strip */}
          <div className="mt-12 animate-fade-in-up">
            <Card className="bg-destructive text-destructive-foreground shadow-strong">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h3
                      className="font-heading text-xl font-bold mb-2"
                      onFocus={handleFocus}
                      tabIndex={0}
                    >
                      Em caso de emergência
                    </h3>
                    <p
                      className="opacity-90"
                      onFocus={handleFocus}
                      tabIndex={0}
                    >
                      Ligue imediatamente para a Proteção e Defesa Civil
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="min-h-[56px] text-lg font-bold px-8 bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90"
                    onClick={() => {
                      speakText('Discando emergência 199');
                      window.open('tel:199', '_self');
                    }}
                    onFocus={handleFocus}
                    aria-label="Ligar para emergência 199"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    199
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};