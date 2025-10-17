import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Users, TrendingUp } from "lucide-react";

const Tokens = () => {
  const tokenOptions = [
    {
      nome: "Token Básico",
      quantidade: 10,
      precoBRL: 100,
      beneficios: ["Direito a voto", "Relatórios trimestrais", "Certificado digital"],
      limitePorPessoa: 100,
      popular: false,
    },
    {
      nome: "Token Premium",
      quantidade: 50,
      precoBRL: 450,
      beneficios: [
        "Direito a voto ampliado",
        "Relatórios mensais",
        "Visita ao lote",
        "Certificado físico",
      ],
      limitePorPessoa: 500,
      popular: true,
    },
    {
      nome: "Token Institucional",
      quantidade: 200,
      precoBRL: 1600,
      beneficios: [
        "Direito a voto institucional",
        "Relatórios semanais",
        "Visitas ilimitadas",
        "Logo na placa do lote",
        "Certificado premium",
      ],
      limitePorPessoa: 2000,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tokens de Regeneração</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              Participe ativamente da regeneração da Caatinga comprando tokens. Tenha direito a voto, acesso a
              relatórios exclusivos e acompanhe de perto cada projeto.
            </p>
          </div>
        </section>

        {/* What are tokens */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">O que são os Tokens?</h2>
              <p className="text-lg text-muted-foreground">
                Os tokens representam sua participação nos projetos de regeneração. Cada token concede direitos
                de governança, acesso a informações privilegiadas e a oportunidade de fazer parte de uma
                transformação real.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Transparência</h3>
                  <p className="text-muted-foreground">
                    Todos os tokens são registrados em blockchain, garantindo transparência total
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Governança</h3>
                  <p className="text-muted-foreground">
                    Participe das decisões sobre os projetos através do voto quadrático
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <TrendingUp className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Impacto Real</h3>
                  <p className="text-muted-foreground">
                    Acompanhe o progresso dos lotes e veja o impacto direto da sua contribuição
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Escolha seu Plano</h2>
              <p className="text-lg text-muted-foreground">
                Selecione a quantidade de tokens que melhor se adapta aos seus objetivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tokenOptions.map((option, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    option.popular ? "border-primary border-2 shadow-xl" : ""
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-2xl">{option.nome}</CardTitle>
                    <div className="pt-4">
                      <div className="text-4xl font-bold text-primary">R$ {option.precoBRL}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {option.quantidade} tokens
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {option.beneficios.map((beneficio, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{beneficio}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-4">
                        Limite: {option.limitePorPessoa} tokens por pessoa
                      </p>
                      <Button
                        variant={option.popular ? "hero" : "default"}
                        className="w-full"
                        size="lg"
                      >
                        Comprar Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Pagamento seguro via PIX, cartão de crédito ou carteira Web3
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Como Funciona</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Cadastre-se", desc: "Crie sua conta gratuitamente" },
                { step: "2", title: "Escolha", desc: "Selecione a quantidade de tokens" },
                { step: "3", title: "Pague", desc: "PIX, cartão ou carteira Web3" },
                { step: "4", title: "Participe", desc: "Acompanhe e vote nos projetos" },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tokens;
