import { Link } from "react-router-dom";
import { MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface LoteCardProps {
  id: string;
  slug: string;
  nome: string;
  estado: string;
  cidade: string;
  areaHa: number;
  status: "Planejamento" | "Em regeneração" | "Concluído";
  progressoPercent: number;
  imagemCapa: string;
}

const LoteCard = ({
  slug,
  nome,
  estado,
  cidade,
  areaHa,
  status,
  progressoPercent,
  imagemCapa,
}: LoteCardProps) => {
  const statusColors = {
    Planejamento: "bg-sand text-sand-foreground",
    "Em regeneração": "bg-secondary text-secondary-foreground",
    Concluído: "bg-primary text-primary-foreground",
  };

  return (
    <Link to={`/lotes/${slug}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imagemCapa}
            alt={nome}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge className={statusColors[status]}>{status}</Badge>
          </div>
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {nome}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {cidade}, {estado}
            </span>
          </div>

          {/* Area */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>{areaHa} hectares</span>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground">Progresso</span>
              <span className="font-semibold text-primary">{progressoPercent}%</span>
            </div>
            <Progress value={progressoPercent} className="h-2" />
          </div>
        </CardContent>

        <CardFooter className="px-4 pb-4">
          <span className="text-sm text-primary font-medium group-hover:underline">
            Ver detalhes →
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default LoteCard;
