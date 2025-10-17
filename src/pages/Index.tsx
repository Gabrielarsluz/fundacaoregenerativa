import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";
import heroDegraded from "@/assets/hero-degraded.jpg";
import heroRegenerated from "@/assets/hero-regenerated.jpg";
import loteDurante from "@/assets/lote-durante.jpg";

const Index = () => {
  const stats = [
    { label: "Lotes em Regeneração", value: "12", icon: Leaf },
    { label: "Hectares Restaurados", value: "485", icon: TrendingUp },
    { label: "Participantes Ativos", value: "1.2k", icon: Users },
    { label: "Tokens em Circulação", value: "50k", icon: Shield },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={heroDegraded}
              alt="Caatinga"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Regenerar a terra, lote por lote
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Acompanhe fotos e vídeos de cada etapa e participe comprando tokens
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/lotes">
                  Ver Lotes <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/tokens">Comprar Tokens</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Showcase */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Transformação Visível
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Veja a jornada completa de regeneração: da terra degradada ao ecossistema próspero
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Antes */}
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={heroDegraded}
                    alt="Antes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-earth text-earth-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Antes
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Terra Degradada</h3>
                  <p className="text-muted-foreground">
                    Solo exposto, baixa cobertura vegetal e sinais de erosão
                  </p>
                </CardContent>
              </Card>

              {/* Durante */}
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={loteDurante}
                    alt="Durante"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Durante
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Em Regeneração</h3>
                  <p className="text-muted-foreground">
                    Plantio estratégico e recuperação do solo em andamento
                  </p>
                </CardContent>
              </Card>

              {/* Depois */}
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={heroRegenerated}
                    alt="Depois"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Depois
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ecossistema Próspero</h3>
                  <p className="text-muted-foreground">
                    Biodiversidade restaurada e solo fértil recuperado
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button variant="default" size="lg" asChild>
                <Link to="/lotes">
                  Explorar Todos os Lotes <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Participe da Regeneração da Caatinga
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Compre tokens e tenha voz na governança dos projetos. Transparência total em cada etapa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/tokens">Comprar Tokens</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/governanca">Saiba Mais sobre Governança</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
