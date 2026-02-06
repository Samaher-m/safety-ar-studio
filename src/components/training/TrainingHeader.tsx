import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface TrainingHeaderProps {
  title: string;
  difficulty: "low" | "medium" | "high";
  duration: string;
  currentStep: number;
  totalSteps: number;
}

const difficultyConfig = {
  low: { label: "Low", variant: "success" as const },
  medium: { label: "Medium", variant: "warning" as const },
  high: { label: "High", variant: "destructive" as const },
};

export const TrainingHeader = ({
  title,
  difficulty,
  duration,
  currentStep,
  totalSteps,
}: TrainingHeaderProps) => {
  const navigate = useNavigate();
  const config = difficultyConfig[difficulty];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10 bg-[hsl(222_47%_11%/0.95)] backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {title}
                </h1>
                <Badge variant={config.variant}>{config.label} Difficulty</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {duration}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.header>
  );
};
