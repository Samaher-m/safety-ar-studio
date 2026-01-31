import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Clock, Target, RotateCcw, Home, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface CompletionModalProps {
  isOpen: boolean;
  scenarioTitle: string;
  score: number;
  timeSpent: string;
  stepsCompleted: number;
  totalSteps: number;
  recommendations: string[];
  onRetry: () => void;
  onClose: () => void;
}

export const CompletionModal = ({
  isOpen,
  scenarioTitle,
  score,
  timeSpent,
  stepsCompleted,
  totalSteps,
  recommendations,
  onRetry,
  onClose,
}: CompletionModalProps) => {
  const navigate = useNavigate();

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 70) return "text-accent";
    if (score >= 50) return "text-warning";
    return "text-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent!";
    if (score >= 70) return "Good Job!";
    if (score >= 50) return "Keep Practicing";
    return "Needs Improvement";
  };

  const getStars = (score: number) => {
    if (score >= 90) return 3;
    if (score >= 70) return 2;
    if (score >= 50) return 1;
    return 0;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[hsl(222_47%_13%)] rounded-2xl border border-border overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Success animation background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
              />
            </div>

            <div className="relative p-4 sm:p-5">
              {/* Trophy icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[0_0_30px_hsl(25_95%_53%/0.4)]"
              >
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-4"
              >
                <h2 className="font-display text-xl font-bold text-foreground mb-1">
                  Training Complete!
                </h2>
                <p className="text-sm text-muted-foreground">{scenarioTitle}</p>
              </motion.div>

              {/* Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-2 mb-4"
              >
                {[1, 2, 3].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{
                      scale: star <= getStars(score) ? 1 : 0.7,
                      rotate: 0,
                    }}
                    transition={{ delay: 0.4 + star * 0.1, type: "spring" }}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= getStars(score)
                          ? "text-warning fill-warning"
                          : "text-muted"
                      }`}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mb-4"
              >
                <div className={`font-display text-4xl font-bold ${getScoreColor(score)}`}>
                  {score}%
                </div>
                <Badge variant="glass" className="mt-1 text-xs">
                  {getScoreLabel(score)}
                </Badge>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-3 mb-4"
              >
                <div className="bg-[hsl(222_47%_16%)] rounded-lg p-3 text-center">
                  <Clock className="w-4 h-4 text-accent mx-auto mb-1" />
                  <div className="text-base font-semibold text-foreground">{timeSpent}</div>
                  <div className="text-xs text-muted-foreground">Time Spent</div>
                </div>
                <div className="bg-[hsl(222_47%_16%)] rounded-lg p-3 text-center">
                  <Target className="w-4 h-4 text-success mx-auto mb-1" />
                  <div className="text-base font-semibold text-foreground">
                    {stepsCompleted}/{totalSteps}
                  </div>
                  <div className="text-xs text-muted-foreground">Steps Completed</div>
                </div>
              </motion.div>

              {/* AI Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-[hsl(222_47%_16%)] rounded-lg p-3 mb-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-foreground">
                    AI Safety Recommendations
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {recommendations.slice(0, 3).map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-success flex-shrink-0 mt-0.5" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-3"
              >
              <Button
                  variant="heroOutline"
                  className="flex-1"
                  onClick={() => navigate("/dashboard")}
                >
                  <Home className="w-4 h-4" />
                  Go to Dashboard
                </Button>
                <Button
                  variant="hero"
                  className="flex-1"
                  onClick={onRetry}
                >
                  <RotateCcw className="w-4 h-4" />
                  Return to Training
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
