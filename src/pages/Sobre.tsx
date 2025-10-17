import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Leaf, Award } from "lucide-react";
import heroRegenerated from "@/assets/hero-regenerated.jpg";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              Conheça a Fundação Ação Regenerativa e nossa missão de regenerar a Caatinga
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  A Fundação Ação Regenerativa nasceu da urgência de proteger e restaurar a Caatinga, um dos
                  biomas mais ameaçados do Brasil. Acreditamos que a regeneração ambiental deve ser transparente,
                  participativa e tecnicamente sólida.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Através de um modelo inovador de governança descentralizada e tokenização, permitimos que
                  qualquer pessoa participe ativamente da regeneração de lotes de terra, acompanhando cada etapa
                  com total transparência.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nosso objetivo é regenerar milhares de hectares nos próximos anos, criando um modelo
                  replicável e sustentável de restauração ecológica.
                </p>
              </div>
              <div>
                <img
                  src={heroRegenerated}
                  alt="Caatinga regenerada"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nossos Valores</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Impacto Real</h3>
                  <p className="text-muted-foreground">
                    Foco em resultados concretos e mensuráveis de regeneração
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Transparência</h3>
                  <p className="text-muted-foreground">
                    Prestação de contas clara e acessível a todos os participantes
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Leaf className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Sustentabilidade</h3>
                  <p className="text-muted-foreground">
                    Práticas que garantem a perenidade dos ecossistemas
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Inovação</h3>
                  <p className="text-muted-foreground">
                    Uso de tecnologia e métodos inovadores de governança
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nossa Equipe</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Profissionais dedicados à regeneração ambiental e governança participativa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  nome: "Dra. Ana Silva",
                  cargo: "Diretora Executiva",
                  bio: "Bióloga especializada em recuperação de áreas degradadas com 15 anos de experiência",
                },
                {
                  nome: "João Santos",
                  cargo: "Coordenador de Projetos",
                  bio: "Engenheiro Agrônomo focado em agroecologia e sistemas regenerativos",
                },
                {
                  nome: "Maria Oliveira",
                  cargo: "Gestora de Governança",
                  bio: "Especialista em DAOs e governança descentralizada aplicada a projetos ambientais",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="h-48 bg-gradient-hero rounded-lg mb-4"></div>
                    <h3 className="text-xl font-semibold mb-1">{member.nome}</h3>
                    <p className="text-primary font-medium mb-3">{member.cargo}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">Parceiros</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-24 bg-background rounded-lg flex items-center justify-center"
                  >
                    <span className="text-muted-foreground font-medium">Parceiro {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
