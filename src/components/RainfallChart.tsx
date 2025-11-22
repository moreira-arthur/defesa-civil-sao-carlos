import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, ComposedChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAccessibility } from './AccessibilityContext';

// Mock data for daily rainfall (last 30 days)
const dailyData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  const rainfall = Math.random() * 50; // Random rainfall between 0 and 50mm
  const hasOccurrence = rainfall > 40; // Simulate occurrence if rainfall > 40mm

  return {
    date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
    rainfall: Math.round(rainfall),
    occurrence: hasOccurrence ? 'Alagamento em pontos baixos' : null
  };
});

// Mock data for monthly rainfall (last 12 months)
const monthlyData = [
  { month: 'Jan', rainfall: 280, occurrences: 3 },
  { month: 'Fev', rainfall: 240, occurrences: 2 },
  { month: 'Mar', rainfall: 180, occurrences: 1 },
  { month: 'Abr', rainfall: 90, occurrences: 0 },
  { month: 'Mai', rainfall: 60, occurrences: 0 },
  { month: 'Jun', rainfall: 40, occurrences: 0 },
  { month: 'Jul', rainfall: 30, occurrences: 0 },
  { month: 'Ago', rainfall: 35, occurrences: 0 },
  { month: 'Set', rainfall: 80, occurrences: 1 },
  { month: 'Out', rainfall: 140, occurrences: 1 },
  { month: 'Nov', rainfall: 190, occurrences: 2 },
  { month: 'Dez', rainfall: 260, occurrences: 3 },
];

// Mock data for yearly rainfall
const yearlyData = [
  { year: '2020', rainfall: 1450, occurrences: 12 },
  { year: '2021', rainfall: 1320, occurrences: 8 },
  { year: '2022', rainfall: 1680, occurrences: 15 },
  { year: '2023', rainfall: 1550, occurrences: 10 },
  { year: '2024', rainfall: 1200, occurrences: 5 }, // Partial year
];

export const RainfallChart = () => {
  const { speakText } = useAccessibility();
  const [activeTab, setActiveTab] = useState('daily');

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    speakText(e.currentTarget.textContent || '');
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card p-3 border border-border rounded shadow-lg z-50">
          <p className="font-bold text-foreground">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.name.includes('Chuva') ? 'mm' : ''}
            </p>
          ))}
          {data.occurrence && (
            <p className="text-destructive font-semibold mt-1">⚠️ {data.occurrence}</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="rainfall" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <h2
              className="font-heading text-3xl font-bold text-foreground mb-4"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Monitoramento Pluviométrico
            </h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto"
              onFocus={handleFocus}
              tabIndex={0}
            >
              Acompanhe os índices de chuva e ocorrências registradas em São Carlos.
              Dados atualizados da estação meteorológica da Proteção e Defesa Civil.
            </p>
          </div>

          <Card className="shadow-medium animate-fade-in-up bg-card">
            <CardHeader>
              <CardTitle className="sr-only">Gráficos de Pluviometria</CardTitle>
              <CardDescription className="sr-only">
                Visualize dados de chuva diários, mensais e anuais
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="daily" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger
                    value="daily"
                    onClick={() => speakText('Visualizando gráfico diário')}
                  >
                    Últimos 30 Dias
                  </TabsTrigger>
                  <TabsTrigger
                    value="monthly"
                    onClick={() => speakText('Visualizando gráfico mensal')}
                  >
                    Últimos 12 Meses
                  </TabsTrigger>
                  <TabsTrigger
                    value="yearly"
                    onClick={() => speakText('Visualizando gráfico anual')}
                  >
                    Histórico Anual
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="daily" className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis
                        dataKey="date"
                        tick={{ fill: 'hsl(var(--foreground))' }}
                        tickLine={{ stroke: 'hsl(var(--foreground))' }}
                      />
                      <YAxis
                        tick={{ fill: 'hsl(var(--foreground))' }}
                        tickLine={{ stroke: 'hsl(var(--foreground))' }}
                        label={{ value: 'Milímetros (mm)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.2)' }} />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Bar
                        dataKey="rainfall"
                        name="Chuva (mm)"
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                        aria-label="Volume de chuva em milímetros"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>

                <TabsContent value="monthly" className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: 'hsl(var(--foreground))' }}
                        tickLine={{ stroke: 'hsl(var(--foreground))' }}
                      />
                      <YAxis
                        yAxisId="left"
                        tick={{ fill: 'hsl(var(--foreground))' }}
                        tickLine={{ stroke: 'hsl(var(--foreground))' }}
                        label={{ value: 'Chuva (mm)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fill: 'hsl(var(--destructive))' }}
                        tickLine={{ stroke: 'hsl(var(--destructive))' }}
                        label={{ value: 'Ocorrências', angle: 90, position: 'insideRight', fill: 'hsl(var(--destructive))' }}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.2)' }} />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Bar
                        yAxisId="left"
                        dataKey="rainfall"
                        name="Chuva (mm)"
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="occurrences"
                        name="Ocorrências"
                        stroke="hsl(var(--destructive))"
                        strokeWidth={3}
                        dot={{ r: 4, fill: 'hsl(var(--destructive))' }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </TabsContent>

                <TabsContent value="yearly" className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={yearlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis
                        dataKey="year"
                        tick={{ fill: 'hsl(var(--foreground))' }}
                        tickLine={{ stroke: 'hsl(var(--foreground))' }}
                      />
                      <YAxis
                        yAxisId="left"
                        tick={{ fill: 'hsl(var(--foreground))' }}
                        tickLine={{ stroke: 'hsl(var(--foreground))' }}
                        label={{ value: 'Total Anual (mm)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--foreground))' }}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fill: 'hsl(var(--destructive))' }}
                        tickLine={{ stroke: 'hsl(var(--destructive))' }}
                        label={{ value: 'Ocorrências Graves', angle: 90, position: 'insideRight', fill: 'hsl(var(--destructive))' }}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.2)' }} />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Bar
                        yAxisId="left"
                        dataKey="rainfall"
                        name="Chuva Total (mm)"
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="occurrences"
                        name="Ocorrências Graves"
                        stroke="hsl(var(--destructive))"
                        strokeWidth={3}
                        dot={{ r: 4, fill: 'hsl(var(--destructive))' }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
