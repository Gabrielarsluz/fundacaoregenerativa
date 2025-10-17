import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Vote, Shield, CheckCircle, XCircle, Clock } from "lucide-react";

const Governanca = () => {
  const propostas = [
    {
      titulo: "Expansão do Lote Serra Verde",
      descricao: "Proposta para adicionar 15 hectares adjacentes ao lote atual",
      status: "Votação em andamento",
      votosA: 234,
      votosContra: 89,
      encerramento: "15/12/2024",
    },
    {
      titulo: "Novo Projeto em Alagoas",
      descricao: "Iniciar regeneração de área de 40 hectares no sertão alagoano",
      status: "Aprovada",
      votosA: 456,
      votosContra: 45,
      encerramento: "28/11/2024",
    },
    {
      titulo: "Alteração no Protocolo de Monitoramento",
      descricao: "Aumentar frequência de visitas técnicas de trimestral para mensal",
      status: "Rejeitada",
      votosA: 123,
      votosContra: 287,
      encerramento: "10/11/2024",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aprovada":
        return "bg-primary text-primary-foreground";
      case "Rejeitada":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aprovada":
        return <CheckCircle className="h-4 w-4" />;
      case "Rejeitada":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Governança Descentralizada</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              Participe das decisões sobre os projetos de regeneração através de uma governança transparente e
              democrática baseada em DAO (Organização Autônoma Descentralizada).
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Modelo de Governança</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nossa estrutura de DAO combina poder de voto quadrático com mecanismos de proteção
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Vote className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-center">Voto Quadrático</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    O poder de voto cresce de forma quadrática, não linear, reduzindo a influência
                    desproporcional de grandes detentores de tokens.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-center">Veto da Fundação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    A Fundação tem poder de veto em propostas que possam comprometer a missão de regeneração ou
                    questões legais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-center">Veto Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Comunidades locais impactadas pelos projetos têm direito de veto social em decisões que os
                    afetem diretamente.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Voting power explanation */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>Como Funciona o Voto Quadrático?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  No voto quadrático, o custo de cada voto adicional aumenta de forma quadrática. Por exemplo:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-1">1 voto</div>
                    <div className="text-sm text-muted-foreground">1 token</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-1">2 votos</div>
                    <div className="text-sm text-muted-foreground">4 tokens</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-1">3 votos</div>
                    <div className="text-sm text-muted-foreground">9 tokens</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-1">4 votos</div>
                    <div className="text-sm text-muted-foreground">16 tokens</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Isso garante que pequenos detentores de tokens tenham voz significativa nas decisões.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Propostas */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Propostas Recentes</h2>
              <p className="text-muted-foreground">
                Acompanhe as votações em andamento e os resultados das propostas anteriores
              </p>
            </div>

            <div className="space-y-6">
              {propostas.map((proposta, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="mb-2">{proposta.titulo}</CardTitle>
                        <p className="text-muted-foreground">{proposta.descricao}</p>
                      </div>
                      <Badge className={`${getStatusColor(proposta.status)} flex items-center gap-1`}>
                        {getStatusIcon(proposta.status)}
                        {proposta.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Voting bars */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">A favor</span>
                          <span className="font-semibold text-primary">{proposta.votosA} votos</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{
                              width: `${
                                (proposta.votosA / (proposta.votosA + proposta.votosContra)) * 100
                              }%`,
                            }}
                          />
                        </div>

                        <div className="flex justify-between text-sm mb-1 mt-3">
                          <span className="text-muted-foreground">Contra</span>
                          <span className="font-semibold text-destructive">{proposta.votosContra} votos</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-destructive"
                            style={{
                              width: `${
                                (proposta.votosContra / (proposta.votosA + proposta.votosContra)) * 100
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          Encerramento: {proposta.encerramento}
                        </span>
                        {proposta.status === "Votação em andamento" && (
                          <Button variant="default" size="sm">
                            Votar Agora
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Para participar das votações, você precisa possuir tokens da fundação
              </p>
              <Button variant="hero" className="mt-4">
                Comprar Tokens
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Governanca;
