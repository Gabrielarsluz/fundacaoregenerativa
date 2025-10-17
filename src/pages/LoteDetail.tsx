import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Calendar, Droplet, Leaf } from "lucide-react";
import heroDegraded from "@/assets/hero-degraded.jpg";
import heroRegenerated from "@/assets/hero-regenerated.jpg";
import loteDurante from "@/assets/lote-durante.jpg";

const LoteDetail = () => {
  const { slug } = useParams();

  // Mock data - seria carregado do backend
  const lote = {
    nome: "Vale da Esperança",
    estado: "PE",
    cidade: "Petrolina",
    areaHa: 45,
    status: "Em regeneração",
    progressoPercent: 67,
    dataInicio: "15/03/2024",
    marcos: [
      { titulo: "Planejamento concluído", data: "01/02/2024", concluido: true },
      { titulo: "Cercamento e delimitação", data: "15/02/2024", concluido: true },
      { titulo: "Plantio inicial", data: "15/03/2024", concluido: true },
      { titulo: "Sistema de irrigação", data: "01/05/2024", concluido: true },
      { titulo: "Monitoramento semestral", data: "15/09/2024", concluido: false },
      { titulo: "Avaliação final", data: "15/03/2025", concluido: false },
    ],
    metrics: {
      coberturaPercent: 67,
      umidadePercent: 72,
      biodiversidadeIndex: 8.5,
    },
    antesMedia: [heroDegraded],
    duranteMedia: [loteDurante],
    depoisMedia: [heroRegenerated],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl md:text-5xl font-bold">{lote.nome}</h1>
                  <Badge className="bg-white/20 text-white border-white/30">{lote.status}</Badge>
                </div>
                <div className="flex flex-wrap gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>
                      {lote.cidade}, {lote.estado}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>{lote.areaHa} hectares</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Início: {lote.dataInicio}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Timeline */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Timeline do Projeto</h2>
                    <div className="space-y-4">
                      {lote.marcos.map((marco, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div
                            className={`mt-1 h-3 w-3 rounded-full ${
                              marco.concluido ? "bg-primary" : "bg-muted"
                            }`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3
                                className={`font-medium ${
                                  marco.concluido ? "text-foreground" : "text-muted-foreground"
                                }`}
                              >
                                {marco.titulo}
                              </h3>
                              <span className="text-sm text-muted-foreground">{marco.data}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tabs */}
                <Tabs defaultValue="antes" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="antes">Antes</TabsTrigger>
                    <TabsTrigger value="durante">Durante</TabsTrigger>
                    <TabsTrigger value="depois">Depois</TabsTrigger>
                  </TabsList>

                  <TabsContent value="antes" className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Estado Inicial</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {lote.antesMedia.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt="Antes"
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                        <p className="mt-4 text-muted-foreground">
                          Terra degradada com baixa cobertura vegetal, solo exposto e sinais de erosão.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="durante" className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Em Regeneração</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {lote.duranteMedia.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt="Durante"
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                        <p className="mt-4 text-muted-foreground">
                          Plantio em andamento com {lote.metrics.coberturaPercent}% de cobertura vegetal alcançada.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="depois" className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Projeção Final</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {lote.depoisMedia.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt="Depois"
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                        <p className="mt-4 text-muted-foreground">
                          Resultado esperado: ecossistema regenerado com biodiversidade restaurada.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Metrics */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Métricas Atuais</h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Leaf className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Cobertura Vegetal</span>
                          </div>
                          <span className="text-sm font-bold text-primary">
                            {lote.metrics.coberturaPercent}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${lote.metrics.coberturaPercent}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Droplet className="h-4 w-4 text-secondary" />
                            <span className="text-sm font-medium">Umidade do Solo</span>
                          </div>
                          <span className="text-sm font-bold text-secondary">
                            {lote.metrics.umidadePercent}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-secondary"
                            style={{ width: `${lote.metrics.umidadePercent}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Índice de Biodiversidade</span>
                          <span className="text-2xl font-bold text-primary">
                            {lote.metrics.biodiversidadeIndex}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">De 0 a 10</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-hero text-white border-0">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Apoie Este Lote</h3>
                    <p className="text-white/90 text-sm">
                      Compre tokens vinculados a este projeto e participe da regeneração da Caatinga.
                    </p>
                    <Button variant="secondary" className="w-full" size="lg">
                      Comprar Tokens
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LoteDetail;
