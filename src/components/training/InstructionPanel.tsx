import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Circle, AlertCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TrainingStep {
  id: number;
  title: string;
  description: string;
  tips?: string[];
  isCompleted: boolean;
  isCurrent: boolean;
}

interface InstructionPanelProps {
  steps: TrainingStep[];
  onStepClick?: (stepId: number) => void;
}

export const InstructionPanel = ({ steps, onStepClick }: InstructionPanelProps) => {
  return (
    <div className="bg-[hsl(222_47%_13%)] rounded-xl border border-border overflow-hidden h-full">
      <div className="p-4 border-b border-border bg-[hsl(222_47%_15%)]">
        <h3 className="font-display text-lg font-semibold text-foreground">
          Training Instructions
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Follow each step carefully
        </p>
      </div>

      <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onStepClick?.(step.id)}
            className={cn(
              "relative p-4 rounded-lg border transition-all duration-300 cursor-pointer",
              step.isCurrent
                ? "bg-primary/10 border-primary shadow-[0_0_20px_hsl(25_95%_53%/0.2)]"
                : step.isCompleted
                ? "bg-success/10 border-success/30"
                : "bg-[hsl(222_47%_16%)] border-border hover:border-muted-foreground/30"
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {step.isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <CheckCircle className="w-5 h-5 text-success" />
                  </motion.div>
                ) : step.isCurrent ? (
                  <div className="relative">
                    <Circle className="w-5 h-5 text-primary" />
                    <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary/30 animate-ping" />
                  </div>
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className={cn(
                      "font-medium text-sm",
                      step.isCurrent
                        ? "text-primary"
                        : step.isCompleted
                        ? "text-success"
                        : "text-foreground"
                    )}
                  >
                    Step {step.id}: {step.title}
                  </h4>
                  {step.isCurrent && (
                    <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
                  )}
                </div>

                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {step.description}
                </p>

                {/* Tips section */}
                <AnimatePresence>
                  {step.isCurrent && step.tips && step.tips.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 pt-3 border-t border-primary/20"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-3.5 h-3.5 text-accent" />
                        <span className="text-xs font-medium text-accent">
                          Pro Tips
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="text-xs text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Progress line connecting steps */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "absolute left-[26px] top-[52px] w-0.5 h-[calc(100%+12px)] -translate-x-1/2",
                  step.isCompleted ? "bg-success/50" : "bg-border"
                )}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
