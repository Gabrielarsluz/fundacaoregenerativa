import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoteCard from "@/components/LoteCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import heroDegraded from "@/assets/hero-degraded.jpg";
import heroRegenerated from "@/assets/hero-regenerated.jpg";
import loteDurante from "@/assets/lote-durante.jpg";

// Mock data
const mockLotes = [
  {
    id: "1",
    slug: "vale-esperanca-pe",
    nome: "Vale da Esperança",
    estado: "PE",
    cidade: "Petrolina",
    areaHa: 45,
    status: "Em regeneração" as const,
    progressoPercent: 67,
    imagemCapa: loteDurante,
  },
  {
    id: "2",
    slug: "serra-verde-ba",
    nome: "Serra Verde",
    estado: "BA",
    cidade: "Juazeiro",
    areaHa: 32,
    status: "Concluído" as const,
    progressoPercent: 100,
    imagemCapa: heroRegenerated,
  },
  {
    id: "3",
    slug: "campo-novo-ce",
    nome: "Campo Novo",
    estado: "CE",
    cidade: "Quixadá",
    areaHa: 58,
    status: "Planejamento" as const,
    progressoPercent: 15,
    imagemCapa: heroDegraded,
  },
  {
    id: "4",
    slug: "fazenda-sol-rn",
    nome: "Fazenda do Sol",
    estado: "RN",
    cidade: "Mossoró",
    areaHa: 40,
    status: "Em regeneração" as const,
    progressoPercent: 45,
    imagemCapa: loteDurante,
  },
];

const Lotes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("todos");
  const [estadoFilter, setEstadoFilter] = useState<string>("todos");

  const filteredLotes = mockLotes.filter((lote) => {
    const matchesSearch =
      lote.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lote.cidade.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "todos" || lote.status === statusFilter;
    const matchesEstado = estadoFilter === "todos" || lote.estado === estadoFilter;

    return matchesSearch && matchesStatus && matchesEstado;
  });

  const estados = Array.from(new Set(mockLotes.map((l) => l.estado)));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Lotes</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Acompanhe a transformação de cada lote de terra, do planejamento à regeneração completa.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-card border-b border-border py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por nome ou cidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os status</SelectItem>
                  <SelectItem value="Planejamento">Planejamento</SelectItem>
                  <SelectItem value="Em regeneração">Em regeneração</SelectItem>
                  <SelectItem value="Concluído">Concluído</SelectItem>
                </SelectContent>
              </Select>

              {/* Estado Filter */}
              <Select value={estadoFilter} onValueChange={setEstadoFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os estados</SelectItem>
                  {estados.map((estado) => (
                    <SelectItem key={estado} value={estado}>
                      {estado}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Lotes Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredLotes.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  Nenhum lote encontrado com os filtros selecionados.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    {filteredLotes.length} {filteredLotes.length === 1 ? "lote encontrado" : "lotes encontrados"}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLotes.map((lote) => (
                    <LoteCard key={lote.id} {...lote} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Lotes;
