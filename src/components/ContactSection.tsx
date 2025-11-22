import { Phone, MapPin, Mail, User, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAccessibility } from './AccessibilityContext';

export const ContactSection = () => {
  const { speakText } = useAccessibility();

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || '');
  };

  const handlePhoneCall = (number: string, description: string) => {
    speakText(`Discando para ${description}: ${number}`);
    window.open(`tel:${number}`, '_self');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergência',
      value: '199',
      description: 'Disponível 24 horas',
      action: () => handlePhoneCall('199', 'emergência'),
      variant: 'emergency' as const
    },
    {
      icon: Phone,
      title: 'Telefone Fixo',
      value: '(16) 3368-1222',
      description: 'Horário comercial',
      action: () => handlePhoneCall('16-3368-1222', 'telefone fixo'),
      variant: 'default' as const
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Rua São Joaquim, 958',
      description: 'Centro, São Carlos - SP',
      action: () => {
        speakText('Abrindo localização no mapa');
        window.open('https://maps.google.com/?q=Rua+São+Joaquim,+958,+Centro,+São+Carlos,+SP', '_blank');
      },
      variant: 'default' as const
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Nossa equipe está sempre pronta para atender você. Em situações de emergência,
              ligue imediatamente para 199.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className={`animate-fade-in-up shadow-medium hover:shadow-strong transition-all duration-300 cursor-pointer ${contact.variant === 'emergency' ? 'bg-destructive text-destructive-foreground' : ''
                  }`}
                onClick={contact.action}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    contact.action();
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${contact.title}: ${contact.value}`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${contact.variant === 'emergency'
                      ? 'bg-destructive-foreground text-destructive'
                      : 'bg-primary text-primary-foreground'
                    }`}>
                    <contact.icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`font-heading text-lg font-semibold mb-2 ${contact.variant === 'emergency' ? 'text-destructive-foreground' : 'text-foreground'
                      }`}
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    {contact.title}
                  </h3>
                  <p
                    className={`text-xl font-bold mb-1 ${contact.variant === 'emergency' ? 'text-destructive-foreground' : 'text-foreground'
                      }`}
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    {contact.value}
                  </p>
                  <p
                    className={`text-sm ${contact.variant === 'emergency' ? 'text-destructive-foreground/80' : 'text-muted-foreground'
                      }`}
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Information */}
          <div className="animate-fade-in-up">
            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle
                  className="font-heading text-xl text-foreground"
                  onFocus={handleFocus}
                  tabIndex={0}
                >
                  Nossa Equipe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3
                    className="font-heading text-lg font-semibold text-foreground mb-2"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    Diretor: Pedro Caballero
                  </h3>
                  <p
                    className="text-muted-foreground mb-6"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    Responsável pela coordenação geral das ações de Proteção e Defesa Civil em São Carlos
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className="bg-muted rounded-lg p-4"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Horário de Atendimento
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><strong>Emergências:</strong> 24 horas (199)</li>
                      <li><strong>Atendimento geral:</strong> 8h às 17h</li>
                      <li><strong>Segunda a sexta-feira</strong></li>
                    </ul>
                  </div>

                  <div
                    className="bg-muted rounded-lg p-4"
                    onFocus={handleFocus}
                    tabIndex={0}
                  >
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Outros Contatos
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><strong>WhatsApp:</strong> (16) 99999-9999</li>
                      <li><strong>Email:</strong> defesacivil@saocarlos.sp.gov.br</li>
                      <li><strong>Site:</strong> www.saocarlos.sp.gov.br</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    variant="destructive"
                    size="lg"
                    className="emergency-pulse text-lg px-8 py-4 min-h-[56px] font-semibold"
                    onClick={() => handlePhoneCall('199', 'emergência')}
                    onFocus={handleFocus}
                    aria-label="Ligar para emergência 199"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Emergência 199
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