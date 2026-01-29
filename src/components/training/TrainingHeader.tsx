import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, ArrowLeft } from "lucide-react";
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
                <span className="flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="hidden md:flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index < currentStep
                    ? "bg-success shadow-[0_0_10px_hsl(142_71%_45%/0.5)]"
                    : index === currentStep
                    ? "bg-primary shadow-[0_0_10px_hsl(25_95%_53%/0.5)]"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};
